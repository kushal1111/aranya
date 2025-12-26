import { NextResponse } from 'next/server'

const COOKIE_NAME = 'admin_session'

export async function POST() {
  const res = NextResponse.json({ success: true })
  res.cookies.set({ name: COOKIE_NAME, value: '', httpOnly: true, path: '/', maxAge: 0 })
  return res
}
