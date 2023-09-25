const client = require ('./client');

const createSuit = async ({
    name, description, health, energy, melee, range, armor, speed
}) => {
    try {
        const query = {
            text: `
            INSERT INTO suits(name, description, health, energy, melee, range, armor, speed)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *;`,
            values: [name, description, health, energy, melee, range, armor, speed],
        };
        const { rows } = await client.query(query);
        return rows[0];
    } catch (error) {
        console.log("createSuit error.");
        console.error(error);
    }
};

module.exports = {
    createSuit
};