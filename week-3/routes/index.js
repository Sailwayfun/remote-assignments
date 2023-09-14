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
        res.send("<h1>Lack of Parameter</h1><p>Refresh the page and try again.</p>");
    } else if (!Number.isInteger(num) || Number(num) < 1 || isNaN(Number(num))) {
        res.send("<h1>Wrong Parameter</h1><p>Refresh the page and try again.</p>");
    } else {
        const sum = ((1 + num) * (num) / 2).toString();
        res.send(`<h1>${sum}</h1><p>Refresh the page and try again.</p>`);

    }

})

///an api to store cookie
router.get("/myName", (req, res) => {
    console.log(req.cookies.username);
    if (req.cookies.username) {
        res.render("my-name", { name: req.cookies.username });
    } else {
        res.redirect("/trackName");////if there areno username cookies,
        //redirect the user to /trackName to fill out and submit the form
    }

});

router.get("/trackName", (req, res) => {
    if (req.cookies.username) {
        return res.redirect("/myName");
    } else {
        res.render("my-name");
    }
})


router.post("/trackName", (req, res) => {
    const username = req.body.username;
    res.cookie("username", username);
    res.redirect(`/trackName?name=${username}`);
})


module.exports = router;