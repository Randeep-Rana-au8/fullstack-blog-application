import React, { useState, useEffect } from "react";

const LatestBlog = ({ data }) => {
  return (
    <div className="latestBlog">
      {data ? (
        <>
          {" "}
          <img style={{ width: "100%" }} src={data.thumbnail} alt="Latest blog" />
          <h1>{data.title}</h1>
          {/* <p>{data.description}</p> */}
          <p>{data.description.length > 400 ? data.description.slice(0, 400) + "..." : data.description}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
};

export default LatestBlog;
