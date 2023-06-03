const express = require("express");
const router = express.Router();

const { createFreelancer } = require("../controllers/freelancerController");

router.route("/update").put(createFreelancer);

module.exports = router;
