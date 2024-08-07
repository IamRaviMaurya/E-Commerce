import React from "react";
import "./Hero.css";
import hand_icon from "../Assest/hand_icon.png";
import arrow_icon from "../Assest/arrow.png";
import hero_img from "../Assest/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>

      </div>
      <div className="hero-latest-button">
        <div>Latest Collections</div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
