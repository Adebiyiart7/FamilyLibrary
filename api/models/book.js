const mongoose = require("mongoose");

const addBookSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      min: 8,
      max: 255,
      trim: true,
      lowercase: true
    },
    title: {
      type: String,
      lowercase: true,
      required: true,
      min: 8,
      max: 255,
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    screenCount: {
      type: Number,
      default: 0,
      trim: true
    },
    readersCount: {
      type: Number,
      default: 0
    },
    averageRating: {
      type: Number,
      default: 0
    },
    ratingsCount: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 1000,
      lowercase: true
    },
    fullText: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", addBookSchema);
