import React, { useState } from "react";
import BattleHUD from "./BattleHUD";
import BattleGrid from "./BattleGrid";
import BattleLog from "./BattleLog";
import BattleMenu from "./BattleMenu";

const Battle = () => {
    //testing data
    const [pilotSuit, setPilotSuit] = useState({
        name: "Gundam",
        maxHealth: 1000,
        maxEnergy: 500,
        currentHealth: 1000,
        currentEnergy: 500,
        melee: 100,
        range: 100,
        armor: 100,
        speed: 100
    })

    const [enemySuit, setEnemySuit] = useState({
        name: "Zaku",
        maxHealth: 1000,
        maxEnergy: 500,
        currentHealth: 1000,
        currentEnergy: 500,
        melee: 100,
        range: 100,
        armor: 100,
        speed: 100
    })

    const [pilot, setPilot] = useState({
        name: 'Amuro',
        maxHealth: 100,
        maxFocus: 50,
        currentHealth: 100,
        currentFocus: 50,
        control: 20,
        accuracy: 20,
        dodge: 20,
        location: null,
        suit: pilotSuit,
        id: 0
    })

    const [enemyPilot, setEnemyPilot] = useState({
        name: 'Char',
        maxHealth: 100,
        maxFocus: 50,
        currentHealth: 100,
        currentFocus: 50,
        control: 20,
        accuracy: 20,
        dodge: 20,
        location: null,
        suit: enemySuit,
        id: 1
    })

    //game state
    const [turn, setTurn] = useState({
        count: 1,
        active: null,
        previousTurns: []
    })

    return (
        <>
            <div id="battle-container">
                <BattleHUD
                    pilot={pilot} setPilot={setPilot}
                    enemyPilot={enemyPilot} setEnemyPilot={setEnemyPilot}
                    pilotSuit={pilotSuit} setPilotSuit={setPilotSuit}
                    enemySuit={enemySuit} setEnemySuit={setEnemySuit}
                    turn={turn} setTurn={setTurn}
                />
                <BattleGrid
                    pilot={pilot} setPilot={setPilot}
                    enemyPilot={enemyPilot} setEnemyPilot={setEnemyPilot}
                    pilotSuit={pilotSuit} setPilotSuit={setPilotSuit}
                    enemySuit={enemySuit} setEnemySuit={setEnemySuit}
                    turn={turn} setTurn={setTurn}
                />
                <BattleLog
                    pilot={pilot} setPilot={setPilot}
                    enemyPilot={enemyPilot} setEnemyPilot={setEnemyPilot}
                    pilotSuit={pilotSuit} setPilotSuit={setPilotSuit}
                    enemySuit={enemySuit} setEnemySuit={setEnemySuit}
                    turn={turn} setTurn={setTurn}
                />
            </div>

            <BattleMenu />
        </>
    )
}

export default Battle;