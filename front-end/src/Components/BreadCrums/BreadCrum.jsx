import React from "react";
import "./BreadCrum.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const BreadCrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <FontAwesomeIcon icon={faAngleRight} /> SHOP
      <FontAwesomeIcon icon={faAngleRight} /> {product.category}
      <FontAwesomeIcon icon={faAngleRight} /> {product.name}
    </div>
  );
};
export default BreadCrum;
