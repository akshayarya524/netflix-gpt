
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from "../utils/moviesSlice"
import { useEffect } from 'react';


const useNowPlayingMovies=()=>{

    const dispatch= useDispatch();

    const getNowPlayingMovie = async ()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const json= await data.json();
        dispatch(addNowPlayingMovies(json.results));
  
    }
  
    useEffect(()=>{
      getNowPlayingMovie();
    },[]);
}
export default useNowPlayingMovies;
