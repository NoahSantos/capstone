const Event = require("../models/event");

const fetchEvent = async (req, res) => {
	const [_id] = req.body;
	Event.findOne({ _id: _id })
		.then((event) => res.status(200).json({ success: true, data: event }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const fetchEvents = async (req, res) => {
	Event.find({})
		.then((events) => res.status(200).json({ success: true, data: events }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const createEvent = async (req, res) => {
	const { title, date, image, description, tags } = req.body;
	const tempEvent = new Event(title, date, image, description, tags);
	tempEvent
		.validate()
		.then((tempEvent) => res.status(200).json({ success: true, data: "New event successfully uploaded" }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

module.exports = { fetchEvent, fetchEvents, createEvent };
