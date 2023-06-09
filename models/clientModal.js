const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    company: String,
    project: {
      type : Number,
      default : 0,
    },
    totalSpend: {
      type: Number,
      default: 0,
    },
    totalBalance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
