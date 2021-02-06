import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div>
      <section className="welcomeSection">
        <div className="info">
          <h1>Explore New Things with Us</h1>
          <button className="exploreButton">Explore</button>
        </div>
        <div>
          <img
            className="infoImage"
            src="https://cdn.pixabay.com/photo/2016/02/19/10/00/binoculars-1209011__480.jpg"
            alt="blog"
          />
        </div>
      </section>
      <section className="welcomeSection">
        <div className="info">Text</div>
        <img className="infoImage" src="" alt="blog" />
      </section>
      <section className="welcomeSection">
        <div className="info">Text</div>
        <img className="infoImage" src="" alt="blog" />
      </section>
    </div>
  );
};

export default WelcomePage;
