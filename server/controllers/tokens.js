const Token = require("../models/token");

const fetchTokens = async (req, res) => {
	try {
        let item = await Token.find();
        res.json({success: true, data: item});
    } catch(err) {
        console.log(err)
    }
};

const createTokens = async (req, res) => {
	try {
		let allTokens = await Token.find({});
		const { token, expiration, email } = req.body;
        console.log(req.body)
		let itemTwo = await Token.create({token, expiration, email, id: allTokens.length});
		// let itemTwo = await Animal.create({...req.body, id: allAnimals.length+1});
		res.json({ success: true, data: 'Token successfully added' });
	} catch (error) {
		res.json({ success: false, data: error });
	}
};

module.exports = { fetchTokens, createTokens };
