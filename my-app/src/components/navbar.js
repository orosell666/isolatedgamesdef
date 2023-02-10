import React from "react";
import LogoIG from "../logoIsolatedGames.png";




const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg  navstyle navbar-dark  sticky-top"> 
            <div className="container-fluid">
                <a  href="#scrollspyHeading1">
            <img className="navbar-brand ms-5" src={LogoIG} width={220} height={60}/></a> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
               <div className="collapse navbar-collapse justify-content-end me-5" id="navbarTogglerDemo02" >
                        <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading4">CONTACT</a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading3">JOBS</a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading2">NEWS</a></li>
                        </ul>
                    
                    </div>
                </div>
            
        </nav>
    )
}
export default Navbar;