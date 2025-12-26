import { NextResponse } from 'next/server'
import crypto from 'crypto'

const COOKIE_NAME = 'admin_session'
const MAX_AGE = 7 * 24 * 60 * 60 // 7 days

function signToken(secret: string, expiry: number) {
  return crypto.createHmac('sha256', secret).update(String(expiry)).digest('hex')
}

export async function POST(req: Request) {
  try {
    const { password } = await req.json()
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
    const ADMIN_SECRET = process.env.ADMIN_SECRET
    if (!ADMIN_PASSWORD || !ADMIN_SECRET) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const expiry = Math.floor(Date.now() / 1000) + MAX_AGE
    const signature = signToken(ADMIN_SECRET, expiry)
    const cookieValue = `${expiry}:${signature}`

    const res = NextResponse.json({ success: true })
    res.cookies.set({ name: COOKIE_NAME, value: cookieValue, httpOnly: true, path: '/', maxAge: MAX_AGE, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' })
    return res
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Login failed' }, { status: 500 })
  }
}
