const mongoose = require("mongoose");

const travelTipsSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const TravelTips = mongoose.model("TravelTips", travelTipsSchema);

module.exports = TravelTips;
