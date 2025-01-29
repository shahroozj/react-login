'use server'

import * as jwt from '@tsndr/cloudflare-worker-jwt'
import { cookies } from 'next/headers'
import { createToken } from '../lib/auth'

export default async function login(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    return { status: false, message: 'Please enter your email and password.' }
  }

  if (email === 'test@test.com' && password === '123') {
    const token = await createToken({ email })

    const cookieStore = await cookies()
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })

    return { status: true, message: '', token }
  }

  return { status: false, message: 'Invalid credentials' }
}

export async function logoutUser() {
  const cookieStore = await cookies()
  cookieStore.set('token', '', { expires: new Date(0) })
}
