const express = require("express");
const router = express.Router();

const { createClient } = require("../controllers/clientController");

router.route("/update").put(createClient);

module.exports = router;
