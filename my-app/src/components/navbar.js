import React from "react";
import { Link } from "react-router-dom";




const Navbar = () => {

    return (
        <nav className="navbar navstyle ">
            <div className="container">
                

            <Link to="/">
                
            <img className="navbar-brand mb-0 h1" src="//www.isolatedgames.com/wp-content/uploads/2017/02/Logo-IsolatedGames-1.png" />
               
            </Link>
                    <div className="btn-group me-5" role="group" >
                    <Link to="/contact.js">
                        <button type="button" className=" navbar-toggler btn btn-dark">CONTACT</button>
                    </Link>
                    <Link to="/jobs.js">
                        <button type="button" className="navbar-toggler btn btn-dark">JOBS</button>
                    </Link>
                    <Link to="/news.js">
                        <button type="button" className="navbar-toggler btn btn-dark">NEWS</button>
                    </Link>
                    </div>
                </div>
            
        </nav>
    )
}
export default Navbar;