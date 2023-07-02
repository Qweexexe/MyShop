import React from "react";
import './Navigation.css'
import userLogo from '../../img/icons8-user-64.png'
import {Link} from "react-router-dom";
import Home from "../Home/Home";

const Navigation: React.FC = () => {
    return (
        <>
            <nav className="navigation">
                <Link to="/" className="navigation_select">Home</Link>
                <Link to="/cart" className="navigation_select">Cart</Link>
                <Link to="/search" className="navigation_select">Search</Link>
                <Link to="/auth"><img src={userLogo} alt="" className="user_logo"/></Link>
            </nav>
        </>

    )
}

export default Navigation