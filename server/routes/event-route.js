const express = require('express');
const router = express.Router();

const { fetchEvent, fetchEvents, createEvent, editEvent, deleteEvent } = require("../controllers/event");

router.get('/', fetchEvents);
router.post('/', createEvent);
router.get('/:id', fetchEvent)
router.put('/:id', editEvent);
router.delete('/:id', deleteEvent);

module.exports = router;