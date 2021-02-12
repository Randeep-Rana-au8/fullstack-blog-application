import React from "react";
import "./TopCreators.css";

const TopCreators = () => {
  return (
    <div style={{ marginLeft: "40px" }}>
      <div>
        <h3 style={{ marginTop: 0, marginLeft: "20px" }}>Top Creators</h3>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div className="topCreator">
          <img
            className="topCreatorImage"
            src="https://res.cloudinary.com/ranacloud/image/upload/v1613023122/user_ebuz08.png"
            alt="Top Creator"
          />
          <h6>Randeep Rana</h6>
        </div>
        <div className="topCreator">
          <img
            className="topCreatorImage"
            src="https://res.cloudinary.com/ranacloud/image/upload/v1613023122/user_ebuz08.png"
            alt="Top Creator"
          />
          <h6>Surya Thombre</h6>
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
