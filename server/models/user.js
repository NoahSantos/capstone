const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
	{
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
