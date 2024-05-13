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
		if (!role) role = 'adopter';
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
		let {email, password} = req.body;
		let user = await User.findOne({email:email});
		if(user){
			if(user.method === 'google'){
				let token = jwt.sign({email: user.email, code: 'enter some code here'}, 'secret', { expiresIn: '6h' });
				// secret: esojgeuohpoSw3-5840:Ij(#)%&geiIOEHGSIEOGJe0ruis#()%*^$Y*W()#QJGRIOHS*U#%*)&#)(@408wtu9350849yujh0gpsro)
				res.json({success: truncate, data: token});
			}else if(await bcrypt.compare(password, user.password)){
				let token = jwt.sign({email: user.email, code: 'enter some code here'}, 'secret', { expiresIn: '6h' });
				// secret: esojgeuohpoSw3-5840:Ij(#)%&geiIOEHGSIEOGJe0ruis#()%*^$Y*W()#QJGRIOHS*U#%*)&#)(@408wtu9350849yujh0gpsro)
				res.json({success: truncate, data: token});
			}else{
				res.json({success: false, data: 'Incorrect credentials'});
			}
		}else{
			res.json({success: false, data: 'No user with that email exists'});
		}
	} catch (error) {
		console.log(error);
	}
}

// let token = jwt.sign({user, code: "yguf02839yfg879y23g"}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '4h'});
//             res.status(201).json({token});

module.exports = { fetchUser, fetchUsers, createUser, loginUser };
