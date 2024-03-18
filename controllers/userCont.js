var getUserSchema = require("../models/userModel");

var path = require("path");
var userColRef = getUserSchema();

async function doLogin(req, resp) {
  let email = req.body.email;
  let pwd = req.body.pwd;
  //     console.log(req.body)
  const count = await userColRef.find({ email: email }).count();

  if (count == 0) {
    resp.json({ status: false, message: "Invalid User Id" });
    return;
  }

  const user = await userColRef.findOne({ email, pwd });
  // console.log(user);

  if (user != null) {
    resp.json({ status: true, user, message: "Logged in" });
  } else {
    resp.json({ status: false, message: "Invalid Password" });
  }
}

async function doSignup(req, resp) {
  // console.log(req.body);

  var obj = new userColRef(req.body);

  await obj
    .save()
    .then((doc) => {
      resp.send("Signedup");
    })
    .catch((err) => {
      resp.send(err.message);
    });
}

module.exports = {
  doSignup,
  doLogin,
};