const User = require("../models/userModel");
const Freelancer = require("../models/freeLancerModal");
const Client = require("../models/clientModal");
const Project = require("../models/projectModal");
const { createError } = require("../utils/error");

//Create Project
exports.createProject = async (req, res, next) => {
  const { userID, title, description, skillsRequired, budget, duration } =
    req.body;
  const client = await Client.findOne({ userID });

  const project = new Project({
    clientID: userID,
    title,
    description,
    skillsRequired,
    budget,
    duration,
  });

  client.projects.push(project);
//   client.totalBalance -= Number(budget);

  await client.save();
  await project.save();

  return { project, client };
};



