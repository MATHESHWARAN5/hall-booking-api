const { bookings, rooms } = require('../data/data');
const Booking = require('../models/bookingModel');

const bookRoom = (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    const room = rooms.find(r => r.roomId === roomId);
    if (!room) {
        return res.status(404).json({ message: 'Room not found' });
    }
    const bookingId = bookings.length + 1;
    const newBooking = new Booking(bookingId, customerName, date, startTime, endTime, roomId);
    bookings.push(newBooking);
    res.status(201).json(newBooking);
};

const getAllBookings = (req, res) => {
    res.json(bookings);
};

module.exports = { bookRoom, getAllBookings };
