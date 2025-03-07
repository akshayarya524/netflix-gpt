import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector((store)=>store.movies);
  return (
   movies.nowPlayingMovies &&( 
   <div className=' bg-black'>
    <div className='-mt-11 pl-12 relative z-20 bg-black'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularVideo}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedVideo}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingVideo}/>
      <MovieList title={"Recent Watched"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
    )
  )
}

export default SecondaryContainer
