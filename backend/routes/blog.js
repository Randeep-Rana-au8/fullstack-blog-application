const express = require("express");
const router = express();
const Blog = require("../model/blogPost");
const requireLogin = require('../middleware/requireLogin')

router.get("/:id", async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  if (!blog) {
    return res.send(404).send("No Blog is there for this id");
  }
  res.send(blog);
});

router.delete('/deletepost/:id',requireLogin,(req,res)=>{
  Blog.findOne({_id:req.params.id})
  .populate("author","id")
  .exec((err,post)=>{
      if(err || !post){
          return res.status(422).json({error:err})
      }
      if(post.author.id.toString() === req.user.id.toString()){
            post.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
      }
  })
})


module.exports = router;
