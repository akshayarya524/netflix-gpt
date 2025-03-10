import React from 'react'
import { useSelector } from 'react-redux'
import VideoTittle from './VideoTittle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies= useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie= movies[0];
    
    const {original_title, overview, id}= mainMovie;
    
  return (
    <div>
      <VideoTittle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
