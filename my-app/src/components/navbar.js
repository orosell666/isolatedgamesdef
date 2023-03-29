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
        
        <nav className="navbar navbar-expand-lg  navstyle navbar-dark  sticky-top textColor1    "> 
            <div className="container justify-content-evenly">
                <a  href="/#scrollspyHeading1">
            <img className="navbar-brand ms-5" src={LogoIG} width={291} height={60}/></a> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
               <div className="collapse navbar-collapse justify-content-end me-5 textColor1" id="navbarTogglerDemo02" >
                        <ul className="navbar-nav  ">
                        <li className="nav-item pt-2">
                        <a className="nav-link fs-3" href="/#scrollspyHeading2">NEWS</a></li>
                        <li className="nav-item pt-2">
                        <a className="nav-link fs-3" href="/#scrollspyHeading3">ABOUT</a></li>
                        <li className="nav-item pt-2">
                        <a className="nav-link fs-3" href="/#scrollspyHeading4">TEAM</a></li>
                        <Link to="/contact" className="linkUnderline"><li className="nav-item pt-2">
                        
      
                        <a className="nav-link fs-3" >CONTACT</a></li></Link>
                        <li className="nav-item pt-2">
                            <a className="nav-link fs-3" href="/#scrollspyHeading6">JOBS</a></li>
                        
                            
                        </ul>
                    
                    </div>
                </div>
            
        </nav>
    )
}
export default Navbar;