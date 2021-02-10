import React, { useState } from "react";
import "./addposts.css";
import axios from "axios";
import { add_blog } from "../../../redux/actions/allActions";
import { connect } from "react-redux";

const NewBlog = ({ add_blog }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState(["Entertainment"]);
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "trxlukoh");
    const result = await axios.post("https://api.cloudinary.com/v1_1/ranacloud/image/upload", formData);
    const data = { title, body, imageUrl: result.data.url, body, category };
    add_blog(data);
  };
  return (
    <form className="form" onSubmit={handleClick}>
      <label for="title">Title</label>
      <input
        className="input"
        value={title}
        maxLength="100"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="title"
      />
      <label for="body">body</label>
      <textarea
        className="textArea"
        rows="6"
        cols="50"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        id="body"
      />
      <label for="AddImage">Add Image</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Add Image" id="AddImage" />
      <input type="submit" className="button" />
    </form>
  );
};

export default connect(null, { add_blog })(NewBlog);
