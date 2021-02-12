import React, { useState } from "react";
import Category from "../blog&category/category/Category";
import "./EditProfile.css";

const EditProfile = ({ post, cancel }) => {
  const [title, setTitle] = useState(post.title);
  const [imageUrl, setimageUrl] = useState(post.imageUrl);
  const [description, setDescription] = useState(post.description);
  const [Category, setCategory] = useState(post.Category);
  const handleCancel = () => {
    cancel(false);
  };
  return (
    <div className="edit">
      <h1>Edit post</h1>
      <br />
      <div className="labelInput">
        <label for="title">title</label>
        <input type="text" id="username" onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
      <div className="labelInput">
        <label for="description">description</label>
        <input type="textArea" rows="6"
        cols="50" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
        {/* <textarea
        className="textArea"
        rows="6"
        cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        id="description"
      /> */}
      </div>
      {/* <div className="labelInput">
        <label for="imageUrl"></label>
        <input type="text" id="imageUrl" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      </div> */}
      <div className="Category">
        <label for="category">category</label>
        <input type="text" id="category" value={Category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <br />
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditProfile;
