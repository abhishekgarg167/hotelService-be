var express = require("express");
var userController = require("../controllers/userCont");

var app = express.Router();

app.post("/signup-process", userController.doSignup);
app.post("/login-process", userController.doLogin);

module.exports = app;