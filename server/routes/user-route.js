const express = require("express");
const router = express.Router();
const { fetchUsers, createUser, loginUser } = require("../controllers/user");

router.get("/", fetchUsers);
router.post("/", createUser);
router.post("/login", loginUser);
// router.get("/:id", readOneUser)
// router.put("/:oldId", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;