const { createError } = require("../utils/error");
const { registerService } = require("../services/userService");

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
