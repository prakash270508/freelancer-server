const mongoose = require("mongoose");

exports.connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database ".gray.bold);
  } catch (error) {
    console.log("Not Connected to database".red.bold);
  }
};
