import { useSelector } from "react-redux";
import VideoBackground from "./Videobackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () =>{

    const movies = useSelector()
    if(!movies) return;


    const mainmovies = movies[0];
    console.log(mainmovies);
    return <div>
       <VideoBackground/>
       <VideoTitle />
    </div>;
};

export default MainContainer;