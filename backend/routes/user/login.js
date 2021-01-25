const express = require("express");
const router = express();
const User = require("../../model/user");
const Joi = require("joi");

router.post("/login", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) return res.status(400).send("Invalid email or password!!");
    const validPassword = user.password === req.body.password;
    if (!validPassword)
      return res.status(400).send("Invalid email or password!!");

    res.send("Login success " + user);
  } catch (err) {
    console.log(err.message);
  }
});

function validateUser(data) {
  const schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required(),
  };

  return Joi.validate(data, schema);
}

module.exports = router;
