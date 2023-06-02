const express = require("express");
const router = express.Router();

const { createProjectController } = require("../controllers/projectController");

router.route("/createProject").post(createProjectController);

module.exports = router;
