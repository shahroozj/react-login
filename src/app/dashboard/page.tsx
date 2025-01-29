'use client'

import { logoutUser } from '../actions/login'

export default function Dashboard() {
  async function logout() {
    await logoutUser()
    location.href = '/'
  }

  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-between m-4'>
        <h1 className='text-4xl text-bold'>Dashboard</h1>
      </div>
      <div className='flex items-center justify-between m-4'>
        <p>Welcome to the dashboard!</p>
      </div>
      <div className='flex items-center justify-between m-4'>
        <button
          className='px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}
