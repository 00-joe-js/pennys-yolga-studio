const router = require('express').Router();

const Position = require("../db/position");

router.get("/positions", async (req, res, next) => {
    try {
        const positions = await Position.findAll();
        res.json(positions);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
