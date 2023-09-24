import React, { useState, useEffect } from "react";

const BattleGrid = (props) => {
    const { pilot, setPilot, enemyPilot, setEnemyPilot, pilotSuit, enemySuit, turn, setTurn } = props;
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        const generateGrid = (x, y) => {
            let xCord = 0;
            let yCord = 0;
            let gridArr = [];

            const generateY = (length) => {
                let arr = [];
                for (let i = 0; i < length; i++) {
                    yCord = i;
                    arr.push([xCord, yCord]);
                }
                return arr;
            }

            for (let i = 0; i < x; i++) {
                gridArr.push(generateY(y));
                xCord++;
            }

            const placePilot = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    if (i === pilot.location[0]) {
                        return arr[i].fill(pilot.id, [pilot.location[1]], pilot.location[1] + 1)
                    }
                }
            }

            const placeEnemyPilot = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    if (i === enemyPilot.location[0]) {
                        return arr[i].fill(enemyPilot.id, [enemyPilot.location[1]], enemyPilot.location[1] + 1)
                    }
                }
            }

            const placeDirection = () => {
                if (enemyPilot.location[0] > pilot.location[0]) {
                    return (
                        pilot.direction = 2,
                        enemyPilot.direction = 6
                    )
                } else if (enemyPilot.location[0] < pilot.location[0]) {
                    return (
                        pilot.direction = 6,
                        enemyPilot.direction = 2
                    )
                } else if (enemyPilot.location[1] > pilot.location[1] && enemyPilot.location[0] === pilot.location[0]) {
                    return (
                        pilot.direction = 4,
                        enemyPilot.direction = 0
                    )
                } else if (enemyPilot.location[1] < pilot.location[1] && enemyPilot.location[0] === pilot.location[0]) {
                    return (
                        pilot.direction = 0,
                        enemyPilot.direction = 4
                    )
                }
            }

            placePilot(gridArr);
            placeEnemyPilot(gridArr);
            placeDirection();

            return gridArr;
        }

        setGrid(generateGrid(18, 9));
    }, [pilot, enemyPilot, turn]);

    const movementRangeValidator = (player, cordinates) => {
        if (cordinates[0] > player.suit.movement + player.location[0] || cordinates[1] > player.suit.movement + player.location[1] ||
            cordinates[0] < player.location[0] - player.suit.movement || cordinates[1] < player.location[1] - player.suit.movement) {
            return false;
        } else {
            return true;
        }
    }

    const move = (event) => {
        let cordinates = event.target.getAttribute("value").split(',').map(Number);

        if (turn.active === pilot.id && turn.hasMoved === false && movementRangeValidator(pilot, cordinates) === true) {
            pilot.location = cordinates;
            turn.hasMoved = true;
            turn.lastAction = `${pilot.name} moved to (${cordinates[0]}. ${cordinates[1]})`;
            setPilot({ ...pilot });
            return setTurn({ ...turn });
        } else if (turn.active === pilot.id && movementRangeValidator(pilot, cordinates) === false) {
            return console.log("That is too far.");
        }

        if (turn.active === enemyPilot.id && turn.hasMoved === false && movementRangeValidator(enemyPilot, cordinates) === true) {
            enemyPilot.location = cordinates;
            turn.hasMoved = true;
            turn.lastAction = `${enemyPilot.name} moved to (${cordinates[0]}. ${cordinates[1]})`;
            setEnemyPilot({ ...enemyPilot });
            return setTurn({ ...turn });
        } else if (turn.active === enemyPilot.id && movementRangeValidator(enemyPilot, cordinates) === false) {
            return console.log("That is too far.");
        }
    }

    return (
        <>
            <div id="battle-grid-container">
                <div id="battle-grid">
                    {grid.map((yAxis, index) => {
                        return (
                            <div key={index}>
                                {yAxis.map((cell, index) => {
                                    if (cell === pilot.id) {
                                        return (
                                            <div id="pilot-block" key={index}></div>
                                        )
                                    } else if (cell === enemyPilot.id) {
                                        return (
                                            <div id="enemy-block" key={index}></div>
                                        )
                                    } else if (turn.selectedAction && pilot.direction === 2 &&
                                        cell[0] <= pilot.location[0] + turn.selectedAction.range &&
                                        cell[0] > pilot.location[0] && cell[1] === pilot.location[1]) {
                                        return (
                                            <div value={cell} onClick={move} id="pilot-action-block" key={index}></div>
                                        )
                                    } else if (turn.active === 0 && turn.hasMoved === false && movementRangeValidator(pilot, cell) === true) {
                                        return (
                                            <div value={cell} onClick={move} id="pilot-movement-block" key={index}></div>
                                        )
                                    } else if (turn.active === 1 && turn.hasMoved === false && movementRangeValidator(enemyPilot, cell) === true) {
                                        return (
                                            <div value={cell} onClick={move} id="enemy-movement-block" key={index}></div>
                                        )
                                    } else {
                                        return (
                                            <div value={cell} onClick={move} id="block" key={index}></div>
                                        )
                                    }
                                }
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default BattleGrid;