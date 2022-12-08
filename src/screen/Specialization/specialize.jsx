import React from "react";
import "./special.scss";
import Card from "../../components/Card/Card";
import Imgmenu from "../../components/context/Imgmenu";
import { CardData } from "../../components/context/Imgicon";

const specialization = ({ id }) => {
  return (
    <div className="sc-main" id={id}>
      <div className="sc-first" data-aos="fade-down-right" data-aos-duration="1000">
        <h1>
          <span > My </span>
          Specialization
        </h1>
        <div className="sc-ss">
          {Imgmenu.map((Special, i) => {
            return <img key={i} src={Special} alt="" className="sc-img" />;
          })}
        </div>
      </div>

      <div className="cd-row" data-aos="zoom-in-down" data-aos-duration="2000">
        {CardData.map((item, i) => {
          return <Card icon={item.icon} key={i} title={item.title} des={item.des}
         />
        })}
      </div>
    </div>
  );
};

export default specialization;
