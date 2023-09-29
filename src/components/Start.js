import React, { useState, useEffect } from 'react';
import axios from "axios";

const Start = (props) => {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        try {
            if (props.user.id) {
                const response = await axios.get(
                    `/api/characters/${props.user.id}/characters`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${props.userToken}`,
                        },
                    }
                );
                if (response.data.success) {
                    setCharacters(response.data.characters)
                } else {
                    setCharacters({});
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCharacters();
    }, [props.user]);

    console.log(characters);

    return (
        <>
            <div id="start-container">
                <div id="start-window">
                    {characters.map((character, index) => {
                        return (
                            <div id="start-character" key="index">
                                <img id="start-image" src={character.profile_image}></img>
                                <div id="start-info">
                                    <div>{`${character.name}`}</div>
                                    <div>{`${character.rank}`}</div>
                                    <div>{`Level ${character.level}`}</div>
                                    <button
                                        type="submit"
                                        id="login-submit"
                                        className="btn btn-primary">
                                        Play
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Start;