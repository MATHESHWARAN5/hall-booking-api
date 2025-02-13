const express = require('express');
const { bookRoom, getAllBookings } = require('../controllers/bookingController');

const router = express.Router();

router.post('/bookings', bookRoom);
router.get('/bookings', getAllBookings);

module.exports = router;
