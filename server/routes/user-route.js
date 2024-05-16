const express = require("express");
const router = express.Router();
const { fetchUsers, createUser, loginUser, editUser } = require("../controllers/user");

router.get("/", fetchUsers);
router.post("/", createUser);
router.post("/login", loginUser);
// router.get("/:id", readOneUser)
router.put("/:email", editUser);
// router.delete("/:id", deleteUser);

module.exports = router;