import Link from 'next/link'

export default function Signup() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-md'>
        <h2 className='mb-6 text-2xl font-bold text-center text-gray-800'>Signup</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='email'
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
              className='w-full px-4 py-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300'
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-600'>
              Confirm Password
            </label>
            <input
              type='password'
              id='re-password'
              className='w-full px-4 py-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300'
              placeholder='Confirm your password'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
          >
            Signup
          </button>
          <p className='mt-4 text-sm text-center text-gray-600'>
            Already have an account?{' '}
            <Link href='/' className='hover:underline'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
