const express = require("express");
const app = express();
const admin = (req, res) => {
    return res.send("Admin dashboard");
};
const isAdmin = (req, res, next) => {
    console.log("isAdmin is routing");
    next();
};

const port = 8000;
app.get('/login', (req, res) => {
    return res.send("You are visiting login route!!");
});

app.get("/admin", isLoggedIn, isAdmin, admin);

app.get('/signup', (req, res) => {
    return res.send("You are visiting signup route!!");
});

app.listen(port, () => {
    console.log("Server is up and running");
});