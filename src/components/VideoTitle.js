const VideoTitle = ({title,overview}) =>{
    return<div>
        <h1>{title}</h1>
        <p>{overview}</p>
        <div>
            <button className="bg-red-200 font-bold bg-opacity-20">Play</button>
            <button>More Info</button>
        </div>
    </div>;

};

export default VideoTitle;