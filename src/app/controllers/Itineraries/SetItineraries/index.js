const Itineraries = require("../../../models/Itineraries");

async function SetItineraries(req, res) {
  const {
    title,
    duration,
    country,
    city,
    dataInitial,
    publicVisible,
    description,
    idUser,
    thumbnail,
  } = req.body;

  try {
    const Itinerary = await new Itineraries({
      title,
      duration,
      country,
      city,
      dataInitial,
      publicVisible,
      description,
      idUser,
      thumbnail,
    });

    await Itinerary.save(Itinerary);

    return res.json({
      message: 'Itinerary successfully created',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports= SetItineraries;
