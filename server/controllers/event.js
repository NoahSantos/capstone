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
	try {
		let allEvents = await Event.find({});
		const { title, date, time, description, location, image } = req.body;
		console.log(req.body)
		let itemTwo = await Event.create({title, date, time, description, location, image, id: allEvents.length});
		res.json({ success: true, data: 'Event successfully added' });
	} catch (error) {
		res.json({ success: false, data: error });
	}
};

module.exports = { fetchEvent, fetchEvents, createEvent };
