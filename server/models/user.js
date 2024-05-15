const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
	{
		role: {
			type: Number,
			enum: {
				values: [0, 1, 2],
				// 0 is admin, 1 is editor, 2 is adopter
				message: "Can only be either a teacher, assistant, or adopter. Got {VALUE} instead",
			},
			required: [true, "Nothing given for role"],
			// default: 'adopter'
		},
		watchlist: {
			type: [String],
			default: [],
		},
		email: {
			type: String,
			unique: [true, "This email is already in use"],
			required: [true, "No email or invalid email"],
		},
		password: {
			type: String,
			default: "",
		},
		id: {
			unique: [true, "Duplicate ID"],
			type: Number,
		},
		method: {
			type: String,
			enum: {
				values: ["local", "google"],
				message: "Can only be either local or google. Got {VALUE} instead",
			},
		},
	},
	{ collection: "Users" }
);
const User = mongoose.model("Users", UserSchema);

module.exports = User;
