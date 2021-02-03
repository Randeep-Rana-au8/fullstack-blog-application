import React, { useState } from "react";
import "./NewBlog.css";
import axios from "axios";
import { add_blog } from "../../../redux/actions/allActions";
import { connect } from "react-redux";

const NewBlog = ({ add_blog }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "trxlukoh");
    const result = await axios.post("https://api.cloudinary.com/v1_1/ranacloud/image/upload", formData);
    console.log(result);
    const data = { title, imageUrl: result.data.url, description, author };
    add_blog(data);
  };
  return (
    <form className="form" onSubmit={handleClick}>
      <label for="title">Title</label>
      <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" />
      <label for="description">description</label>
      <input
        className="input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        id="description"
      />
      <label for="author">Author</label>
      <input className="input" value={author} onChange={(e) => setAuthor(e.target.value)} type="text" id="author" />
      <label for="AddImage">Add Image</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Add Image" id="AddImage" />
      <input type="submit" className="button" />
    </form>
  );
};

export default connect(null, { add_blog })(NewBlog);
