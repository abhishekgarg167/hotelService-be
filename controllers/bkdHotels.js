var getBkdHotelsSchema = require("../models/bkdHotelsModels");
var path = require("path");
var bkdHotelsRef = getBkdHotelsSchema(); //call

async function doSaveBkdHotelsData(req, resp) {
  // console.log(req.body);

  var obj = new bkdHotelsRef(req.body);

  await obj
    .save()
    .then((doc) => {
      resp.send("Hotel Booked");
    })
    .catch((err) => {
      resp.send(err.message);
    });
}

async function dofind(req, resp) {
  // console.log(req.body);
  const emailId=req.query.email;

  await bkdHotelsRef
    .find({emailId:emailId})
    .then((doc) => {
      resp.send(doc);
    })
    .catch((err) => {
      resp.send(err.message);
    });
}



module.exports = {
  doSaveBkdHotelsData,
  dofind
};