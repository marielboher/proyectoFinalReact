import React from "react";
import "./card.css";

const CardFeatured = ({ imgSrc, text, hover }) => {
  return (
    <div>
      <div className="card-des">
        <img src={imgSrc}></img>
        <div className="hover">
            <h4>{hover}</h4>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardFeatured;
