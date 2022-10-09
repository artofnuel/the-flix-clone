import React, { useEffect } from 'react'
import { useState } from 'react'
import requests from '../Request'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    // This will get use just 1 random movie from the entire length
    // In this case the length is 20.
    const movie = movies[Math.floor(Math.random() * movies.length)]

    // This will get us a series of movies from the fetch.
    useEffect(() => {
        axios.get(requests.requestNowPlaying).then((response) =>{
            setMovies(response.data.results)
        })
        // please include an [] just before the close of...
        // the function, else you'll keep calling for data forever.
    }, [])
    console.log(movie)

    const truncateString = (string, number) => {
        if(string?.length > number) {
            return string.slice(0, number) + '...'
        } else {
            return string
        }
    }

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover object-center' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
            {/* Movie Heading */}
            <div className='absolute w-full top-[20%] p-4 flex flex-col space-y-2 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='flex space-x-2'>
                    <button className='border border-gray-300 bg-slate-300 text-black py-2 px-5'>Play</button>
                    <button className='border border-gray-300 text-white py-2 px-5'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'>Release Date: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>
    </div>
  )
}

export default Main