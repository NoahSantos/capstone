const User = require("../models/user");
const bcrypt = require("bcrypt");

const fetchUser = async (req, res) => {
	const [_id] = req.body;
	User.find({ _id: _id })
		.then((user) => res.status(200).json({ success: true, data: user }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const fetchUsers = async (req, res) => {
	// User.find({})
	// 	.then((users) => res.status(200).json({ success: true, data: users }))
	// 	.catch((err) => res.status(500).json({ success: false, data: err }));
	try {
        let item = await User.find();
        res.json({success: true, data: item});
    } catch(err) {
        console.log(err)
    }
};

const createUser = async (req, res) => {
	// const [role, watchlist, email, password, id, method] = req.body;
	// const tempUser = new User(role, watchlist, email, password, id, method);
	// tempUser
	// 	.validate()
	// 	.then(() => {
	// 		tempUser
	// 			.save()
	// 			.then(res.status(200).json({ success: true, data: tempUser }))
	// 			.catch((err) => res.status(500).json({ success: false, data: err }));
	// 	})
	// 	.catch((err) => res.status(500).json({ success: false, data: err }));
	try {
		let {email, password, role, method} = req.body;
		let allUsers = await User.find();
		if (!role) role = 'adopter';
		if(!password) password = await bcrypt.hash(password, 10);
		let itemTwo = await User.create({email:email, role:role, password:password, method:method, id: allUsers.length+1});
		res.json({ success: true, data: itemTwo });
	} catch (err) {
		console.log(err);
	}
};

module.exports = { fetchUser, fetchUsers, createUser };
