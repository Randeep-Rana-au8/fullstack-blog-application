import React from "react";
import { Link } from "react-router-dom";
import "./AllBlog.css";

const AllBlogs = ({ data }) => {
  return (
    <div className="allBlogs">
      {data
        .slice(data.length - 6, data.length - 1)
        .reverse()
        .map((blog) => (
          <div key={blog._id} className="blog">
            <div className="blog-title" style={{ maxWidth: "240px" }}>
              <Link className="Link" to={`/blog/${blog._id}`}>
                <h4 style={{ margin: "0" }}>{blog.title.length > 55 ? blog.title.slice(0, 85) : blog.title}...</h4>
              </Link>
              <p style={{ fontSize: "11px" }}>
                {blog.author.name} {blog.date}
              </p>
            </div>
            <Link className="Link" to={`/blog/${blog._id}`}>
              <img height="100px" alt="Blog" src={blog.thumbnail ? blog.thumbnail : blog.imageUrl} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default AllBlogs;
