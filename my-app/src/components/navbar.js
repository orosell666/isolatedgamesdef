import React from "react";
import { Link } from "react-router-dom";
import LogoIG from "../images/logoIsolatedGames.png";
import LogoFB from "../images/facebook-f.svg";
import LogoIN from "../images/instagram.svg";
import LogoYT from "../images/youtube.svg";
import LogoTW from "../images/twitter.svg";
import LogoRD from "../images/reddit.svg";




const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg  navstyle navbar-dark  sticky-top"> 
            <div className="container-fluid">
                <a  href="#scrollspyHeading1">
            <img className="navbar-brand ms-5" src={LogoIG} width={220} height={60}/></a> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
               <div className="collapse navbar-collapse justify-content-end me-5 " id="navbarTogglerDemo02" >
                        <ul className="navbar-nav  ">
                        <li className="nav-item pt-2">
                            <a className="nav-link" href="#scrollspyHeading4">CONTACT</a></li>
                        <li className="nav-item pt-2">
                            <a className="nav-link" href="#scrollspyHeading3">JOBS</a></li>
                        <li className="nav-item pt-2">
                            <a className="nav-link" href="#scrollspyHeading2">NEWS</a></li>
                            <li className="nav-link ">
                                <div className="btn-group" height={40}>
                                <Link to="https://www.instagram.com/isolated_games/"><a className="btn "><img className="netLogos" src={LogoIN} width={15} height={15} /></a></Link>
                                <Link to="https://www.youtube.com/channel/UCT41om_yDCTTq7-q7OPjgPA"><a className="btn  "><img className="netLogos" src={LogoYT} width={15} height={15} /></a></Link>
                                <Link to="https://twitter.com/Isolated_Games"><a className="btn  "><img  className="netLogos" src={LogoTW} width={15} height={15} /></a></Link>
                                <Link to="https://www.facebook.com/BetweenTheStarsGame"><a className="btn  "><img className="netLogos" src={LogoFB} width={15} height={15} /></a></Link>
                                <Link to="https://www.reddit.com/r/BetweenTheStars/"><a className="btn "><img className="netLogos" src={LogoRD} width={15} height={15} /></a></Link>
                                </div>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            
        </nav>
    )
}
export default Navbar;