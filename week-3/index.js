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

///error handling--404
app.use((req, res, next) => {
    const err = new Error("<h1>Not Found.<h1><p>Please enter in the end of the url: getData?number=, and then enter a positive integer.</p><p>The number should be equal or greater than 1, and should be a whold number.</p>");
    err.status = 404;
    next(err);
})
///error handling--global error
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(err.status).send(err.message);
    } else {
        res.status = 500 || err.status;
        err.message = err.message || "There's something wrong with the server. Please connect again.";
        res.send(err.message);
    }
}) 

////listen to port 3000
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})