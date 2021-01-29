import React from "react";

const LatestBlog = ({ data }) => {
  return (
    <div className="latestBlog">
      <img style={{ width: "100%" }} src={data.thumbnail} alt="Latest blog" />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default LatestBlog;
