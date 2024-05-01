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
		},
		gender: {
			type: String,
			enum: {
				values: ["male", "female"],
				message: "Invalid gender, must be either male or female, got {VALUE}",
			},
			required: [true, "No gender listed"],
		},
		species: {
			type: String,
			required: [true, "No species listed"],
		},
		breed: {
			type: String,
			required: [true, "No breed listed"],
		},
		needs: {
			type: String,
		},
		description: {
			type: String,
			required: [true, "No description listed"],
		},
		medical: {
			vaccinations: {
				type: String,
			},
			neutered: {
				type: Boolean,
				required: [true, "Can or can not this animal reproduce?"],
			},
		},
		media: {
			type: [String],
			required: true,
		},
	},
	{ collection: "Animals" }
);
const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
