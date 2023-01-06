import React from "react";
import "./portfolio.scss";
import Tilt from "react-parallax-tilt";

const Portfolio = ({ id }) => {
  return (
    <>
      <div className="main" id={id}>
        <div className="landing">
          <Tilt>
            <div className="ld-p">
              <img
                src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1669962262/Ellipse_26_uqvd3c.png"
                className="logo"
                alt=""
              />

              <h1>
                <span>Hi,</span> I’m Fortune Bitos Jr.
              </h1>

              <p>Front-End Developer</p>
              <a href="https://github.com/Fortunebitos/resume/raw/main/Bitos-FortuneJr.-D.-Front-end-Dev%20(4).pdf">
              <button className="cv">Download Cv</button></a>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
