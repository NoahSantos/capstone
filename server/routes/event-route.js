const express = require('express');
const router = express.Router();

const { fetchEvent, fetchEvents, createEvent, editEvent } = require("../controllers/event");

router.get('/', fetchEvents);
router.post('/', createEvent);
router.put('/:id', editEvent);
// router.delete('/:playerID', deletePlayers);

module.exports = router;