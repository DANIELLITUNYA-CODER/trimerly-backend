const express = require('express');
const { createBooking, getUserBookings, cancelBooking } = require('../controllers/bookingController');
const router = express.Router();

router.post('/create', createBooking);
router.get('/user/:userId', getUserBookings);
router.post('/cancel', cancelBooking);

module.exports = router;
