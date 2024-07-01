import React from "react";
import image1 from "./../assets/other/home_1.jpg";
import image2 from "./../assets/other/home_2.jpg";
import {
  MdBed,
  MdModeOfTravel,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { PiFlowerLotusThin } from "react-icons/pi";

function service() {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="grids">
            <div className="image grid">
              <img src={image2} alt="Background" className="back-image" />
              <img src={image1} alt="Foreground" className="front-image" />
            </div>
            <div className="description grid">
              <div>
                <h2>Our main services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quae, quia quibusdam quas quidem quibusdam quas qu
                </p>
                <div className="service">
                  <div className="icon">
                    <MdOutlineRealEstateAgent />
                  </div>
                  <div className="description">
                    <h3>Real Estate</h3>
                    <p>
                      We specialize in finding the perfect property for you,
                      offering an extensive selection of homes and professional
                      guidance throughout the buying process... <a>Read more</a>
                    </p>
                  </div>
                </div>
                <div className="service">
                  <div className="icon">
                    <MdBed />
                  </div>
                  <div className="description">
                    <h3>Bed & Breakfast</h3>
                    <p>
                      Our charming bed and breakfasts provide a cozy, home-like
                      atmosphere with personalized service and comfortable
                      accommodations... <a>Read more</a>
                    </p>
                  </div>
                </div>
                <div className="service">
                  <div className="icon">
                    <MdModeOfTravel />
                  </div>
                  <div className="description">
                    <h3>Tourism</h3>
                    <p>
                      Explore Rwanda with our guided tours that offer unique,
                      immersive experiences showcasing the country's natural
                      beauty and rich culture... <a>Read more</a>
                    </p>
                  </div>
                </div>
                <div className="service">
                  <div className="icon">
                    <PiFlowerLotusThin />
                  </div>
                  <div className="description">
                    <h3>Landscaping</h3>
                    <p>
                      Transform your outdoor spaces with our creative
                      landscaping solutions, featuring innovative designs and
                      professional maintenance services... <a>Read more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default service;
