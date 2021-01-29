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
            <h5 className="blog-title" style={{ marginTop: "0", maxWidth: "240px" }}>
              {blog.title}{" "}
            </h5>
            <img height="100px" alt="Blog" src={blog.imageUrl} />
          </div>
        ))}
    </div>
  );
};

export default AllBlogs;
