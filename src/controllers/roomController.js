const { rooms } = require('../data/data');
const Room = require('../models/roomModel');

const createRoom = (req, res) => {
    const { numberOfSeats, amenities, pricePerHour } = req.body;
    const roomId = rooms.length + 1;
    const newRoom = new Room(roomId, numberOfSeats, amenities, pricePerHour);
    rooms.push(newRoom);
    res.status(201).json(newRoom);
};

const getAllRooms = (req, res) => {
    res.json(rooms);
};

module.exports = { createRoom, getAllRooms };
