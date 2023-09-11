const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
})

app.get("/getData", (req, res) => {
    const query = req.query;
    const { number } = query;
    const num = Number(number);
    if (!number) {
        res.send("Lack of Parameter");
    } else if (!Number.isInteger(num) || Number(num) < 1 || isNaN(Number(num))) {
        res.send("Wrong Parameter");
    } else {
        const sum = ((1 + num) * (num) / 2).toString();
        res.send(sum);

    }
    
})


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})