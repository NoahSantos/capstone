const express = require("express");
const router = express.Router();
const { fetchAnimals, createAnimal, updateAnimal, removeAnimal } = require("../controllers/animals");

router.get("/", fetchAnimals);
router.post("/", createAnimal);
// router.get("/:id", readOneUser)
router.put("/:id", updateAnimal);
router.delete("/:id", removeAnimal);

module.exports = router;
