import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const Browse = ()=>{

    const dispatch = useDispatch();

    const nowpalyingmovies = async () =>{ 
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?', 
            API_OPTIONS );
          
            const json = await data.json();
            console.log(json);
            dispatch(nowpalyingmovies(json));

    };

    useEffect(() =>{
        nowpalyingmovies();

    },[])
    const navigate = useNavigate();
    const handleSignout = () =>{
        signOut(auth).then(() => {
            navigate("/")
            
          }).catch((error) => {
            navigate("/Error")
          });
          
    }
    return(
    <div>
        <Header/>
        <div>
            <img  src="https://m.media-amazon.com/images/I/51LGj5--KsL.png"  alt="logo" />
            <button onClick={handleSignout}>(Sign out)</button>
        </div>
    </div>

    );
};

export default Browse;