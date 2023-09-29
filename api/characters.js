const express = require("express");
const { requireUser } = require("./utils");
const { createCharacter, getCharactersById } = require("../db/characters");
const router = express.Router();

router.get("/:userId/characters", requireUser, async (req, res) => {
    const { userId } = req.params;
    const characters = await getCharactersById(userId);
    if (characters) {
        res.send({
            success: true,
            characters,
        });
    } else {
        res.send({
            success: false,
            error: "NoCharacters",
            message: "There are no characters created by this account.",
        });
    };
});

module.exports = router;