const Animal = require("../models/animal");

const fetchAnimal = async (req, res) => {
	try {
		const {id} = req.params;
		console.log(req.params);
		let animal = await Animal.findOne({id: id});
		console.log(animal);
		res.json({success: true, data: animal})
	} catch (error) {
		res.json({success: false, data: error})
	}
};

const fetchAnimals = async (req, res) => {
	Animal.find({})
		.then((animals) => res.status(200).json({ success: true, data: animals }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const createAnimal = async (req, res) => {
	try {
		let allAnimals = await Animal.find({});
		const { name, age, gender, status, species, breed, needs, description, vaccination, profile, spade } = req.body;
		let itemTwo = await Animal.create({name, age, gender, status, species, breed, needs, desc: description, vaccination, profile, spade, id: allAnimals.length});
		// let itemTwo = await Animal.create({...req.body, id: allAnimals.length+1});
		res.json({ success: true, data: 'Animal successfully added' });
	} catch (error) {
		res.json({ success: false, data: error });
	}
};

const updateAnimal = async (req, res) =>{
	try {
		let {id} = req.params;
		let item = await Animal.findOneAndUpdate({id: id}, req.body);
		res.json({ success: true, data: 'Animal successfully edited' });
	} catch (error) {
		res.json({ success: false, data: error });
	}
}

const removeAnimal = async (req, res) => {
	try {
		let {id} = req.params;
		let item = await Animal.findOneAndDelete({id: id});
		if(item == null) {
            res.json({success: false, msg: "No animal exists with that id"})
        } else {
			res.json({ success: true, data: 'Animal successfully deleted' });
        }
	} catch (error) {
		res.json({ success: false, data: error });
	}
}

module.exports = { fetchAnimal, fetchAnimals, createAnimal, updateAnimal, removeAnimal, fetchAnimal };
