import React from "react";
import { Link } from "react-router-dom";
import "./NewIn.css";

const NewIn = ({
  text,
  title,
  sectionClass,
  bodyClass,
  imgClass,
  imgSrc,
  imgLeft,
}) => {
  return imgLeft ? (
    <div className={sectionClass}>
      <div className="marco-imagen">
        <img src={imgSrc} className={imgClass} />
      </div>
      <div className={bodyClass}>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to="/category/vases">
          <button className="cta">
            <span>Shop now</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className={sectionClass}>
      <div className={bodyClass}>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to="/category/textile">
        <button className="cta">
            <span>Shop now</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </div>
      <div className="marco-imagen">
        <img src={imgSrc} className={imgClass} />
      </div>
    </div>
  );
};

export default NewIn;
