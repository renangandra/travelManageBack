const TravelTips = require("../../../models/TravelTips");

async function DeleteTravelTips(req, res) {
  const { id } = req.params;

  try {

    const travelTips = await TravelTips.findByIdAndDelete(id);

    if (!travelTips) {
      return res.status(404).json({ message: 'Travel Tip not found' });
    }


    return res.json({ message: 'Travel Tip deleted' });

  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

module.exports= DeleteTravelTips;
