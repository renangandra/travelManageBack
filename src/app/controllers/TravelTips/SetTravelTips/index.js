
const TravelTips = require("../../../models/TravelTips");

async function SetTravelTips(req, res) {
  const {
    title,
    description
  } = req.body;

  try {
    const Travel = new TravelTips({
      title,
      description
  });

    await Travel.save(Travel);

    return res.json({
      message: 'Travel Tip successfully created',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports= SetTravelTips;
