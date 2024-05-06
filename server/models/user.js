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
		},
		method: {
			type: String,
            enum: {
                values: ["local", "google"],
                message: "Can only be either local or google. Got {VALUE} instead",
            },
		}
	},
	{ collection: "Users" }
);
const User = mongoose.model("Users", UserSchema);

module.exports = User;
