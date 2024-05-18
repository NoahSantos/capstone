const express = require("express");
const router = express.Router();
const { fetchUsers, createUser, loginUser, editUser, authorizeUser, resetUser } = require("../controllers/user");

router.get("/", fetchUsers);
router.post("/", createUser);
router.post("/login", loginUser);
// router.get("/:id", readOneUser)
router.put("/:email", editUser);
// router.delete("/:id", deleteUser);
router.get('/verify', authorizeUser)
router.put('/reset/:email', resetUser)

module.exports = router;