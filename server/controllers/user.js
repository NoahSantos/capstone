const User = require("../models/user");
const bcrypt = require('bcrypt');

// const fetchUser = async ({ _id }) => {
// 	User.findOne({ _id: _id })
// 		.then((user) => {
// 			return user;
// 		})
// 		.catch((err) => console.log("Something went wrong with fetching the user: " + err));
// };

const fetchUser = async (req, res) => {
    try {
        let item = await User.find({});
        res.json({success: true, data: item});
    } catch(err) {
        console.log(err)
    }
}

const createUser = async(req, res) => {
	try {
		console.log(req.body)
		let {email, password, role} = req.body;
		let allUsers = await User.find();
		if (!role) role = 'adopter';
		if(!password) password = '';
		const hashedPassword = await bcrypt.hash(password, 10);

		let itemTwo = await User.create({email:email, role:role, password:hashedPassword, id: allUsers.length+1});
		res.json({ success: true, data: itemTwo });
	} catch (err) {
		console.log(err);
	}
}

module.exports = { fetchUser, createUser };
