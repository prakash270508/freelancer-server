const User = require("../models/userModel");
const Freelancer = require("../models/freeLancerModal");
const Client = require("../models/clientModal");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

exports.registerService = async (req, res, next) => {
  const { username, email, password, role, name } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const newUser = new User({
    name,
    username,
    email,
    password: hashPassword,
    role,
  });

  if (role == "freelancer") {
    const newFreeLancer = new Freelancer({
      userID: newUser._id,
    });
    await newFreeLancer.save();
  } else if (role == "client") {
    const newClient = new Client({
      userID: newUser._id,
    });
    await newClient.save();
  }

  await newUser.save();

  return newUser;
};

//Update user
exports.updateUserService = async (req) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  );

  return user;
};
