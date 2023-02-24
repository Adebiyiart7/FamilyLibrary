const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    max: 255,
  },
  numberOfBooks: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
}
)

module.exports = mongoose.model("Tag", tagSchema);