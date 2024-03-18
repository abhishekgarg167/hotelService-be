var express = require("express");
var mongoose = require("mongoose");
var ttlHtlRouter = require("./routers/ttlHotelsRout");
var bkdHtlRouter= require("./routers/bkdHotelsRout");
var userRouter= require("./routers/userRout");
var cors = require("cors");
var fileupload=require("express-fileupload");
var env=require("dotenv")

var app = express();
app.use(fileupload());
env.config()

app.use(cors());
app.use(express.json({extended:true}))

app.listen(3003, () => {
  console.log("Server Started...");
});


app.use("/ttl",ttlHtlRouter);
app.use("/bkd",bkdHtlRouter);
app.use("/user",userRouter);


//---------------------------------------------
var configObj = require("./config/dbconfig");
const dburl = configObj.dburl;

var dbCon = mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected...");
  })
  .catch((err) => {
    console.log(err.toString());
  });