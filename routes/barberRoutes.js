const express = require('express');
const { listBarbers, getBarberProfile } = require('../controllers/barberController');
const router = express.Router();

router.get('/list', listBarbers);
router.get('/profile/:barberId', getBarberProfile);

module.exports = router;
