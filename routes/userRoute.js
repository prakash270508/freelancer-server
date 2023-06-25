const express = require("express");
const router = express.Router();

const {
  register,
  updateUser,
  login,
  logout,
  allUser,
} = require("../controllers/userController");

router.route("/auth/register").post(register);
router.route("/auth/login").post(login);
router.route("/auth/logout").post(logout);
router.route("/user/:id").put(updateUser);
router.route("/alluser").get(allUser);


module.exports = router;
