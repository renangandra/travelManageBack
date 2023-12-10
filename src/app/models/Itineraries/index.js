const mongoose = require("mongoose");

const itinerariesSchema = new mongoose.Schema({
  title: String,
  duration: String,
  country: String,
  city: String,
  dataInitial: String,
  publicVisible: Boolean,
  description: String,
  idUser: String,
  thumbnail: String,
});

const Itineraries = mongoose.model("Itineraries", itinerariesSchema);

module.exports = Itineraries;
