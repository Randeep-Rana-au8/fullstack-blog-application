const express = require('express');
const user = require('../model/user');
const router = express.Router();
const User = require('../model/user');

router.post("/signup", async (req, res) => {
    user = new User({
        email,
        password,
        role
    });       
    await user.save();
    res.send(user)
    
});
