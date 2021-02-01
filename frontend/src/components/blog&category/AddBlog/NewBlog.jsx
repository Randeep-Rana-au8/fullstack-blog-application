import React from "react";
import "./NewBlog.css";

const NewBlog = () => {
  return (
    <form className="form">
      <label for="title">Title</label>
      <input className="input" type="text" id="title" />
      <label for="description">description</label>
      <input className="input" type="text" id="description" />
      <label for="AddImage">Add Image</label>
      <input type="file" placeholder="Add Image" id="AddImage" />
      <input type="submit" className="button" />
    </form>
  );
};

export default NewBlog;
