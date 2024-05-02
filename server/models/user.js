const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
	{
		first_name: {
			type: String,
			required: [true, "Missing first name"],
		},
		last_name: {
			type: String,
			required: [true, "Missing last name"],
		},
		email: {
			type: String,
			required: [true, "No email or invalid email"],
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ collection: "Users" }
);
const User = mongoose.model("User", UserSchema);

module.exports = User;
