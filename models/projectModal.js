const mongoose = require("mongoose");

const ProjectModal = new mongoose.Schema(
  {
    clientID: {
      type: String,
      required: true,
    },
    title: String,
    description: String,
    skillsRequired: [String],
    budget: Number,
    duration: String,
    status: {
      type: String,
      default: "open",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectModal);
