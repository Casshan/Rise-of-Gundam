import React, { useState } from "react";

const BattleGrid = () => {
    const [grid, setGrid] = useState([
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, 'X', null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, 'O', null, null, null, null],
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
                                    if (grid === 'X') {
                                        return (
                                            <div id="pilot-block" key={index}>{grid}</div>
                                        )
                                    } else if (grid === 'O') {
                                        return (
                                            <div id="enemy-block" key={index}>{grid}</div>
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