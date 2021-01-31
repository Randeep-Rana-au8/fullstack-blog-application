import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Blog = () => {
  let [blog, setBlog] = useState("");
  const { id } = useParams();
  useEffect(async () => {
    const res = await axios.get(`https://myvicharbackend.herokuapp.com/blog/${id}`);
    console.log(res.data);
    setBlog(res.data);
  }, []);

  return (
    <div>
      {blog ? (
        <div>
          <img width="500px" src={blog.imageUrl} />
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Blog;
