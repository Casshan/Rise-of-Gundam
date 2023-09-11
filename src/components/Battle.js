import React from "react";
import BattleHUD from "./BattleHUD";
import BattleGrid from "./BattleGrid";
import BattleLog from "./BattleLog";
import BattleMenu from "./BattleMenu";

const Battle = () => {

    return (
        <>
           <div id="battle-container">
                <BattleHUD />
                <BattleGrid />
                <BattleLog />
            </div>

            <BattleMenu />
        </>
    )
}

export default Battle;