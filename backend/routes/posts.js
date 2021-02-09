const Blog = require("../model/blogPost");
const express = require("express");
const app = express();
const Joi = require("joi");
const requireLogin = require('../middelware/requireLogin')


app.get("/posts", async (req, res) => {
  const blogs = await Blog.find().populate('username')
  const data = Blog.find().populate('username')
  console.log(data)
  res.send(blogs);
  // Blog.find()
  //   .populate("author")
    // .populate("comments.postedBy","_id name")
    // .sort('-createdAt')
    // .then((posts)=>{
    //     res.json({posts})
    // }).catch(err=>{
    //     console.log(err)
    // })
});

app.post("/addPost", requireLogin, async (req, res) => {
  const author = req.user;
  req.user.password = undefined

  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    author: author,
    date: Date.now(),
    category: req.body.category ? req.body.category : "Entertainment",
  });

  await blog.save();
  res.send(blog);

});




module.exports = app;
