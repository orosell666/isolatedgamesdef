import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import gameImage1 from "../headerNew3 (1).png";
import gameImage2 from "../cover.png"; 
import steamLogo from "../steamLogo.png";

const Game1 = () => {

    return (
        <div className="sectionStyle" id="scrollspyHeading1">
            <div className="d-flex d-row mb-2">
             <div className="banner-area img-fluid ">
            <Link to="../pages/bethestar.js">
            <img src={gameImage1} className="col-6" />
            </Link><Link to="../pages/travellers.js">
           <img src={gameImage2} className="col-6"/>
           </Link></div></div>

           <div className="container ">
           <Link to="https://store.steampowered.com/bundle/20465/Isolated_Games_Bundle/">
            <button type="button" className="btn btn-dark textColor1 col-sm-4 mt-5" ><h3><strong>SHOP   IN   STEAM</strong></h3><img src={steamLogo} width={50} height={50} className="steamLogoStyle"/>
            </button>
            </Link>
           </div>
        </div>

        )

}

export default Game1;
