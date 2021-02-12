import React, { useState } from "react";
import "./NewBlog.css";
import axios from "axios";
import { add_blog } from "../../../redux/actions/allActions";
import { connect } from "react-redux";

const NewBlog = ({ add_blog }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [category, setCategory] = useState(["Entertainment"]);
  console.log(category);
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "trxlukoh");
    const result = await axios.post("https://api.cloudinary.com/v1_1/ranacloud/image/upload", formData);
    console.log(result);
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

      <div>
        <label for="category">Choose a Category</label>
        <select value={category} onChange={(e) => setCategory([e.target.value])} id="category">
          <option value="History">History</option>
          <option value="Movies">Movies</option>
          <option value="Education">Education</option>
          <option value="Tech">Programming</option>
          <option value="Coding">Coding</option>
          <option value="AI">AI</option>
          <option value="Politics">Politics</option>
          <option value="Sports">Sports</option>
          <option value="Reactjs">Reactjs</option>
        </select>
      </div>

      <label for="AddImage">Add Image</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="Add Image" id="AddImage" />
      <input type="submit" className="button" />
    </form>
  );
};

export default connect(null, { add_blog })(NewBlog);
