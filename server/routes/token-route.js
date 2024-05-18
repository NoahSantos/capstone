const express = require('express');
const router = express.Router();

const { fetchTokens, createTokens } = require("../controllers/tokens");

router.get('/', fetchTokens);
router.post('/', createTokens);

module.exports = router;