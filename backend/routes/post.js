const Post = require("../model/posts.js");
const express = require("express");
const app = express();
const Joi = require("joi");
const requireLogin = require("../middelware/requireLogin");

app.post("/createpost", requireLogin, (req, res) => {
  const { title, body, imageUrl } = req.body;
  if (!title || !body) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }

  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    imageUrl,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/allpost", requireLogin, (req, res) => {
  Post.find()
    .populate("postedBy", "_id username")
    // .populate("comments.postedBy","_id name")
    .sort("-createdAt")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/mypost", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id username")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
