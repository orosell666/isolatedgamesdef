import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import gameImage1 from "../cartelTwitch.jpg";
import gameImage2 from "../capsulaBiblioteca.png"; 
import steamLogo from "../steamLogo.png";

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
           <div className="container mt-5">
           <Link to="https://store.steampowered.com/bundle/20465/Isolated_Games_Bundle/">
            <button type="button" className="btn btn-dark textColor1 col-6" ><h3><strong>SHOP   IN   STEAM</strong></h3><img src={steamLogo} width={50} height={50} className="steamLogoStyle"/>
            </button>
            </Link>
           </div>
        </div>

        )

}

export default Game1;
