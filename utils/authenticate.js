const jwt = require("jsonwebtoken");
const { createError } = require("./error");

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
  next();
};

module.exports = {
  verifyTokenCookie,
  verifyToken,
};
