const client = require('./client');
const { createUser } = require('./users');
const { createCharacter } = require('./characters');
const { createSuit } = require('./suits');
const { createCharacterSuit } = require('./characterSuits');

const dropTables = async () => {
    try {
        console.log('Dropping tables...');
        await client.query(`
            DROP TABLE IF EXISTS users CASCADE;
            DROP TABLE IF EXISTS characters CASCADE;
            DROP TABLE IF EXISTS character_suits CASCADE;
            DROP TABLE IF EXISTS suits CASCADE;
        `);
        console.log('Finished dropping tables.');
    } catch (error) {
        console.log('Error dropping tables.');
        console.error(error);
    };
};

const createTables = async () => {
    try {
        console.log('Creating tables...');
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                "isAdmin" BOOLEAN DEFAULT FALSE
            );

            CREATE TABLE characters (
                id SERIAL PRIMARY KEY,
                "userId" INTEGER REFERENCES users(id),
                name VARCHAR(20) NOT NULL,
                max_health INTEGER NOT NULL,
                max_focus INTEGER NOT NULL,
                current_health INTEGER NOT NULL,
                current_focus INTEGER NOT NULL,
                control INTEGER NOT NULL,
                accuracy INTEGER NOT NULL,
                dodge INTEGER NOT NULL,
                level INTEGER,
                experience INTEGER,
                rank VARCHAR(255),
                money INTEGER,
                profile_image VARCHAR(255)
            );

            CREATE TABLE suits (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                health INTEGER NOT NULL,
                energy INTEGER NOT NULL,
                melee INTEGER NOT NULL,
                range INTEGER NOT NULL,
                armor INTEGER NOT NULL,
                speed INTEGER NOT NULL
            );

            CREATE TABLE character_suits (
                id SERIAL PRIMARY KEY,
                "characterId" INTEGER REFERENCES characters(id),
                "suitId" INTEGER REFERENCES suits(id),
                name VARCHAR(255) NOT NULL,
                max_health INTEGER NOT NULL,
                max_energy INTEGER NOT NULL,
                current_health INTEGER NOT NULL,
                current_energy INTEGER NOT NULL,
                movement INTEGER NOT NULL
            );

        `)
        console.log('Finished creating tables!');
    } catch (error) {
        console.log('Error creating tables!');
        console.error(error);
    };
};

const createIntialUsers = async () => {
    try {
        console.log('Creating intial users...');

        const admin = await createUser({
            username: 'admin',
            password: 'password',
            email: 'admin@rog.com',
            isAdmin: true
        });

        console.log('Finished creating users.');
    } catch (error) {
        console.log('Error creating users.');
    };
};

const createIntialCharacters = async () => {
    try {
        console.log('Creating intial characters...');

        const adminCharacter = await createCharacter({
            userId: 1,
            name: 'Amuro Ray',
            max_health: '100',
            max_focus: '20',
            current_health: '100',
            current_focus: '20',
            control: '10',
            accuracy: '50',
            dodge: '50',
            level: 1,
            experience: 0,
            rank: 'Recruit',
            money: 1000,
            profile_image: 'https://static.zerochan.net/Amuro.Ray.full.3824958.jpg'
        });

        const adminCharacter2 = await createCharacter({
            userId: 1,
            name: 'Char Azanble',
            max_health: '100',
            max_focus: '20',
            current_health: '100',
            current_focus: '20',
            control: '10',
            accuracy: '50',
            dodge: '50',
            level: 1,
            experience: 0,
            rank: 'Recruit',
            money: 1000,
            profile_image: 'https://i.imgur.com/RAQgfwD.png'
        });

        console.log('Finished creating characters.');
    } catch (error) {
        console.log('Error creating characters.');
        console.log(error);
    };
};

const createIntialSuits = async () => {
    try {
        console.log('Creating intial suits...');

        const RX79 = await createSuit({
            name: 'RX-78-02 Gundam',
            description: 'It is a gundam.',
            health: 1000,
            energy: 500,
            melee: 100,
            range: 100,
            armor: 100,
            speed: 100
        });

        const ZakuII = await createSuit({
            name: 'MS-06S Zaku II',
            description: 'It is a zaku.',
            health: 1000,
            energy: 500,
            melee: 100,
            range: 100,
            armor: 100,
            speed: 100
        });

        console.log('Finished creating suits.');
    } catch (error) {
        console.log('Error creating suits.');
    };
};

const createIntialCharacterSuits = async () => {
    try {
        console.log('Creating intial characterSuits...');

        const adminRX78 = await createCharacterSuit({
            characterId: 1,
            suitId: 1,
            name: 'Gundam',
            max_health: 1000,
            max_energy: 500,
            current_health: 1000,
            current_energy: 500,
            movement: 2
        });

        console.log('Finished creating characterSuits.');
    } catch (error) {
        console.log('Error creating characterSuits.');
    };
};

const rebuildDB = async () => {
    try {
        client.connect();
        await dropTables();
        await createTables();
    } catch (error) {
        console.error(error);
    };
};

const seedDB = async () => {
    try {
        console.log('Seeding database...');
        await createIntialUsers();
        await createIntialCharacters();
        await createIntialSuits();
        await createIntialCharacterSuits();
        console.log('Finished seeding database.');
    } catch (error) {
        console.log('Error seeding database.');
        console.error(error);
    }
}

module.exports = {
    rebuildDB,
    seedDB
}