const express = require("express");
const router = express.Router();
const { fetchUsers, createUser } = require("../controllers/user");

router.get("/", fetchUsers);
router.post("/", createUser);
// router.get("/:id", readOneUser)
// router.put("/:oldId", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;