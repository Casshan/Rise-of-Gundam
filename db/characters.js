const client = require('./client');

const createCharacter = async ({
    userId, name, max_health, max_focus,
    current_health, current_focus, control,
    accuracy, dodge, level, experience, rank, 
    money, profile_image }) => {
    try {
        const query = {
            text: `
                INSERT INTO characters("userId", name, max_health, max_focus, current_health, 
                current_focus, control, accuracy, dodge, level, experience,
                rank, money, profile_image)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
                RETURNING *;`,
            values: [userId, name, max_health, max_focus, current_health, current_focus,
                control, accuracy, dodge, level, experience, rank,
                money, profile_image],
        };
        const { rows } = await client.query(query);
        return rows[0];
    } catch (error) {
        console.log("createCharacter error.");
        console.error(error);
    };
};

const getCharactersById = async (id) => {
    try {
        const query = {
            text: 'SELECT * FROM characters WHERE "userId" = $1',
            values: [id]
        };
        const { rows } = await client.query(query);
        return rows;
    } catch (error) {
        console.log('getCharactersById error.')
        console.error(error);
    }
}

module.exports = {
    createCharacter,
    getCharactersById
};