const TravelTips = require("../../../models/TravelTips");

async function UpdateTravelTips(req, res) {
  const { id } = req.params;
  const {
    title,
    description
  } = req.body;

  try {
    const travelTip = await TravelTips.findByIdAndUpdate(id, {
      title,
      description
    }, { new: true });

    if (!travelTip) {
      return res.status(404).json({ message: 'Travel Tip not found' });
    }

    return res.json({
      message: 'Travel Tip updated with success',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports= UpdateTravelTips;
