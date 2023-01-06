import React from "react";
import "./about.scss";


const About = ({ id }) => {
  return (
    <>
      <div className="a-main" id={id}>
        <div className="a-row" data-aos="zoom-in-left">
          <img
            src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1669878994/picture_about_me_ljcrv5.png"
            alt=""
            className="img-abt"
          ></img>

          <div className="a-column" data-aos="zoom-in-right">
            <span className="a-bt" >
              About <b>Me</b>
            </span>

            <p>
              I am Fort Front-End Developer with experience <br /> in building a
              responsive web design inhance with
              <br /> HTML, CSS , JavaScript and React JS, Sass,
              <br /> libraries and framework, with have knowledge in
              <br /> UI design using figma.
            </p>

            <p className="a-imp">
              I always improve my skills and challenge myself
              <br /> in coding and also in design.
            </p>
            <div className="b-column" >
              <span className="b-bt">
                About <b>My Goals</b>
              </span>

              <p>
                I see myself in the future working in a well known
                <br />
                successfull company that will help me to gain <br /> more
                experience and obtain knowledge not only <br />
                in programming but also as a professional in the <br /> field of
                IT industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
