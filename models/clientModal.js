const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    company: String,
    projects: [],
    totalSpend: Number,
    totalBalance: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
