import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Blog = () => {
  let [blog, setBlog] = useState("");
  const { id } = useParams();
  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/blog/${id}`);
    console.log(res.data);
    setBlog(res.data);
  }, []);

  return <div>{blog ? blog.title : "Loading..."}</div>;
};

export default Blog;
