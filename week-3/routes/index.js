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
    let data = "";
    if (!number) {
        data += "Lack of Parameter";
    } else if (!Number.isInteger(num) || num < 1 || isNaN(num)) {
        data += "Wrong Parameter";
    } else {
        const sum = ((1 + num) * (num) / 2).toString();
        data += sum;
    }
    res.send(data);

})

///add a post route for the above API
// router.post("/getData", (req, res) => {
//     const number = req.body.number;
//     console.dir(number)
//     res.redirect(`/getData?number=${number}`);
// })

///an api to store cookie
router.get("/myName", (req, res) => {
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
    console.log(username);
    res.cookie("username", username);
    res.redirect(`/trackName?name=${username}`);
})


module.exports = router;