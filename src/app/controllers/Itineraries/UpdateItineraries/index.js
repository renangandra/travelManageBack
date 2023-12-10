const Itineraries = require('../../../models/Itineraries');

async function UpdateItineraries(req, res) {
  const { id } = req.params;
  const { title, duration, country, city, dataInitial, publicVisible, description, idUser, thumbnail } = req.body;

  try {

    const itineraries = await Itineraries.findByIdAndUpdate(id, { title, duration, country, city, dataInitial, publicVisible, description, idUser, thumbnail }, { new: true });

    if (!itineraries) {
      return res.status(404).json({ message: 'Travel Tip not found' });
    }

    return res.json({
      message: 'Itinerary successfully updated',
    });
  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

module.exports = UpdateItineraries;
