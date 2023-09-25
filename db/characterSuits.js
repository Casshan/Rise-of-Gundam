const client = require('./client');

const createCharacterSuit = async ({
    characterId, suitId, name, max_health, max_energy, 
    current_health, current_energy, movement
}) => {
    try {
        const query = {
            text: `
            INSERT INTO character_suits("characterId", "suitId", name, max_health, max_energy, 
            current_health, current_energy, movement)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;`,
            values: [characterId, suitId, name, max_health, max_energy, current_health, current_energy, movement],
        };
        const { rows } = await client.query(query);
        return rows[0];
    } catch (error) {
        console.log("createCharacterSuit error.");
        console.error(error);
    };
};

module.exports = {
    createCharacterSuit
};