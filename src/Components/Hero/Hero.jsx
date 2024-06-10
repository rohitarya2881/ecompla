import React from 'react';
import hero_img from '../Assets/hero-img.jpg';
import hand_icon from '../Assets/hand-icon.png';
import arrow_icon from '../Assets/arrow-icon.png';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand icon" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
