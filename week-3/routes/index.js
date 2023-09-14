const express = require("express");
const router = express.Router();
const path = require("path");

///home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
})

////the getData API
router.get("/getData", (req, res) => {
    const query = req.query;
    const { number } = query;
    const num = Number(number);
    if (!number) {
        res.send("<h1>Lack of Parameter</h1>");
    } else if (!Number.isInteger(num) || Number(num) < 1 || isNaN(Number(num))) {
        res.send("<h1>Wrong Parameter</h1>");
    } else {
        const sum = ((1 + num) * (num) / 2).toString();
        res.send(`<h1>${sum}</h1>`);

    }
    
})

module.exports = router;