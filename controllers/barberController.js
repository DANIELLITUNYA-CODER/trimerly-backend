const Barber = require('../models/Barber');

exports.listBarbers = async (req, res) => {
  try {
    const barbers = await Barber.find();
    res.json(barbers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBarberProfile = async (req, res) => {
  try {
    const barber = await Barber.findById(req.params.barberId);
    if (!barber) return res.status(404).json({ message: 'Barber not found' });
    res.json(barber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
