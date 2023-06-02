const { createError } = require("../utils/error");
const { createProject } = require("../services/projectService");

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
