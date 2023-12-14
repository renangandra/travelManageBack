const Itineraries = require('../../../models/Itineraries');

async function GetItineraries(req, res) {
  const { id, idUser } = req.query;

  try {
    let result = [];

    if (idUser) {
      await Itineraries.find({
        idUser,
      }).then((Itineraries) => {
        result = Itineraries;
      });

      return res.json({
        result,
      });
    }

    if (id) {
      await Itineraries.findById(id).then((Itinerary) => {
        result = Itinerary;
      });
      return res.json({
        result,
      });
    }
    await Itineraries.find({publicVisible: true}).then((Itinerary) => {
      result = Itinerary;
    });

    return res.json({
      result,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports = GetItineraries;
