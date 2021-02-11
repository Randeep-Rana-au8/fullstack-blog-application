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
  imageUrl: {
    type: String,
    default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABMlBMVEVPkv/////50qAlJUYwa//2vY5Pk/9Rlv8kIT9LkP8xSYP4zJvzsY1Hjv/81aItaf/MrYpCjP/5+//M3v/v9f/f6//1+f8ADkAhIkWsyv8pZ/9Cgv9em/+XvP96q//W5P+ixP8ybv/98uiGtP9oov8bHkM7ef+30//p8P+1zv+Ouf90qP/C2P/Swb4eY//du5RumfDjuJmrtNFAf/83c/9nj/9KhusqNGAjHTghFi5LiO5BcMXqxposK0pEPlK9oYVlWF6eh3mrkXv1upLpzKr3yaMsO2s2U5Q7YKt9bGgAADpgUFqphXTHmn6NgpWlp8uSotrStKlWTVnDsLL9v4aGc2wRF0KJoOC9usiXrNqGp+Dbx7PEvcGLqf+ctP/51794m/8/arx7ouudr9X+69r63LbpmIWVAAAR5UlEQVR4nNWd+2PathbHTR52nRSIATPejwEJJIy0DaS9CXl3TdLc3W5ZQ9dtpOlj//+/cCUbg7ElWdaRQ/f9qQ1G6OOjo3Mky5ISi1apVCrbTm/ly9uVnWZJ0xRF0bRSc6eyXc5vpc0s+jziGiiRlZzNtM10vrFTMgwjjqQrbulxPR5Hn5R2Gvm02c5kI6tHNIRZs9qtVUq6EdfnwfzS9bihlyq1btWMhjICQjPdKe9oyG4BbG4he2o75U7alF8d2YRmp4xsFw+yHNGacWTLckc2pFRCM99oaoHtkkmpa81GXiqkPMJsp1JSQXgOpFqqdOT5pCzCasOQQDejNBpVSTWTQZhqbzUNeXgTSKO51ZYRK+GE2WqtJJ3PZizVqvDWCiXMpMtamLAQTnGtnM4slDDbbUTIZzM2ujA7ggi7jVIUzXNeeqnRXRBhtaJFz2cxahVAxypMmNmWGB0CGfVtYXcUJMx0IvY/r+JaR5BRiDCb3nlcPotxJy3U5YgQmrVHcsB56VpNJGENT5jaaj",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
