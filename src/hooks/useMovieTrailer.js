

import { options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';


const useMovietrailer=(movieId)=>{

    const dispatch= useDispatch();

    const  getMovietrailer= async ()=>{

        const data= await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", options);
        const json =await data.json();
       
        
        const filterData = json.results.filter((video)=> video.type==="Trailer");
        const trailer=  filterData.length ? filterData[0]: json.results[0];
        dispatch(addTrailerVideo(trailer));
    
      }
    
      useEffect(()=>{
        getMovietrailer();
      },[]);

}
export default useMovietrailer;