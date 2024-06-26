const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const fetchUser = async (req, res) => {
	const [_id] = req.body;
	User.find({ _id: _id })
		.then((user) => res.status(200).json({ success: true, data: user }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const fetchUsers = async (req, res) => {
	try {
        let item = await User.find();
        res.json({success: true, data: item});
    } catch(err) {
        console.log(err)
    }
};

const createUser = async (req, res) => {
	try {
		let {email, password, role, method} = req.body;
		let allUsers = await User.find();
		if (!role) role = 2;
		if(!password) password = '';
		let hashPassword = await bcrypt.hash(password, 10);
		let itemTwo = await User.create({email:email, role:role, password:hashPassword, method:method, id: allUsers.length+1});
		res.json({ success: true, data: itemTwo });
	} catch (err) {
		console.log(err);
	}
};

const loginUser = async (req, res) => {
	try {
		let {email, method} = req.body;
		let allUsers = await User.find();
		let user = await User.findOne({email:email});
		if(user){
			let {password} = req.body;
			if(user.method === 'google' && user.method === method){
				let token = jwt.sign({email: user.email, code: '123456789', role: user.role}, process.env.SECRET, { expiresIn: '2h' });
				res.json({success: true, data: token});
			}else if(await bcrypt.compare(password, user.password) && user.method === method && method === 'local'){
				let token = jwt.sign({email: user.email, code: '123456789', role: user.role}, process.env.SECRET, { expiresIn: '2h' });
				res.json({success: 'logged', data: token});
			}else{
				res.json({success: false, data: 'Incorrect credentials'});
			}
		}else{
			let {password} = req.body;
			if(method === 'google'){
				let hashPassword = await bcrypt.hash(password, 10);
				let itemTwo = await User.create({email:email, role:2, password:hashPassword, method:method, id: allUsers.length+1});
				res.json({ success: true});
			}else{
				let {password2} = req.body;
				if(password === password2){
					let hashPassword = await bcrypt.hash(password, 10);
					let itemTwo = await User.create({email:email, role:2, password:hashPassword, method:method, id: allUsers.length+1});
					res.json({success: true});
				}else{
					res.json({success: false, data: "Passwords do not match"})
				}
			}
			
		}
	} catch (error) {
		console.log(error);
	}
}

const editUser = async (req, res) => {
	try {
		let {email} = req.params;
		let {role} = req.body;
		let item = await User.findOneAndUpdate({email: email}, {role});
		res.json({ success: true, data: 'User successfully edited' });
	} catch (error) {
		res.json({ success: false, data: error });
	}
}

const authorizeUser = async (req, res) => {
	try{
		let data = req.headers.authorization;
		let verify = jwt.verify(data, process.env.SECRET);
		res.json({success: true, data: verify})
	}catch(err){
		res.json({success: false, data: err})
	}
}

const resetUser = async (req, res) => {
	try {
		console.log(req.body)
		let {email} = req.params;
		let {password} = req.body;
		let hash = await bcrypt.hash(password, 10);
		let item = await User.findOneAndUpdate({email: email}, {password: hash});
		res.json({ success: true, data: 'User successfully edited' });
	} catch (error) {
		res.json({ success: false, data: error });
	}
}

module.exports = { fetchUser, fetchUsers, createUser, loginUser, editUser, authorizeUser, resetUser };
