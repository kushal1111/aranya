import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Only inspect /admin routes
  if (!pathname.startsWith('/admin')) return NextResponse.next()

  // Allow API auth endpoints and static assets
  if (pathname.startsWith('/api/admin')) return NextResponse.next()

  const cookie = req.cookies.get('admin_session')?.value

  // If no session cookie: redirect to login (unless already on login page)
  if (!cookie) {
    if (pathname === '/admin/login' || pathname === '/admin/login/') return NextResponse.next()
    const url = req.nextUrl.clone()
    url.pathname = '/admin/login'
    const res = NextResponse.redirect(url)
    // Clear any stale admin cookie just in case
    res.cookies.set('admin_session', '', { path: '/', maxAge: 0 })
    return res
  }

  // Cookie exists; basic expiry check (format: expiry:signature)
  const [expiryStr] = cookie.split(':')
  const expiry = Number(expiryStr)
  if (!expiry || expiry < Math.floor(Date.now() / 1000)) {
    // expired
    if (pathname === '/admin/login' || pathname === '/admin/login/') return NextResponse.next()
    const url = req.nextUrl.clone()
    url.pathname = '/admin/login'
    const res = NextResponse.redirect(url)
    // Clear expired cookie
    res.cookies.set('admin_session', '', { path: '/', maxAge: 0 })
    return res
  }

  // Authenticated users should not stay on login page
  if (pathname === '/admin/login' || pathname === '/admin/login/') {
    const url = req.nextUrl.clone()
    url.pathname = '/admin/upload'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
