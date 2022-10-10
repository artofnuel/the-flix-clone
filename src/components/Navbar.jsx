import { async } from '@firebase/util'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

// Link controls which part of the app you're lead to on click.

const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()
  // console.log(user)

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full flex items-center justify-between p-4 z-[100] absolute'>
      <Link to="/" >
        <h1 className='text-red-500 text-4xl font-bold cursor-pointer'>TheFlix</h1>
      </Link>
      {user?.email ? (
        <div className='flex space-x-2'>
          <Link to="/account">
            <button className='hover:border-2 border-red-600 bg-transparent px-6 py-2 rounded cursor-pointer text-red-600'>Account</button>
          </Link>
          <button onClick={handleLogOut} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-white hover:text-red-600'>Log Out</button>
        </div>
      ) : (
        <div className='flex space-x-2'>
          <Link to="/login">
            <button className='hover:border-2 border-red-600 bg-transparent px-6 py-2 rounded cursor-pointer text-red-600'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-white hover:text-red-600'>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar