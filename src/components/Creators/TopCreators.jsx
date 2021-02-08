import React from "react";

const TopCreators = () => {
  return (
    <div style={{ marginLeft: "40px" }}>
      <div>
        <h3 style={{ marginTop: 0 }}>Top Creators</h3>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div className="user">
          <img alt="Top Creator" />
          <h6>Randeep Rana</h6>
        </div>
        <div className="user">
          <img alt="Top Creator" />
          <h6>Surya Thombre</h6>
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
