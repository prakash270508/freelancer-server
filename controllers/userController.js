const { createError } = require("../utils/error");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  registerService,
  updateUserService,
} = require("../services/userService");

//Regiseter
exports.register = async (req, res, next) => {
  try {
    const user = await registerService(req, res, next);
    res.status(201).json({ message: "Registration successfull", user });
  } catch (error) {
    if (error.keyValue.username) {
      next(createError(403, "Username Already exist"));
    } else if (error.keyValue.email) {
      next(createError(403, "Email Already exist"));
    }
  }
};

//Update user
exports.updateUser = async (req, res, next) => {
  try {
    const user = await updateUserService(req);

    if (!user) {
      return next(createError(404, "User not found"));
    }

    await user.save();

    res.status(201).json({ message: "User Updated", user });
  } catch (error) {
    if (error.keyValue.email) {
      next(createError(403, "Email Already exist"));
    }
  }
};

//Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return next(createError(403, "User not found"));
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return next(createError(403, "Invlaid credentials"));
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRETE);

    res.cookie("user_Token", token, {
      expires: new Date(Date.now() + 2589200000),
      httpOnly: true,
    });
    res.status(201).json({ message: "Logged in", user, token });
  } catch (error) {
    next(error);
  }
};

//Logout
exports.logout = async (req, res, next) => {
  try {
    res
      .cookie("user_Token", null, {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .status(201)
      .json({ message: "logged out" });
  } catch (error) {
    next(error);
  }
};

//Al user
exports.allUser = async (req, res, next) => {
  const users = await User.find();
  res.status(201).json({ message: "All users", users });
};
