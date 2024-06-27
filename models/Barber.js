// models/Barber.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarberSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  services: { type: [String] },
  availability: { type: [String] },
  rating: { type: Number },
});

module.exports = mongoose.model('Barber', BarberSchema);

