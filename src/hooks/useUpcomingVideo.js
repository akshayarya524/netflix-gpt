import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addUpcomingVideo} from "../utils/moviesSlice"
import { useEffect } from 'react';


const useUpcomingVideo=()=>{

    const dispatch= useDispatch();

    const getUpcomingVideo = async ()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json= await data.json();
        dispatch(addUpcomingVideo(json.results));
  
    }
  
    useEffect(()=>{
        getUpcomingVideo();
    },[]);
}
export default useUpcomingVideo;

