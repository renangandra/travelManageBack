const TravelTips = require('../../../models/TravelTips');

async function GetTravelTips(req, res) {
  const { id } = req.query;

  try {
    let result = [];
    if (id) {
      await TravelTips.findById(id).then((TravelTip) => {
        result = TravelTip;
      });
      return;
    }
    await TravelTips.find().then((TravelTip) => {
      result = TravelTip;
    });

    return res.json({
      result,
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

module.exports = GetTravelTips;
