const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    // likes:[{type:ObjectId,ref:"User"}],
    // comments:[{
    //     text:String,
    //     postedBy:{type:ObjectId,ref:"User"}
    // }],
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    category: {
      type: Array,
      default: ["Entertainment"],
    },
  },
  { timestamps: true }
);

// mongoose.model("Post",postSchema)
module.exports = mongoose.model("Post", postSchema);
