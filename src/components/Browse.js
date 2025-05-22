import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useNowplaymovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = ()=>{

    useNowplaymovies();

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
        <MainContainer />
        <SecondaryContainer />
        <div>
            <img  src="https://m.media-amazon.com/images/I/51LGj5--KsL.png"  alt="logo" />
            <button onClick={handleSignout}>(Sign out)</button>
        </div>
    </div>

    );
};

export default Browse;