import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-40 pr-4'>
        <img src={IMG_CDN_URL+posterpath} alt="movie card"/>
      
    </div>
  )
}

export default MovieCard
