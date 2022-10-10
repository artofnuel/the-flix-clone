import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/18ff7309-e9d1-42be-bc89-0ec9c08bc9d8/NG-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Netflix BKG" />
            {/* an overlay for the image */}
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            {/* to set up the registration card */}
            <div className="fixed w-full px-4 py-24 z-50">
                {/* the dimensions */}
                <div className="max-w-xl h-[600px] mx-auto bg-black/75 text-white">
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        {/* error msg should you fail to use the right details in the form */}
                        {error ? <p className='p-3 border border-red-400 my-2'>{error}</p> : null}
                        <form onSubmit={handleSubmit} className='flex flex-col w-full py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-800 rounded' type="email" placeholder='Email' autoComplete='email' />
                            <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-800 rounded' type="password" placeholder='password' autoComplete='current-password' />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'> Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p className=''>Need Help?</p>
                            </div>
                            <p className='py-8 text-center'>
                                <span className='text-gray-600 mr-2'>New to Netflix?</span>
                                <Link to='/signup'>
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login