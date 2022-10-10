import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Movies from './Movies'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({ title, fetchURL, rowID }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
        // please include an [] just before the close of...
        // the function, else you'll keep calling for data forever.
    }, [fetchURL])
    
    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return (
        <>
            <div className="my-10">
                <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
                <div className='relative flex items-center group'>
                    <MdChevronLeft onClick={slideLeft} className='hidden bg-white left-0 rounded-full absolute cursor-pointer z-10 opacity-50 hover:opacity-100 group-hover:block' size={40} />
                    <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {movies.map((item, id) => (
                            <Movies key={id} item={item} />
                        ))}
                    </div>
                    <MdChevronRight onClick={slideRight} className='hidden bg-white right-0 rounded-full absolute cursor-pointer z-10 opacity-50 hover:opacity-100 group-hover:block' size={40} />
                </div>
            </div>
        </>
    )
}

export default Row