const express = require("express");
const router = express();
const Blog = require("../model/blogPost");

router.get("/:id", async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  if (!blog) {
    return res.send(404).send("No Blog is there for this id");
  }
  res.send(blog);
});

module.exports = router;
