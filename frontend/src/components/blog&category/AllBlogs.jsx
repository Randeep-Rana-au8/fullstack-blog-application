import React from "react";
import "./AllBlog.css";

const AllBlogs = ({ data }) => {
  return (
    <div className="allBlogs">
      {data
        .slice(data.length - 6, data.length - 1)
        .reverse()
        .map((blog) => (
          <div key={blog.id} className="blog">
            <div className="blog-title" style={{ maxWidth: "240px" }}>
              <h4 style={{ margin: "0" }}>{blog.title.length > 55 ? blog.title.slice(0, 85) : blog.title}...</h4>
              <p style={{ fontSize: "11px" }}>
                {blog.author} {blog.date}
              </p>
            </div>
            <img height="100px" alt="Blog" src={blog.imageUrl} />
          </div>
        ))}
    </div>
  );
};

export default AllBlogs;
