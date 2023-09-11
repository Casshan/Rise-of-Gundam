import React, { useState } from "react";
import BattleHUD from "./BattleHUD";
import BattleGrid from "./BattleGrid";
import BattleLog from "./BattleLog";
import BattleMenu from "./BattleMenu";

const Battle = () => {
    //testing data
    const [pilotSuit, setPilotSuit] = useState({
        name: "Gundam",
        health: 1000,
        energy: 500,
        melee: 100,
        range: 100,
        armor: 100,
        speed: 100
    })

    const [enemySuit, setEnemySuit] = useState({
        name: "Zaku",
        health: 1000,
        energy: 500,
        melee: 100,
        range: 100,
        armor: 100,
        speed: 100
    })

    const [pilot, setPilot] = useState({
        name: 'Amuro',
        health: 100,
        focus: 50,
        control: 20,
        accuracy: 20,
        dodge: 20,
        location: null,
        suit: pilotSuit,
        id: 0
    })

    const [enemyPilot, setEnemyPilot] = useState({
        name: 'Char',
        health: 100,
        focus: 50,
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
    })

    return (
        <>
            <div id="battle-container">
                <BattleHUD
                    pilot={pilot} setPilot={setPilot}
                    enemyPilot={enemyPilot} setEnemyPilot={setEnemyPilot}
                    pilotSuit={pilotSuit} setPilotSuit={setPilotSuit}
                    enemySuit={enemySuit} setEnemySuit={setEnemySuit}
                    turn={setTurn} setTurn={setTurn}
                />
                <BattleGrid
                    pilot={pilot} setPilot={setPilot}
                    enemyPilot={enemyPilot} setEnemyPilot={setEnemyPilot}
                    pilotSuit={pilotSuit} setPilotSuit={setPilotSuit}
                    enemySuit={enemySuit} setEnemySuit={setEnemySuit}
                    turn={setTurn} setTurn={setTurn}
                />
                <BattleLog
                    pilot={pilot} setPilot={setPilot}
                    enemyPilot={enemyPilot} setEnemyPilot={setEnemyPilot}
                    pilotSuit={pilotSuit} setPilotSuit={setPilotSuit}
                    enemySuit={enemySuit} setEnemySuit={setEnemySuit}
                    turn={setTurn} setTurn={setTurn}
                />
            </div>

            <BattleMenu />
        </>
    )
}

export default Battle;