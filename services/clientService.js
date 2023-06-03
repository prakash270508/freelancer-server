const Client = require("../models/clientModal");

//update client profile
exports.createClientProfile = async (req) => {
  const { userID } = req.body;

  const client = await Client.findOneAndUpdate(
    { userID },
    { $set: req.body },
    { new: true }
  );

  return client;
};
