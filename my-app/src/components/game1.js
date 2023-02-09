import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import gameImage1 from "../cartelTwitch.jpg";
import gameImage2 from "../capsulaBiblioteca.png"; 

const Game1 = () => {

    return (
        <div className="container" id="scrollspyHeading1">
            <div className="row justify-content-center">
                <div className=" col-5 me-2">
            <Link to="../pages/bethestar.js">
            <img src={gameImage1} className="rounded img-fluid" />
            
            
            </Link></div>
            <div className="col-5 ms-2">
            <Link to="../pages/travellers.js">
            
            <a>
            <img src={gameImage2} className="rounded img-fluid"/></a>
            
            
            </Link></div></div>
        </div>

        )

}

export default Game1;
