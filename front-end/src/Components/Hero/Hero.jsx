import React from "react";
import "./Hero.css";
import hand_wave from "../Assets/Images/hand_wave.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import hero_image from "../Assets/Images/hero_background.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_wave} alt="" />
          </div>
          <p>Devices</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
export default Hero;
