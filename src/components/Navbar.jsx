import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-4 z-[100] absolute'>
      <h1 className='text-red-500 text-4xl font-bold cursor-pointer'>TheFlix</h1>
      <div className='flex space-x-2'>
        <button className='border-2 border-red-600 bg-transparent px-6 py-2 rounded cursor-pointer text-red-600'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar