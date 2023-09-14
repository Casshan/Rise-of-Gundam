import React from "react";

const BattleLog = (props) => {
    const { turn, pilot, enemyPilot } = props;

    return (
        <>
            <div id="battle-log">
                {turn.lastAction}
            </div>
        </>
    )
}
export default BattleLog;