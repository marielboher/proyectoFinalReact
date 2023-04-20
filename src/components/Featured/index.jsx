import React from "react";
import "./featured.css";
import CardFeatured from "../CardFeatured";
import { Link } from "react-router-dom";

const Featured = ({ productos }) => {
  let mostrar = productos.slice(0, 4);
  return (
    <>
      <div className="featured-section">
        <div className="container-cards">
          {mostrar.map((producto) => {
            return (
              <Link to={`/item/${producto.id}`} key={producto.id}>
                <CardFeatured imgSrc={producto.image} />
              </Link>
            );
          })}
        </div>

        <div className="details">
          <h4>EVERY DETAIL MATTER</h4>
          <h6>
            WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY
            ENVIRONMENT.
          </h6>
          <p>
            There are multiples of high quality pieces, with styles that
            transition from classic to contemporary. An exclusive selection of
            lampshades, vases, murals, pillows, paintings and many gifts to
            compose great projects. In order selection, a mix of basic style,
            stricter customization and more compact dimensions, composing
            sophisticated and exclusive environments.
          </p>
        </div>
        <div className="section-details"></div>
      </div>
    </>
  );
};

export default Featured;
