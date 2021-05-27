const route = require("express").Router();

const AuthRoute = require("./auth");

route.use(AuthRoute);

module.exports = route;