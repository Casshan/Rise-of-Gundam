import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <>
            <div id="menu">

                <div id="info-container">

                    <div id="pilot-info">
                        Pilot Info
                    </div>

                    <div id="suit-info">
                        Suit Info
                    </div>

                </div>

                <Link to="/battle" id="start-combat">
                    <button id="start-combat">Start Combat</button>
                </Link>
            </div>
        </>
    )
}

export default Menu;