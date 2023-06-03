const { createError } = require("../utils/error");
const { createFreelancerProfile } = require("../services/freelancerService");

//create frelancer profile
exports.createFreelancer = async (req, res, next) => {
  try {
    const freelancer = await createFreelancerProfile(req, res, next);
    if (!freelancer) {
      return next(createError(404, "Freelancer not Found"));
    }
    await freelancer.save();
    res.status(200).json({ message: "Freelancer profile Updated", freelancer });
  } catch (error) {
    return next(createError(400, "Freelancer profile updatefailed"));
  }
};
