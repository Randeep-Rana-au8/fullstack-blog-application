import React from "react";

const AllBlogs = ({ data }) => {
  return (
    <div className="allBlogs">
      {data
        .slice(data.length - 6, data.length - 1)
        .reverse()
        .map((blog) => (
          <div key={blog.id} className="blog">
            <h5>{blog.title}</h5>
            <img height="100px" src={blog.imageUrl} />
          </div>
        ))}
    </div>
  );
};

export default AllBlogs;
