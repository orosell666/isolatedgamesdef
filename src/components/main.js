import React from "react";
import Video from "../assets/hd22.mp4";

const Main = () => {
    return(
        <div className="video-container parallax-container">
            <video src={Video} autoPlay muted loop id="myVideo"/>       
            </div>
    )
}
export default Main;