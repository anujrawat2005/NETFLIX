import { useSelector } from "react-redux";
import VideoBackground from "./Videobackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () =>{

    const movies = useSelector()
    if(!movies) return;


    const mainmovies = movies[0];
    console.log(mainmovies);
    const {original_title,overview} = mainmovies;
    return <div>
       <VideoBackground title={original_title} overview={overview} />
       <VideoTitle />
    </div>;
};

export default MainContainer;