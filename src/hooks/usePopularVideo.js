
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addPopularVideo} from "../utils/moviesSlice"
import { useEffect } from 'react';


const usePopularVideo=()=>{

    const dispatch= useDispatch();

    const getPopularVideo = async ()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const json= await data.json();
        dispatch(addPopularVideo(json.results));
  
    }
  
    useEffect(()=>{
        getPopularVideo();
    },[]);
}
export default usePopularVideo;