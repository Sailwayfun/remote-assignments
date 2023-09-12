const path = require("path");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
})

///serve static files in "public" directory
app.use(express.static("public"));

////the getData API
app.get("/getData", (req, res) => {
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


////listen to port 3000
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})