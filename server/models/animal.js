const mongoose = require("mongoose");
const AnimalSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Missing Name"],
		},
		age: {
			type: Number,
			required: [true, "No age listed"],
			max: 99,
			min: 0,
		},
		gender: {
			type: String,
			enum: {
				values: ["M", "F"],
				message: "Invalid gender, must be either M or F, got {VALUE}",
			},
			required: [true, "No gender listed"],
		},
		status: {
			type: Number,
			enum: {
				values: [0, 1, 2],
				// 0 is avaiable, 1 is unavaiable, 2 is watch
				message: "Invalid status, must be either 0 (available), 1 (pending), or 2 (unavailable). Got {VALUE}",
			},
			required: [true, "No status listed"],
		},
		species: {
			type: Number,
			enum: {
				values: [0, 1],
				// 0 is dog, 1 is cat
				message: "Invalid status, must be either 0 (dog) or 1 (cat). Got {VALUE}",
			},
			required: [true, "No species listed"],
		},
		breed: {
			type: String,
			required: [true, "No breed listed"],
		},
		needs: {
			type: String,
		},
		desc: {
			type: String,
			required: [true, "No description listed"],
		},
		vaccinations: {
			type: String,
		},
		spade: {
			type: String,
			required: [true, "Can or can not this animal reproduce?"],
		},
		profile: {
			type: String,
			required: [true, "No media listed"],
		},
		id:{
			type: Number,
			required: [true, 'No id for this animal']
		}
	},
	{ collection: "Animals" }
);
const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
