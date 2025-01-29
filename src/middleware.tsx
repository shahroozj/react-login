import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './app/lib/auth'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const payload = await verifyToken(token)

  try {
    if (payload) {
      console.log('payload', payload)
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/', req.url))
    }
  } catch (error) {
    console.log('Error', error)
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: ['/dashboard:path*'], // Protect all routes under /dashboard
}
