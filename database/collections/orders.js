const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var ordersSchema = new Schema({
  idmenu : String,
  //idrestaurant : Number,
  //cantidad : String,
  idcliente : Date,
  lat : String,
  log : String,
  fullpayment : Number
});
var orders = mongoose.model("orders", ordersSchema);
module.exports = orders;
