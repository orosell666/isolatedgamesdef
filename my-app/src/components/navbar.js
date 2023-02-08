import React from "react";
import { Link } from "react-router-dom";




const Navbar = () => {

    return (
        <nav className="navbar navstyle">
            <div className="container">
                <img src="" />
            </div >
            <div className="btn-group" role="group" >
            <Link to="/">
                
            <button type="button" className="btn btn-dark">HOME</button>
               
            </Link>
            <Link to="/contact.js">
                <button type="button" className="btn btn-dark">CONTACT</button>
            </Link>
            <Link to="/jobs.js">
                <button type="button" className="btn btn-dark">JOBS</button>
            </Link>
            <Link to="/news.js">
                <button type="button" className="btn btn-dark">NEWS</button>
            </Link></div>
        </nav>
    )
}
export default Navbar;