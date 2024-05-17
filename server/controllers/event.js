const Event = require("../models/event");

const fetchEvents = async (req, res) => {
	try {
        let item = await Event.find();
        res.json({success: true, data: item});
    } catch(err) {
        console.log(err)
    }
};

const fetchEvent = async (req, res) => {
	try {
		const {id} = req.params;
		let animal = await Event.findOne({id: id});
		res.json({success: true, data: animal})
	} catch (error) {
		res.json({success: false, data: error})
	}
};

const createEvent = async (req, res) => {
	try {
		let allEvents = await Event.find({});
		const { title, date, time, description, location, image } = req.body;
		let itemTwo = await Event.create({title, date, time, description, location, image, id: allEvents.length});
		res.json({ success: true, data: 'Event successfully added' });
	} catch (error) {
		res.json({ success: false, data: error });
	}
};

const editEvent = async (req, res) => {
	try {
		let {id} = req.params;
		let item = await Event.findOneAndUpdate({id: id}, req.body);
		res.json({ success: true, data: 'Event successfully edited' });
	} catch (error) {
		res.json({ success: false, data: error });
	}
}

const deleteEvent = async (req, res) => {
	try {
		let {id} = req.params;
		let item = await Event.findOneAndDelete({id: id});
		if(item == null) {
            res.json({success: false, msg: "No event exists with that id"})
        } else {
			res.json({ success: true, data: 'Event successfully deleted' });
        }
	} catch (error) {
		res.json({ success: false, data: error });
	}
}

module.exports = { fetchEvent, fetchEvents, createEvent, editEvent, deleteEvent };
