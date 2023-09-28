import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {

    const logout = () => {
        window.localStorage.removeItem('token');
        props.setUserToken('');
        return props.setIsLoggedIn(false);
    }

    return (
        <>
            <div id="header">
                <div id="logo"><Link to="/">RISE OF GUNDAM</Link></div>
                <div id="nav-bar">
                    <div>News</div>
                    <div>Game Guide</div>
                    <div><Link to="/login">Login</Link></div>
                    <div><Link to="/" onClick={logout}>Logout</Link></div>
                    <div>Register</div>
                </div>
            </div>
        </>
    )
}

export default Header;