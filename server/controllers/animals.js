const Animal = require("../models/animal");

const fetchAnimal = async (req, res) => {
	const [_id] = req.body;
	Animal.findOne({ _id: _id })
		.then((animal) => res.status(200).json({ success: true, data: animal }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const fetchAnimals = async (req, res) => {
	Animal.find({})
		.then((animals) => {
			res.status(200).json({ success: true, animals: animals });
		})
		.catch((err) => res.status(500).json({ success: false, data: err }));
};

const createAnimal = async (req, res) => {
	const { name, age, gender, status, species, breed, needs, description, medical, media } = req.body;
	const tempAnimal = new Animal(name, age, gender, status, species, breed, needs, description, medical, media);
	tempAnimal
		.validate()
		.then((tempAnimal) => res.status(200).json({ success: true, data: "New animal successfully uploaded" }))
		.catch((err) => res.status(500).json({ success: false, data: err }));
	// if (!name || !age || !gender || !status || !species || !breed || !description || !medical["neutered"] || !media) {
	// 	errors.push({ msg: "Please fill in all fields" });
	// }
};

// const updateAnimal = async ({}) =>{

// }

module.exports = { fetchAnimal, fetchAnimals, createAnimal };
