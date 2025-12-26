import fs from "fs/promises"
import path from "path"

export const runtime = "nodejs"

const DOCS_DIR = path.join(process.cwd(), "public", "docs")
const MAX_BYTES = 10 * 1024 * 1024 // 10MB per file

export async function GET() {
  try {
    const files = await fs.readdir(DOCS_DIR)
    const fileInfos = await Promise.all(
      files.map(async (f) => {
        const stats = await fs.stat(path.join(DOCS_DIR, f))
        return { name: f, size: stats.size }
      })
    )
    return new Response(JSON.stringify({ files: fileInfos }), { status: 200 })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Could not read docs directory' }), { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    // verify admin session first
    const ADMIN_SECRET = process.env.ADMIN_SECRET
    if (!ADMIN_SECRET) {
      return new Response(JSON.stringify({ error: 'Server not configured' }), { status: 500 })
    }

    const cookie = req.headers.get('cookie') || ''
    const match = cookie.match(new RegExp(`(?:^|; )admin_session=([^;]+)`))
    if (!match) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })

    const val = match[1]
    const [expiryStr, signature] = val.split(':')
    const expiry = Number(expiryStr)
    if (!expiry || !signature || expiry < Math.floor(Date.now() / 1000)) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })

    const expected = require('crypto').createHmac('sha256', ADMIN_SECRET).update(String(expiry)).digest('hex')
    if (!require('crypto').timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })

    const form = await req.formData()
    const entries = Array.from(form.entries())
    if (entries.length === 0) {
      return new Response(JSON.stringify({ error: "No files provided" }), { status: 400 })
    }

    const saved: Array<{ name: string; size: number }> = []

    await fs.mkdir(DOCS_DIR, { recursive: true })

    for (const [, value] of entries) {
      // value can be string or File
      if (typeof value === 'string') continue
      const file = value as File
      const name: string = (file as any).name || `upload-${Date.now()}.pdf`
      const safeName = path.basename(name)

      if (!safeName.toLowerCase().endsWith(".pdf")) {
        return new Response(JSON.stringify({ error: "Only PDF files are allowed" }), { status: 400 })
      }

      const ab = await file.arrayBuffer()
      const bytes = new Uint8Array(ab)
      if (bytes.byteLength > MAX_BYTES) {
        return new Response(JSON.stringify({ error: `File ${safeName} exceeds size limit (10MB)` }), { status: 400 })
      }

      const dest = path.join(DOCS_DIR, safeName)
      await fs.writeFile(dest, bytes)
      saved.push({ name: safeName, size: bytes.byteLength })
    }

    return new Response(JSON.stringify({ success: true, files: saved }), { status: 200 })
  } catch (e: any) {
    console.error(e)
    return new Response(JSON.stringify({ error: e?.message ?? 'Upload failed' }), { status: 500 })
  }
}
