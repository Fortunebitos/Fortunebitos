import React from "react";
import "./trusted.scss";
import { TrustedData } from "../../components/context/Imgicon";

const Trusted = ({ id }) => {
  return (
    <>
      <div className="td-main" id={id}>
        <div className="td-title" data-aos="fade-down" data-aos-duration="1000">
          <span>
            <b>Trusted</b> Clients
          </span>
        </div>
        <div className="td-row">
          {TrustedData.map((item, i) => {
            return <img key={i} src={item.icon} des={item.des} alt="" className="td-img" />;
          })}

          
        </div>
      </div>
    </>
  );
};

export default Trusted;
