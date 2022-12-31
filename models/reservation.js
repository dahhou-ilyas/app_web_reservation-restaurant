const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const reservSchema = new Schema({
  nom: String,
  prenom: String,
  table:Number,
  email: String,
  date:String
});
 
 
// Create a model based on that schema
const Reservation = mongoose.model("Reservation", reservSchema);
 
 
// export the model
module.exports = Reservation; 