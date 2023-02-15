import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css"

const NavbarGame = () => {
    return(
        <nav className="navbar navstyle ">
            <div className="container">
                

            <Link to="/">
                
            <img className="navbar-brand mb-0 h1" src="//www.isolatedgames.com/wp-content/uploads/2017/02/Logo-IsolatedGames-1.png" />
               
            </Link>
                    <div className="btn-group me-5" role="group" >
                    <a type="button" className="navbar-toggler btn btn-dark">BUY</a>
                    
                    
                    </div>
                </div>
            
        </nav>
    )
}
export default NavbarGame;