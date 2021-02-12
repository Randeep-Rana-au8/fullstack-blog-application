import axios from "axios";
import React, { useEffect, useState } from "react";
import "./RelatedPost.css";
import { Link } from "react-router-dom";

const RelatedPosts = ({ name, title }) => {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const res = await axios.get(`http://myvicharbackend.herokuapp.com/api/category/${name}`);
    const data = res.data.filter((post) => post.title != title);
    setPosts(data);
  }, [title]);
  return (
    <div className="relatedPostContainer">
      {posts.map((post) => (
        <div className="relatedPost">
          <img src={post.imageUrl ? post.imageUrl : post.thumbnail} alt="post" />
          <Link className="Link" to={`/blog/${post._id}`}>
            <h4>{post.title}</h4>
          </Link>
          <p>{post.author.name ? post.author.name : post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default RelatedPosts;
