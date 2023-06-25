const jwt = require("jsonwebtoken");
const { createError } = require("./error");
const User = require("../models/userModel");

const verifyTokenCookie = async (req, res, next) => {
  const token = req.cookies.user_Token;
  if (!token) {
    return next(createError(403, "Please Login"));
  }
  next();
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(createError(403, "Please Login"));
  }

  let data = jwt.verify(token, process.env.JWT_SECRETE)

  req.user = await User.findById(data._id)
  next();
};

module.exports = {
  verifyTokenCookie,
  verifyToken,
};
