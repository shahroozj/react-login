'use client'

import Link from 'next/link'
import login from './actions/login'
import { useState } from 'react'

export default function Home() {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)

    const formData = new FormData(e.currentTarget)
    const response = await login(formData)

    if (response.status) {
      setError('')
      location.href = '/dashboard'
    } else {
      setError(response.message)
    }
    setPending(false)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-md'>
        <h2 className='mb-6 text-2xl font-bold text-center text-gray-800'>Login</h2>
        {error && <p className='mt-2 text-sm text-red-600 text-center'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='w-full px-4 py-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full px-4 py-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
            disabled={pending}
          >
            {pending ? 'Login...' : 'Login'}
          </button>
        </form>
        <p className='mt-4 text-sm text-center text-gray-600'>
          Don't have an account?{' '}
          <Link href='/signup' className='hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
