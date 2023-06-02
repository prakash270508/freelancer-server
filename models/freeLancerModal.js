const mongoose = require("mongoose");

const freeLancerSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    skills: [String],
    hourlyRate: Number,
    totalIncome: Number,
    appliedjob: [],
    approvedjob: [],
    ongoingProject: [],
    title: String,
    description: String,
    languages: [String],
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Freelancer", freeLancerSchema);
