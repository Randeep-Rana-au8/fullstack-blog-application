const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    min: 3,
    max: 15,
  },
  lastName: {
    type: String,
    trim: true,
    min: 3,
    max: 15,
  },
  username: {
    type: String,
    trim: true,
    min: 3,
    max: 18,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minimum: 5,
    maximum: 20,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  profileImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
