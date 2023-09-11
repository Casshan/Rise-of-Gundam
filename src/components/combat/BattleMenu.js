import React from "react";
import { Link } from "react-router-dom";

const BattleMenu = () => {

    return (
        <>
        <div id="battle-menu">
            Battle Menu
            <Link to="/" id="end-battle">
            <button id="end-battle">
                End Battle
            </button>
            </Link>
        </div>
        </>
    )
}

export default BattleMenu;