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
            <h4 style={{ marginTop: "12px" }}>{data.title.length > 55 ? data.title.slice(0, 85) : data.title}...</h4>
          </Link>
          {/* <p>{data.body}</p> */}
          <p>{data.body.length > 400 ? data.body.slice(0, 400) + "..." : data.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
};

export default LatestBlog;
