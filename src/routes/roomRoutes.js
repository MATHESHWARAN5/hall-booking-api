const express = require('express');
const { createRoom, getAllRooms } = require('../controllers/roomController');

const router = express.Router();

router.post('/rooms', createRoom);
router.get('/rooms', getAllRooms);

module.exports = router;
