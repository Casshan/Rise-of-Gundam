import React from "react";

const BattleHUD = (props) => {

    return (
        <>
            <div id="battle-hud">
                <div id="player-info">
                    <div>{`${props.pilot.suit.name}`}</div>
                    <div>{`${props.pilot.suit.currentHealth}`} / {`${props.pilot.suit.maxHealth}`} Health</div>
                    <div>{`${props.pilot.suit.currentEnergy}`} / {`${props.pilot.suit.maxEnergy}`} Energy</div>
                </div>

                <div id="player-info">
                    <div>{`${props.pilot.name}`}</div>
                    <div>{`${props.pilot.currentHealth}`} / {`${props.pilot.maxHealth}`} Health</div>
                    <div>{`${props.pilot.currentFocus}`} / {`${props.pilot.maxFocus}`} Focus</div>
                </div>

                <div id="turn-counter">
                    Turn {`${props.turn.count}`}
                </div>

                <div id="enemy-info">
                <div>{`${props.enemyPilot.name}`}</div>
                    <div>{`${props.enemyPilot.currentHealth}`} / {`${props.enemyPilot.maxHealth}`} Health</div>
                    <div>{`${props.enemyPilot.currentFocus}`} / {`${props.enemyPilot.maxFocus}`} Focus</div>
                </div>

                <div id="enemy-info">
                <div>{`${props.enemyPilot.suit.name}`}</div>
                    <div>{`${props.enemyPilot.suit.currentHealth}`} / {`${props.enemyPilot.suit.maxHealth}`} Health</div>
                    <div>{`${props.enemyPilot.suit.currentEnergy}`} / {`${props.enemyPilot.suit.maxEnergy}`} Energy</div>
                </div>
            </div>
        </>
    )
}
export default BattleHUD;