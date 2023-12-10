const Itineraries = require("../../../models/Itineraries");

async function DeleteReservations(req, res) {
  const { id } = req.params;

  try {

    const itineraries = await Itineraries.findByIdAndDelete(id);

    if (!itineraries) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'Itinerary deleted' });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports= DeleteReservations;
