var getHotelSchema = require("../models/ttlHotelsModel");
var path = require("path");
var hotelNameRef = getHotelSchema(); //call

// async function doSavemovieName(req, resp) {
//   console.log(req.body);

//   var obj = new hotelNameRef(req.body);

//   console.log(req.body);

//   await obj
//     .save()
//     .then((doc) => {
//       resp.send("Movie Data Saved");
//     })
//     .catch((err) => {
//       resp.send(err.message);
//     });
// }

async function dofind(req, resp) {
  // console.log(req.body);

  await hotelNameRef
    .find()
    .then((doc) => {
      resp.send(doc);
    })
    .catch((err) => {
      resp.send(err.message);
    });
}

async function doDlt(req, resp) {
  const id = req.query.id;

  await hotelNameRef
    .deleteOne({ id: id })
    .then((doc) => {
      resp.send(doc);
    })
    .catch((err) => {
      resp.send(err.message);
    });
}

module.exports = {
  dofind,
  doDlt
};