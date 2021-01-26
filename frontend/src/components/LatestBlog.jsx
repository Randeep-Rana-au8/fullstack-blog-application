import React from "react";

const LatestBlog = ({ data }) => {
  return (
    <div className="latestBlog">
      <img height="120px" src={data.imageUrl} alt="Latest blog image" />
      <h1>Last blog {data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default LatestBlog;
