const express = require("express");
const router = express.Router();
const { fetchAnimals, createAnimal } = require("../controllers/animals");

router.get("/", fetchAnimals);
router.post("/", createAnimal);
// router.get("/:id", readOneUser)
// router.put("/:oldId", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;
