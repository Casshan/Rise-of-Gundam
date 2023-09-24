import React from "react";
import { Link } from "react-router-dom";

const BattleMenu = (props) => {
    const { pilot, enemyPilot, pilotSuit, enemySuit, turn, setTurn } = props;
    const pilotAttacks = pilot.suit.attacks;


    const attackSelect = (event) => {
        if (turn.active === 0) {
        turn.selectedAction = pilotAttacks[event.target.value];
        console.log(turn.selectedAction);
        return setTurn({...turn});
        }
    }

    const attackSubmit = () => {
        console.log('submit');
    }

    const skipTurn = () => {
        if (turn.active === 0) {
            turn.active = 1;
            turn.hasMoved = false;
            turn.selectedAction = null;
            turn.count++;
            return setTurn({...turn});
        } else if (turn.active === 1) {
            turn.active = 0;
            turn.hasMoved = false;
            turn.count++;
            return setTurn({...turn});
        }
    }

    return (
        <>
            <div id="battle-menu">
                Actions
                <div id="battle-menu-container">
                    <div id="attacks-container">
                        {pilotAttacks.map((slot, index) => {
                            return (
                                <button onClick={attackSelect} value={index} id="battle-menu-button" key={index}>{slot.name}</button>
                            )
                        })}
                    </div>
                    <div>
                        <button onClick={attackSubmit} id="battle-menu-submit">Submit</button>
                        <button onClick={skipTurn} id="battle-menu-submit">Skip</button>
                    </div>
                </div>

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