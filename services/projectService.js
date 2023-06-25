const User = require("../models/userModel");
const Freelancer = require("../models/freeLancerModal");
const Client = require("../models/clientModal");
const Project = require("../models/projectModal");
const { createError } = require("../utils/error");

//Create Project
exports.createProject = async (req, res, next) => {
  const { title, description, skillsRequired, budget, duration } = req.body;

  const userID = "64893da26e1af2771a945e5e";
  const client = await Client.findOne({ userID });

  if (!client) {
    next(createError(404, "User not found"));
  }

  const project = new Project({
    clientID: userID,
    title,
    description,
    skillsRequired,
    budget,
    duration,
  });

  client.project = client.project + 1;
  //   client.totalBalance -= Number(budget);

  await client.save();
  await project.save();

  return { project, client };
};

//Apply for project
exports.applyProject = async (req, res, next) => {
  const { projectId } = req.params;
  const { freelancerData , frelancerId} = req.body;
  const project = await Project.findById(projectId);

  const freelancer = await Freelancer.findById(frelancerId)

  project.noOfApplication = project.noOfApplication + 1;
  project.listOfApplicant.push(freelancerData);

  freelancer.appliedjob.push(project)

  await project.save()
  await freelancer.save()

  return {project, freelancer}

};

//Confirm project 

exports.confirmProject = async(req, res, next)=>{

  const {projectId} = req.params
  const {_id} = req.user
  const project = await Project.findById(projectId)
  const freelancer = await Freelancer.findOne({userID : _id})

  freelancer.approvedjob.push(project)
  
  const filterAppliedjob =  freelancer.appliedjob.filter((project)=> project._id !== projectId)

  freelancer.appliedjob = filterAppliedjob

  project.status = "ongoing"

  await freelancer.save()
  await project.save()

  return {freelancer , project}

}



