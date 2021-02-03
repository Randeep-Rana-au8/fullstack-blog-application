import React from "react";
import { Link } from "react-router-dom";
import "./RestBlogs.css";

const RestBlogs = ({ data }) => {
  console.log(data);
  return (
    <div className="RestBlogs">
      {data
        .slice(0, data.length - 6)
        .reverse()
        .map((blog) => (
          <div key={blog._id} className="blog">
            <div className="blog-title" style={{ maxWidth: "75%" }}>
              <Link className="Link" to={`/blog/${blog._id}`}>
                <h2 style={{ margin: "0" }}>{blog.title.length > 55 ? blog.title.slice(0, 85) : blog.title}...</h2>
              </Link>
              <p className="description">
                {blog.description.length > 400 ? blog.description.slice(0, 400) + "..." : blog.description}
              </p>

              <p style={{ fontSize: "11px" }}>
                <span>{blog.author.name ? blog.author.name : blog.author}</span> <span>{blog.date}</span>
              </p>
            </div>
            <Link className="Link" to={`/blog/${blog._id}`}>
              <img height="180px" alt="Blog" src={blog.imageUrl} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default RestBlogs;
