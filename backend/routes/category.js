const express = require("express");
const app = express();
const Blog = require("../model/blogPost");

app.get("/category/:name", async (req, res) => {
  const posts = await Blog.find({ category: req.params.name });
  res.send(posts);
});

module.exports = app;
