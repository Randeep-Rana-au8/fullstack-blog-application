import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LatestBlog = ({ data }) => {
  return (
    <div className="latestBlog">
      {data ? (
        <>
          {" "}
          <Link className="Link" to={`/blog/${data._id}`}>
            <img style={{ width: "100%" }} src={data.thumbnail} alt="Latest blog" />
          </Link>
          <Link className="Link" to={`/blog/${data._id}`}>
            <h1>{data.title.length > 55 ? data.title.slice(0, 85) : data.title}...</h1>
          </Link>
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
