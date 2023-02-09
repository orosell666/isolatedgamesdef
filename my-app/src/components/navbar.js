import React from "react";
import LogoIG from "../logoIsolatedGames.png";




const Navbar = () => {

    return (
        <nav className="navbar navstyle sticky-top">
            <div className="container">
                

            
            <a type="button" className="navbar-toggler btn btn-dark" href="#scrollspyHeading1">
            <img className="navbar-brand mb-0 h1" src={LogoIG} width={135} height={40}/></a> 
               
            
                    <div className="btn-group me-5" role="group" >
                    <a type="button" className="navbar-toggler btn btn-dark" href="#scrollspyHeading4">CONTACT</a>
                    <a type="button" className="navbar-toggler btn btn-dark" href="#scrollspyHeading3">JOBS</a>
                    
                        <a type="button" className="navbar-toggler btn btn-dark" href="#scrollspyHeading2">NEWS</a>
                    
                    </div>
                </div>
            
        </nav>
    )
}
export default Navbar;