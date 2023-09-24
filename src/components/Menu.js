import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <>
            <div id="menu">
                <Link to="/battle" id="start-combat">
                    <button id="start-combat"><h1>START</h1></button>
                </Link>
            </div>
        </>
    )
}

export default Menu;


