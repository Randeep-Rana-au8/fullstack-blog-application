const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 10,
    max: 50,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    min: 30,
    max: 1500,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  author: {
    type: String,
    ref: "User"
  },
  category: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
  // thumbnail: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("Blog", blogSchema);
