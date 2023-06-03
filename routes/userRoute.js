const express = require("express");
const router = express.Router();

const { register, updateUser } = require("../controllers/userController");

router.route("/auth/register").post(register);
router.route("/user/:id").put(updateUser);

module.exports = router;
