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
  const [category, setCategory] = useState(["Entertainment"]);
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "trxlukoh");
    const headers = {
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    const result = await axios.post("http://localhost:3001/api/addpost",headers, formData);
    console.log(result)
    const data = { title, thumbnail: result.data.url, description, category };
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
      <label for="description">description</label>
      <textarea
        className="textArea"
        rows="6"
        cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        id="description"
      />
      <label for="author">Author</label>
      <input
        className="input"
        value={author.name}
        onChange={(e) => setAuthor({ name: e.target.value })}
        type="text"
        id="author"
      />
      <label for="AddImage">Add Image</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Add Image" id="AddImage" />
      <input type="submit" className="button" />
    </form>
  );
};

export default connect(null, { add_blog })(NewBlog);
