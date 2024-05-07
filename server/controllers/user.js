const User = require("../models/user");
const bcrypt = require("bcrypt");

const fetchUser = async (req, res) => {
	const [_id] = req.body;
	User.find({ _id: _id })
		.then((user) => res.status(200).json({ success: true, data: user }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const fetchUsers = async (req, res) => {
	User.find({})
		.then((users) => res.status(200).json({ success: true, data: users }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const createUser = async (req, res) => {
	const [role, watchlist, email, password, id, method] = req.body;
	const tempUser = new User(role, watchlist, email, password, id, method);
	tempUser
		.validate()
		.then(() => {
			tempUser
				.save()
				.then(res.status(200).json({ success: true, data: tempUser }))
				.catch((err) => res.status(500).json({ success: false, data: err }));
		})
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

module.exports = { fetchUser, fetchUsers, createUser };
