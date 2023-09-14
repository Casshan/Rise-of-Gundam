import React from "react";

const BattleHUD = (props) => {
    const { pilot, enemyPilot, turn } = props;

    return (
        <>
            <div id="battle-hud">
                <div id="player-info">
                    <div>PILOT</div>
                    <div>{`${pilot.name}`}</div>
                    <div>{`${pilot.currentHealth}`} / {`${pilot.maxHealth}`} Health</div>
                    <div>{`${pilot.currentFocus}`} / {`${pilot.maxFocus}`} Focus</div>
                </div>

                <div id="player-info">
                    <div>MOBILE SUIT</div>
                    <div>{`${pilot.suit.name}`}</div>
                    <div>{`${pilot.suit.currentHealth}`} / {`${pilot.suit.maxHealth}`} Health</div>
                    <div>{`${pilot.suit.currentEnergy}`} / {`${pilot.suit.maxEnergy}`} Energy</div>
                </div>

                <div id="turn-counter">
                    Turn {`${turn.count}`}
                </div>

                <div id="enemy-info">
                    <div>MOBILE SUIT</div>
                    <div>{`${enemyPilot.suit.name}`}</div>
                    <div>{`${enemyPilot.suit.currentHealth}`} / {`${enemyPilot.suit.maxHealth}`} Health</div>
                    <div>{`${enemyPilot.suit.currentEnergy}`} / {`${enemyPilot.suit.maxEnergy}`} Energy</div>
                </div>

                <div id="enemy-info">
                    <div>PILOT</div>
                    <div>{`${enemyPilot.name}`}</div>
                    <div>{`${enemyPilot.currentHealth}`} / {`${enemyPilot.maxHealth}`} Health</div>
                    <div>{`${enemyPilot.currentFocus}`} / {`${enemyPilot.maxFocus}`} Focus</div>
                </div>
            </div>
        </>
    )
}
export default BattleHUD;