const Room = require('../models/roomModel');
const Booking = require('../models/bookingModel');

let rooms = [
    new Room(1, 50, ['WiFi', 'Projector', 'Whiteboard'], 100),
    new Room(2, 30, ['WiFi', 'Projector'], 70),
    new Room(3, 20, ['WiFi', 'Whiteboard'], 50)
];

let bookings = [];

module.exports = { rooms, bookings };
