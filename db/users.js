const client = require('./client');
const bcrypt = require('bcrypt');

const createUser = async ({ username, password, email, isAdmin }) => {
    try {
        password = await bcrypt.hash(password, 10);
        const {
            rows: [user],
        } = await client.query(`
            INSERT INTO users(username, password, email, "isAdmin")
            VALUES ($1, $2, $3, $4)
            RETURNING id, username, email, "isAdmin";
        `,
            [username, password, email, isAdmin]
        );
        return user;
    } catch (error) {
        console.log('createUser error.');
        console.error(error);
    };
};

const getUser = async ({ username, password }) => {
    try {
        const { rows: [user] } = await client.query(`
        SELECT *
        FROM users
        WHERE username='${username}'
        `);
        if (user && await bcrypt.compare(password, user.password)) {
            delete user.password;
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.log('getUser error.');
        console.error(error);
    };
};

const getUserById = async (userId) => {
    try {
        const {
            rows: [user],
        } = await client.query(`
            SELECT *
            FROM users
            WHERE id='${userId}'
        `);
        if (user) {
            delete user.password;
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.log('getUserById error.');
        console.error(error);
    }
}

const getUserByUsername = async (username) => {
    try {
        const {
            rows: [user],
        } = await client.query(`
            SELECT * 
            FROM users
            WHERE username='${username}'
        `);
        if (user) {
            delete user.password;
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.log('getUserByUsername error.');
        console.error(error);
    }
}

module.exports = {
    createUser,
    getUser,
    getUserById,
    getUserByUsername
};