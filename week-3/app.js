const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
})

////the getData API
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

////sum.html
app.use("/sum.html", express.static(path.join(__dirname, "sum.html")));


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})