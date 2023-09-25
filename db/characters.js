const client = require('./client');

const createCharacter = async ({
    userId, name, max_health, max_focus,
    current_health, current_focus, control,
    accuracy, dodge, location, direction }) => {
    try {
        const query = {
            text: `
                INSERT INTO characters("userId", name, max_health, max_focus, current_health, 
                current_focus, control, accuracy, dodge, location, direction)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                RETURNING *;`,
            values: [userId, name, max_health, max_focus, current_health, current_focus,
                control, accuracy, dodge, location, direction],
        };
        const { rows } = await client.query(query);
        return rows[0];
    } catch (error) {
        console.log("createCharacter error.");
        console.error(error);
    };
};

module.exports = {
    createCharacter
};