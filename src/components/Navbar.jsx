import React from "react";
import {Link} from "react-router-dom"; 
import "./Navbar.css";


function Navbar() {
    return <nav className="navbar bg-dark container">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/search">Search</Link></h4>
        <h4><Link className="link" to="/modify">Modify</Link></h4>
    </nav>
}

export default Navbar;