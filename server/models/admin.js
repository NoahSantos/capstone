const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema(
	{
		role: {
			type: String,
			enum: {
				values: ["teacher", "student"],
				message: "Can only be teacher or student, got {VALUE}",
			},
			required: [true, "Nothing given for role"],
		},
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
	{ collection: "Admin" }
);
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
