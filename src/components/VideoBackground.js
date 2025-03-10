import React from 'react'
import { useSelector } from 'react-redux'
import useMovietrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {
  const trailerVideos= useSelector((store)=>store.movies?.trailerVideo)

  useMovietrailer(movieId);
 
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/"+trailerVideos?.key+"?&autoplay=1&mute=1"}
       title="YouTube video player"
       frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>
       </iframe>
      
    </div>
  )
}

export default VideoBackground
