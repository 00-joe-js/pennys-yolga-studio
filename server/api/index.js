const router = require('express').Router();

const Position = require("../db/position");
const EBookSignup = require("../db/eBookSignups");

router.get("/positions", async (req, res, next) => {
    try {
        const positions = await Position.findAll();
        res.json(positions);
    } catch (err) {
        next(err);
    }
});

router.post("/want-ebook", async (req, res, next) => {

    const email = req.body.email;

    if (!email) {
        next(new Error("No email provided."));
    }

    try {
        const newEmailRecord = await EBookSignup.create({ email: email });
        console.log(newEmailRecord);
        res.status(201).end(); // Successful signup!
    } catch (e) {
        next(e);
    }

});

module.exports = router;
