const User = require("../models/user");

const fetchUser = async ({ _id }) => {
	User.findOne({ _id: _id })
		.then((user) => {
			return user;
		})
		.catch((err) => console.log("Something went wrong with fetching the user: " + err));
};

module.exports = { fetchUser };
