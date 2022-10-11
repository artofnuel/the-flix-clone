import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/18ff7309-e9d1-42be-bc89-0ec9c08bc9d8/NG-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Netflix BKG" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[400px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  )
}

export default Account