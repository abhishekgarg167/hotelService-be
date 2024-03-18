var mongoose = require("mongoose");
function getHotelSchema() {
  var SchemaClass = mongoose.Schema;
  var colSchema = new SchemaClass(
    {
      id:Number,
      name: String,
    },
    {
      versionKey: false, // to avoid __v field in table come by default
    }
  );

  var userColRef = mongoose.model("ttlHotels", colSchema);
  return userColRef;
}
module.exports = getHotelSchema;