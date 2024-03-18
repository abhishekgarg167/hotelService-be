var mongoose = require("mongoose");
function getBkdHotelsSchema() {
  var SchemaClass = mongoose.Schema;
  var colSchema = new SchemaClass(
    {
      id:Number,
      name: String,
      emailId: String,
      dob:{type:Date, default:Date.now}
    },
    {
      versionKey: false, // to avoid __v field in table come by default
    }
  );

  var userColRef = mongoose.model("bkdHotels", colSchema);
  return userColRef;
}
module.exports = getBkdHotelsSchema;