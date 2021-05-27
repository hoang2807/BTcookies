const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const port = 3000;

const connectDB = require("./config/mongo-connect");

const route = require("./routes");

connectDB();

app.use("/static", express.static(path.resolve(__dirname, "./asset")));
app.use(express.json());
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
    })
);
app.use("/", route);
app.get("/home", (req, res) => {
    console.log(req.session);
    req.session.a = "ok";
    res.send("home");
});
app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});