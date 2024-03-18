var express = require("express");
var ttlHotels = require("../controllers/ttlHotels")

var app = express.Router();

app.post("/find-ttlhtl-data", ttlHotels.dofind);
app.post("/delete-ttlhtl-data", ttlHotels.doDlt);

module.exports = app;