const mongoose = require("mongoose");

const addBookSchema = mongoose.Schema(
  {
    author: {
      type: String,
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
    genre: {
      type: String,
      required: true,
      min: 3,
      max: 225,
      enum: [
        "Romance",
        "Mystery",
        "Thriller",
        "Horror",
        "Fiction",
        "Non-Fiction",
        "Science Fiction",
        "Fantasy",
        "Historical Fiction",
        "Crime",
        "Adventure",
        "Biography",
        "Autobiography",
        "Memoir",
        "Self-help",
        "Travel",
        "Comedy",
        "Drama",
        "Action",
        "Satire",
        "Poetry",
        "Children's literature",
        "Young adult literature",
      ]
    },
    fullText: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", addBookSchema);
