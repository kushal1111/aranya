import { NextResponse } from 'next/server'
import crypto from 'crypto'

const COOKIE_NAME = 'admin_session'

function signToken(secret: string, expiry: number) {
  return crypto.createHmac('sha256', secret).update(String(expiry)).digest('hex')
}

export async function GET(req: Request) {
  try {
    const ADMIN_SECRET = process.env.ADMIN_SECRET
    if (!ADMIN_SECRET) return NextResponse.json({ authenticated: false })

    const cookie = req.headers.get('cookie') || ''
    const match = cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`))
    if (!match) return NextResponse.json({ authenticated: false })

    const val = match[1]
    const [expiryStr, signature] = val.split(':')
    const expiry = Number(expiryStr)
    if (!expiry || !signature) return NextResponse.json({ authenticated: false })
    if (expiry < Math.floor(Date.now() / 1000)) return NextResponse.json({ authenticated: false })

    const expected = signToken(ADMIN_SECRET, expiry)
    if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return NextResponse.json({ authenticated: false })

    return NextResponse.json({ authenticated: true })
  } catch (e) {
    return NextResponse.json({ authenticated: false })
  }
}
