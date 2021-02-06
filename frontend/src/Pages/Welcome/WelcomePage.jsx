import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div>
      <section className="welcomeSection first">
        <div className="info">
          <h1>Explore New Things with Us</h1>
          <button className="exploreButton button1">Explore</button>
        </div>
        <div>
          <img
            className="infoImage"
            src="https://cdn.pixabay.com/photo/2016/02/19/10/00/binoculars-1209011__480.jpg"
            alt="blog"
          />
        </div>
      </section>
      <section className="welcomeSection second">
        <div>
          <img
            className="infoImage"
            src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372__480.jpg"
            alt="blog"
          />
        </div>
        <div className="info">
          <h1>Explore Tech Things with Us</h1>
          <button className="exploreButton button2">Explore</button>
        </div>
      </section>
      <section className="welcomeSection third">
        <div className="info">
          <h1>Explore New Things with Us</h1>
          <button className="exploreButton button3">Explore</button>
        </div>
        <div>
          <img
            className="infoImage"
            src="https://cdn.pixabay.com/photo/2018/02/25/21/34/bada-bagh-3181803__480.jpg"
            alt="blog"
          />
        </div>
      </section>
      <section className="welcomeSection forth">
        <div>
          <img
            className="infoImage"
            src="https://cdn.pixabay.com/photo/2016/11/19/20/16/astronaut-1840936__480.jpg"
            alt="blog"
          />
        </div>
        <div className="info">
          <h1>Explore Tech Things with Us</h1>
          <button className="exploreButton button4">Explore</button>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
