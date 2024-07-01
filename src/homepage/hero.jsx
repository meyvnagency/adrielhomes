import React from "react";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import videoBg from "./../assets/hero/videobg.mp4"; // Ensure this path is correct

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted className="video-bg">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="location">
          <div className="icon">
            <div className="data">
              <p>Explore Rwanda</p>
              <span>Looking for Real Estate, <br /> Bed and Breakfast, Tourism, <br/> and Landscaping
              </span>
            </div>
            <FaLocationDot />
          </div>
        </div>
        <div className="hero-text">
          <h1>come and say</h1>
          <span>G'day</span>
          <p>to the best place in the world</p>
          <div className="hero-btn">
            <a href="#" className="btn learn-more">
              Learn More
            </a>
            <a href="#" className="btn find-btn">
              Find your own adventure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
