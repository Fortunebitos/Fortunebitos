import React from "react";
import "./Carding.scss";

const Card = ({ icon, title, des}) => {
  return (
    <>
      <div className="card" >
        <img src={icon} className="cd-img" />
        <span>{title}</span>
        <p>{des}</p>
      </div>
    </>
  );
};

export default Card;
