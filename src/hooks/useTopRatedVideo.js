import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addTopRatedVideo} from "../utils/moviesSlice"
import { useEffect } from 'react';


const useTopRatedVideo=()=>{

    const dispatch= useDispatch();

    const getTopRatedVideo = async ()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const json= await data.json();
        dispatch(addTopRatedVideo(json.results));
  
    }
  
    useEffect(()=>{
      getTopRatedVideo();
    },[]);
}
export default useTopRatedVideo;
