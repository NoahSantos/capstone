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
		},
		watchlist: {
			type: Array,
		},
		email: {
			type: String,
			required: [true, "No email or invalid email"],
		},
		password: {
			type: String,
		},
	},
	{ collection: "Users" }
);
const User = mongoose.model("User", UserSchema);

module.exports = User;
