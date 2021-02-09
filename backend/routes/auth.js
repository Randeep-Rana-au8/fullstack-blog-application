const express = require("express");
const router = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../model/user");
const Joi = require('joi');
const requireLogin = require('../middelware/requireLogin')
const { JWT_SECRET } = require('../keys/keys')

router.post("/signup", async (req, res) => {
  try {
    const {email, password} = req.body;

    // validating users data
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // finding user with same email
    let user = await User.findOne({email})
    if(user) {
    return res.status(200).json({
        msg: "User already exists.",
        code: 400
      })
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt)

    // creating new user data
    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role ? req.body.role : "user",
    });
    
    await user.save();
    
    jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: 100000}, (err, token) => {
        res.status(200).json({
            token,
            user,
            code: 200
        })
    }) 
  } catch (error) {
    console.error(error);
        res.status(500).json({
            message: "Erron in saving",
            code: 502
        })
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

router.post('/signin', async (req,res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    //checking whether user exists
    if(!user) {
        return res.status(200).json({
            message: "User not exists",
            code: 404
        });
    }

    // checking whether password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        return res.status(200).json({
            message: "Incorrect email or password",
            code: 402
        })
    }
    const payload = {
        user: {
            id: user.id
        }
    };
    jwt.sign(payload, JWT_SECRET, {expiresIn: 100000}, (err, token) => {
        res.status(200).json({
            token,
            user,
            code: 200
        })
    })
  } catch (error) {
    console.error(err);
        res.status(500).json({
            message: "Erron in Login",
            code: 502
        })
  }
})


router.get('/myProfile',requireLogin, (req,res) => {
  res.send(req.user)
})


router.get("/logout", requireLogin, (req, res)=>{
  User.findById(req.user._id).then((rUser)=>{
    rUser.online = false;
    rUser.save();
    });
  req.logout();
  res.send('logout ');
});

// This is admin only route
router.get('/allusers', async (req,res) => {
  const users = await User.find()
    res.send(users)
})

module.exports = router;
