const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var userSchema = new Schema({
  username : String,
  password : String,
  user_restaurant : String
});
var user = mongoose.model("user", userSchema);
module.exports = restaurant;