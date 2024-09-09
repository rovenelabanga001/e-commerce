import React from "react";
import "./Offers.css";
import exclusive_bg from "../Assets/exclusive_0ffers.png";

export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive </h1>
        <h1>Offers For You</h1>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_bg} alt="" />
      </div>
    </div>
  );
};
export default Offers;
