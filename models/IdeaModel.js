const mongoose = require("mongoose");

const IdeaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: [50, "name cannot exceed 50 characters"],
      required: [true, "please provide name"],
      trim: true,
    },
    description: {
      type: String,
      maxLength: [500, "description cannot exceed 50 characters"],
      required: [true, "please provide description"],
      trim: true,
    },
    isReviewed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Idea", IdeaSchema);
