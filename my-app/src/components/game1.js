import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const Game1 = () => {

    return (
        <div className="container  mt-5" id="scrollspyHeading1">
            <div className="row">
                <div className="card col-5 me-2">
            <Link to="../pages/bethestar.js">
            <img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="img-fluid" />
            
            
            </Link></div>
            <div className="card col-5 ms-2">
            <Link to="../pages/travellers.js">
            
            <a>
            <img src="https://c.tenor.com/UH_6a9UuIMMAAAAC/cool.gif" className="img-fluid"/></a>
            
            
            </Link></div></div>
        </div>

        )

}

export default Game1;
