var express = require("express");
var bkdHotels = require("../controllers/bkdHotels")

var app = express.Router();

app.post("/save-bkdhtl-data", bkdHotels.doSaveBkdHotelsData);
app.post("/find-bkdhtl-data", bkdHotels.dofind);

module.exports = app;