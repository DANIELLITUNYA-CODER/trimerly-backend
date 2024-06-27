// models/Booking.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  barberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Barber', required: true },
  serviceId: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, default: 'booked' },
});

module.exports = mongoose.model('Booking', BookingSchema);

