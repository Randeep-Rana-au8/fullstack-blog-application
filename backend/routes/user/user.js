const express = require("express");
const router = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../model/user");
const Joi = require("joi");
const requireLogin = require("../../middleware/requireLogin");
const { JWT_SECRET } = require("../../keys/keys");

router.post("/RegisterUser", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({
        msg: "User already exists.",
        code: 400,
      });
    }
    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role ? req.body.role : "user",
      gender: {
        type: String,
        enum: ["male", "female"],
        default: "male",
      },
      profileImage: req.body.profileImage
        ? req.body.profileImage
        : "https://res.cloudinary.com/ranacloud/image/upload/v1613023122/user_ebuz08.png",
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    //Payload for the token
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, JWT_SECRET, { expiresIn: 100000 }, (err, token) => {
      res.status(200).json({
        token,
        code: 200,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erron in saving",
      code: 502,
    });
  }
});

function validateUser(data) {
  const schema = {
    username: Joi.string().min(3).max(18).required(),
    firstName: Joi.string().min(3).max(15).required(),
    lastName: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required(),
    role: Joi.string(),
  };

  return Joi.validate(data, schema);
}

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    //checking whether user exists
    if (!user) {
      return res.status(200).json({
        message: "User not exists",
        code: 404,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(200).json({
        message: "Incorrect password",
        code: 402,
      });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, JWT_SECRET, { expiresIn: 100000 }, (err, token) => {
      res.status(200).json({
        token,
        code: 200,
      });
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({
      message: "Erron in Login",
      code: 502,
    });
  }
});

router.get("/myProfile", requireLogin, (req, res) => {
  console.log(req.user);
  console.log("working");
  res.send(req.user);
});

// This is admin only route
router.get("/allusers", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
