const express = require("express");
const router = express.Router();
const { fetchUser, createUser } = require("../controllers/user");

router.get("/", fetchUser);
router.post("/", createUser);
// router.get("/:id", readOneUser)
// router.put("/:oldId", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;