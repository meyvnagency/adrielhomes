import React, { useEffect, useRef, useState } from "react";
import image1 from "./../assets/other/home_3.jpeg";
import image2 from "./../assets/other/home_4.jpeg";
import image3 from "./../assets/other/home_5.jpeg";
import image4 from "./../assets/other/about.jpg";
import image5 from "./../assets/lawn/2.png";
import videoBg from "./../assets/hero/about.mp4";

const images = [image1, image2, image3, image4, image5];

function About() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState("realty");
  const descriptionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const adjustCarouselHeight = () => {
      if (descriptionRef.current && carouselRef.current) {
        carouselRef.current.style.height = `${descriptionRef.current.offsetHeight}px`;
      }
    };

    adjustCarouselHeight();
    window.addEventListener("resize", adjustCarouselHeight);

    return () => {
      window.removeEventListener("resize", adjustCarouselHeight);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  return (
    <>
      <div className="about">
        <video autoPlay loop muted className="video-bg">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="grids">
            <div className="image grid" ref={carouselRef}>
              <div className="carousel">
                {images.map((img, index) => (
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    key={index}
                    className={index === activeImageIndex ? "active" : ""}
                  />
                ))}
              </div>
            </div>
            <div className="description grid" ref={descriptionRef}>
              <div>
                <div className="realty dropdown">
                  <button
                    className={activeDropdown === "realty" ? "active" : ""}
                    onClick={() => toggleDropdown("realty")}
                  >
                    Real Estate
                  </button>
                  <div
                    className={`content ${
                      activeDropdown === "realty" ? "active" : ""
                    }`}
                  >
                    <p>
                      Established in 2000, Adriel Homes began as a small
                      family-owned business focused on providing personalized
                      real estate services. Over the years, we have expanded our
                      operations, adapting to the evolving needs of our clients
                      and integrating advanced technology to streamline the
                      buying and selling process. Today, Adriel Homes is
                      renowned for its extensive property portfolio and its
                      commitment to excellence in customer service.
                    </p>
                    <ul>
                      <li>
                        <a href="">Property sales</a>
                      </li>
                      <li>
                        <a href="">Rental services</a>
                      </li>
                      <li>
                        <a href="">Property management</a>
                      </li>
                      <li>
                        <a href="">Real Estate consultancy</a>
                      </li>
                      <li>
                        <a href="">Mortgage assistance</a>
                      </li>
                      <li>
                        <a href="">Property development</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bed dropdown">
                  <button
                    className={activeDropdown === "bed" ? "active" : ""}
                    onClick={() => toggleDropdown("bed")}
                  >
                    Bed and Breakfast
                  </button>
                  <div
                    className={`content ${
                      activeDropdown === "bed" ? "active" : ""
                    }`}
                  >
                    <p>
                      Adriel Homes ventured into the Bed and Breakfast sector in
                      2010, transforming historic homes into charming
                      accommodations that offer guests a home-away-from-home
                      experience. With a focus on personalized service and
                      comfort, Adriel Homes’ Bed and Breakfasts have become
                      synonymous with cozy, welcoming stays. Each property is
                      carefully curated to provide a unique ambiance, blending
                      modern amenities with the charm of classic architecture.
                    </p>
                    <ul>
                      <li>
                        <a href="">Luxury suites</a>
                      </li>
                      <li>
                        <a href="">Gourmet breakfast</a>
                      </li>
                      <li>
                        <a href="">Event hosting</a>
                      </li>
                      <li>
                        <a href="">Guided tours</a>
                      </li>
                      <li>
                        <a href="">Wellness packages</a>
                      </li>
                      <li>
                        <a href="">Concierge services</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tourism dropdown">
                  <button
                    className={activeDropdown === "tourism" ? "active" : ""}
                    onClick={() => toggleDropdown("tourism")}
                  >
                    Tourism
                  </button>
                  <div
                    className={`content ${
                      activeDropdown === "tourism" ? "active" : ""
                    }`}
                  >
                    <p>
                      Adriel Homes expanded into the tourism industry in 2015,
                      capitalizing on the growing interest in authentic,
                      immersive travel experiences. We aim to showcase the
                      natural beauty and rich cultural heritage of our locations
                      through carefully curated tours and activities. Adriel
                      Homes has built a reputation for providing memorable
                      experiences that connect travelers with the heart and soul
                      of the region.
                    </p>
                    <ul>
                      <li>
                        <a href="">Guided city tours</a>
                      </li>
                      <li>
                        <a href="">Adventure travel</a>
                      </li>
                      <li>
                        <a href="">Cultural experience</a>
                      </li>
                      <li>
                        <a href="">Eco-Tourism</a>
                      </li>
                      <li>
                        <a href="">Wildlife safaris</a>
                      </li>
                      <li>
                        <a href="">Customized Travel packages</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="landscape dropdown">
                  <button
                    className={activeDropdown === "landscape" ? "active" : ""}
                    onClick={() => toggleDropdown("landscape")}
                  >
                    Landscaping
                  </button>
                  <div
                    className={`content ${
                      activeDropdown === "landscape" ? "active" : ""
                    }`}
                  >
                    <p>
                      Adriel Homes' landscaping division was launched in 2008,
                      driven by a passion for transforming outdoor spaces into
                      beautiful, functional environments. Our team of experts
                      combines innovative design with sustainable practices to
                      create landscapes that enhance the natural beauty of the
                      surroundings. Adriel Homes has established itself as a
                      leader in the landscaping industry, known for our creative
                      solutions and commitment to environmental stewardship.
                    </p>
                    <ul>
                      <li>
                        <a href="">Garden design</a>
                      </li>
                      <li>
                        <a href="">Hardscaping</a>
                      </li>
                      <li>
                        <a href="">Landscape maintenance</a>
                      </li>
                      <li>
                        <a href="">Irrigation systems</a>
                      </li>
                      <li>
                        <a href="">Seasonal planting</a>
                      </li>
                      <li>
                        <a href="">Landscape lighting</a>
                      </li>
                    </ul>
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

export default About;
