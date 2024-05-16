const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Missing title"],
		},
		date: {
			type: String,
			required: [true, "No date listed"],
		},
		image: {
			type: String,
			default: "https://cdn.pixabay.com/photo/2017/08/12/23/29/background-texture-2635740_640.jpg",
			required: [true, "Needs a background image, none specified"],
		},
		description: {
			type: String,
			require: [true, "No description, what's this event about?"],
		},
		location: {
			type: String,
			required: [true, "Location required"]
		}
	},
	{ collection: "Events" }
);
const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
