import React from "react";
import { Link } from "react-router-dom";




const Navbar = () => {

    return (
        <nav className="navbar navstyle sticky-top">
            <div className="container">
                

            
            <a type="button" className="navbar-toggler btn btn-dark" href="#scrollspyHeading1">
            <img className="navbar-brand mb-0 h1" src="//www.isolatedgames.com/wp-content/uploads/2017/02/Logo-IsolatedGames-1.png" /></a> 
               
            
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