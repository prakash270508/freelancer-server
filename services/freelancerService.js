const Freelancer = require("../models/freeLancerModal");

//Freelancing profile creation
exports.createFreelancerProfile = async (req, res, next) => {
  const { userID } = req.body;

  const freelancer = await Freelancer.findOneAndUpdate(
    { userID },
    { $set: req.body },
    { new: true }
  );

  return freelancer;
};
