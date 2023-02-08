import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

    return (
        <nav className="navbar navstyle">
            <div className="container">
                <img src="" />
            </div>
            <p>logo</p>
            <p>new</p>
            <p>jobs</p>
            <Link to="/contact.js">
                <button type="button" class="btn btn-dark">CONTACT</button>
            </Link>
        </nav>
    )
}
export default Navbar;