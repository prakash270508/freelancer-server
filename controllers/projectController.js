const { createError } = require("../utils/error");
const {
  createProject,
  applyProject,
  confirmProject,
} = require("../services/projectService");

//Create project
exports.createProjectController = async (req, res, next) => {
  try {
    const { project, client } = await createProject(req, res, next);
    if (project && client) {
      res.status(200).json({ message: "Project Created", client, project });
    } else {
      next();
    }
  } catch (error) {
    return next(createError(400, error.message));
  }
};

exports.applyProjectController = async (req, res, next) => {
  try {
    const { project, client } = await applyProject(req, res, next);
    if (project && client) {
      res
        .status(200)
        .json({ message: "Applied for the project", client, project });
    } else {
      next();
    }
  } catch (error) {
    return next(createError(400, error.message));
  }
};

exports.confirmProjectController = async (req, res, next) => {
  try {
    const { project, freelancer } = await confirmProject(req, res, next);
    if (project && freelancer) {
      res.status(200).json({ message: "Project confirmed", client, project });
    } else {
      next();
    }
  } catch (error) {
    return next(createError(400, error.message));
  }
};


//Delete Project
exports.deleteProject = async(req, res, next)=>{

  const {id} = req.params 
  

}

