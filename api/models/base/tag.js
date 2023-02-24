const mongoose = require("mongoose");

const tagSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max: 255,
      lowercase: true
    },
    numberOfBooks: {
      type: Number,
      default: 0
    },
    followersCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tag", tagSchema);
