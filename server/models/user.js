const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
	{
		role: {
			type: String,
			enum: {
				values: ["teacher", "officer", "adopter"],
				message: "Can only be either a teacher, assistant, or adopter. Got {VALUE} instead",
			},
			required: [true, "Nothing given for role"],
			// default: 'adopter'
		},
		watchlist: {
			type: Array,
			default: [],
		},
		email: {
			type: String,
			required: [true, "No email or invalid email"],
		},
		password: {
			type: String,
			default: '',
		},
		id: {
			type: Number,
		}
	},
	{ collection: "Users" }
);
const User = mongoose.model("Users", UserSchema);

module.exports = User;
