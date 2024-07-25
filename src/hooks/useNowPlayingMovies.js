import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useNowplaymovies = () =>{
const dispatch = useDispatch();

const nowpalyingmovies = async () =>{ 
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?', 
        API_OPTIONS);
      
        const json = await data.json();
        console.log(json);
        dispatch(nowpalyingmovies(json));

};

useEffect(() =>{
    nowpalyingmovies();

},[]);

};

export default useNowplaymovies;