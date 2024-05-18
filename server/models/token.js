const mongoose = require("mongoose");
const TokenSchema = new mongoose.Schema(
	{
		token: {
			type: String,
			required: [true, "Missing data"],
		},
		expiration: {
			type: Date,
			required: [true, "No expiration listed"],
		},
        email: {
            type: String,
            required: [true, "No email listed"],
        },
        id: {
            type: Number,
            required: [true, 'No id for this token']
        }
	},
	{ collection: "Tokens" }
);
const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;
