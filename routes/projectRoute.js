const express = require("express");
const router = express.Router();

const { createProjectController, applyProjectController , confirmProjectController } = require("../controllers/projectController");

router.route("/createProject").post(createProjectController);
router.route('/apply-project/:projectId').post(applyProjectController)
router.route('/confirm-project/:projectId').post(confirmProjectController)

module.exports = router;
