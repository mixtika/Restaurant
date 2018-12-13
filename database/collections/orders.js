const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;
var ordersSchema = new Schema({

  //cantidad : String,
  idcliente : Date,
  lat : String,
  log : String,
  fullpayment : Number,
  id_restaurant : String

});
var orders = mongoose.model("orders", ordersSchema);
module.exports = orders;
