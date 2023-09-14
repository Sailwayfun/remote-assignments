const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

///use Pug template
app.set("view engine", "pug");

///set up body parser and cookie parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

////use the route definitions
const mainRoutes = require("./routes");
app.use(mainRoutes);

///serve static files in "public" directory
app.use(express.static("public"));

///error handling--404
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})
///error handling--global error
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(err.status)
        res.render("error", { err });
    } else {
        err.message = err.message || "There's something wrong with the server. Please connect again.";
        res.status(500 || err.status);
        res.render("error", { err });
    }
})

////listen to port 3000
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})