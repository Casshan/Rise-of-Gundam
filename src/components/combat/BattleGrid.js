import React, { useState } from "react";

const BattleGrid = (props) => {
    console.log(props.pilot);
    console.log(props.enemyPilot);
    

    const [grid, setGrid] = useState([
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, props.pilot.id, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, props.enemyPilot.id, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null]
    ]);

    return (
        <>
            <div id="battle-grid-container">
                <div id="battle-grid">
                    {grid.map((grid, index) => {
                        return (
                            <div key={index}>
                                {grid.map((grid, index) => {
                                    if (grid === props.pilot.id) {
                                        return (
                                            <div id="pilot-block" key={index}></div>
                                        )
                                    } else if (grid === props.enemyPilot.id) {
                                        return (
                                            <div id="enemy-block" key={index}></div>
                                        )
                                    } else {
                                        return (
                                            <div id="block" key={index}>{grid}</div>
                                        )
                                    }

                                })}
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default BattleGrid;