import React, { useState, useEffect } from "react";

const BattleGrid = (props) => {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        const generateGrid = () => {
            let arr = [];
            const generateY = () => {
                let y = [];

                for (let i = 0; i < 9; i++) {
                    y.push(null)
                }
                return y;
            }

            for (let i = 0; i < 18; i++) {
                if (i === 5) {
                    arr.push([null, null, null, null, props.pilot.id, null, null, null, null])
                } else if (i === 12) {
                    arr.push([null, null, null, null, props.enemyPilot.id, null, null, null, null])
                } else { arr.push(generateY()) }
            }

            return setGrid(arr);
        }

        generateGrid();
    }, []);

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