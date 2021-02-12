import React from "react";
import "./WelcomePage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <section className="welcomeSection first">
        <div className="info">
          <h1>Explore New Things with Us</h1>
          <Button className="exploreButton button1">
            <Link className="Link" to="/homepage">
              <p className="navbar-item">Explore</p>
            </Link>
          </Button>
        </div>
        <div className="firstImage imageDiv">
          <img
            className="infoImage"
            src="https://cdn.pixabay.com/photo/2016/02/19/10/00/binoculars-1209011__480.jpg"
            alt="blog"
          />
        </div>
      </section>
      <section className="welcomeSection second">
        <div className="secondImage imageDiv">
          <img
            className="infoImage "
            src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372__480.jpg"
            alt="blog"
          />
        </div>
        <div className="info">
          <h1>Tech</h1>
          <h5 style={{ marginTop: "0" }}>
            Emerging technologies, technologies that are perceived as capable of changing the status quo. Hypothetical
            technology, technology that does not exist yet, but could exist in the future.
          </h5>
          <h5>
            Advances in digital technologies hold considerable potential to lift the trajectory of productivity and
            economic growth, and to create new and better jobs to replace old ones.
          </h5>

          <Button className="exploreButton button2">
            <Link className="Link" to="/homepage">
              <p className="navbar-item">Explore</p>
            </Link>
          </Button>
        </div>
      </section>
      <section className="welcomeSection third">
        <div className="info">
          <h1>History</h1>
          <h5 style={{ marginTop: 0 }}>
            History is the study of change over time, and it covers all aspects of human society. ... History is an
            intellectual discipline practiced by historians who try to make sense of the past.
          </h5>
          <h5>Because history is about change, nothing was ever “always” a certain way.</h5>
          <Button className="exploreButton button3">
            <Link className="Link" to="/homepage">
              <p className="navbar-item">Explore</p>
            </Link>
          </Button>
        </div>
        <div className="thirdImage imageDiv">
          <img
            className="infoImage"
            src="https://cdn.pixabay.com/photo/2018/02/25/21/34/bada-bagh-3181803__480.jpg"
            alt="blog"
          />
        </div>
      </section>
      <section className="welcomeSection forth">
        <div className="forthImage imageDiv">
          <img
            className="infoImage"
            src="https://cdn.pixabay.com/photo/2016/11/19/20/16/astronaut-1840936__480.jpg"
            alt="blog"
          />
        </div>
        <div className="info">
          <h1>Space</h1>
          <h5 style={{ marginTop: 0 }}>
            Space, also known as outer space, is the near-vacuum between celestial bodies. It is where everything (all
            of the planets, stars, galaxies and other objects) is found.
          </h5>
          <h5>
            On Earth, space begins at the Kármán line (100 km above sea level). This is where Earth's atmosphere is said
            to stop and outer space begins.
          </h5>
          <Button className="exploreButton button4">
            <Link className="Link" to="/homepage">
              <p className="navbar-item">Explore</p>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
