const User = require("../models/user");

const fetchUser = async ({ _id }) => {
	User.findOne({ _id: _id })
		.then((user) => {
			return user;
		})
		.catch((err) => console.log("Something went wrong with fetching the user: " + err));
};

const createUser = async(req, res) => {
	try {
		let {email, password, role} = req.body;

		if (!role) role = 'adopter';
		if(!password) password = '';

		let itemTwo = await Post.create({email:email, role:role, password:password, id: allPosts.length+1});
		res.json({ success: true, data: itemTwo });
	} catch (err) {
		console.log(err);
	}
}

module.exports = { fetchUser, createUser };
