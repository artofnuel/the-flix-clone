import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Movies from './Movies'

const Row = ({title, fetchURL}) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) =>{
            setMovies(response.data.results)
        })
        // please include an [] just before the close of...
        // the function, else you'll keep calling for data forever.
    }, [fetchURL])
    console.log(movies)
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-auto scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movies key={id} item={item} />
                ))}
            </div>
        </div>
    </>
  )
}

export default Row