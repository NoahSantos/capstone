const express = require('express');
const router = express.Router();

const { fetchEvent, fetchEvents, createEvent } = require("../controllers/event");

router.get('/', fetchEvents);
// router.post('/', createPlayers);
// router.put('/:email', updatePlayers);
// router.delete('/:playerID', deletePlayers);

module.exports = router;