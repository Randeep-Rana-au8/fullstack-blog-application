const Blog = require("../model/blogPost");
const express = require("express");
const app = express();
const Joi = require("joi");
const requireLogin = require('../middleware/requireLogin');
const router = require("./user/user");

app.get("/posts", async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
});

app.post("/addpost",requireLogin, async (req, res) => {
  // const { error } = validateBlog(req.body);
  const author = req.user

  // if (error) return res.status(400).send(error.details[0].message);
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    likes: req.body.likes ? req.body.likes : 0,
    comments: req.body.comments ? req.body.comments : 0,
    author,
    views: req.body.views ? req.body.views : 0,
    date: Date.now(),
    // _id: req.body._id,
    thumbnail: req.body.thumbnail ? req.body.thumbnail : req.body.imageUrl,
    category: req.body.category ? req.body.category : "Entertainment",
  });

  await blog.save();
  console.log(blog);
  res.send(blog);
});

function validateBlog(data) {
  const schema = {
    title: Joi.string().min(20).max(100).required(),
    description: Joi.string().min(50).max(1500).required(),
    date: Joi.date(),
    category: Joi.array().required(),
    views: Joi.number(),
    likes: Joi.number(),
    comments: Joi.array(),
    author: Joi.object().required(),
    _id: Joi.number(),
    thumbnail: Joi.string().required(),
  };

  return Joi.validate(data, schema);
}


router.put('/like',requireLogin,(req,res)=>{
  Blog.findByIdAndUpdate(req.body._id,{
      $push:{likes:req.user._id}
  },{
      new:true
  }).exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})

router.put('/editPost/:_id', requireLogin, async (req,res) => {
  let Id = req.params._id;
  const mypost = await Blog.findById(Id)
  console.log(mypost.title)
  const title = mypost.title
  const description = mypost.description
  Blog.updateOne(
      {_id: Id},
      {
          $set:{
              title:( req.body.title ? req.body.title : title ),
              description:( req.body.description ? req.body.description : description )
          }
      },(err,result) => {
          if(err) throw err;
          res.send(result);
      }
  )
}) 

router.put('/unlike',requireLogin,(req,res)=>{
  Blog.findByIdAndUpdate(req.body._id,{
      $pull:{likes:req.user._id}
  },{
      new:true
  }).exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})

module.exports = app;
