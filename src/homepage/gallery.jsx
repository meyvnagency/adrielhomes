import React, { useEffect, useState } from "react";
import { FaExpand, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "./../assets/bed/1.jpg";
import image2 from "./../assets/blog/post_1.jpeg";
import image3 from "./../assets/blog/post_2.jpeg";
import image4 from "./../assets/blog/post_3.jpg";
import image5 from "./../assets/blog/post_4.jpg";
import image6 from "./../assets/bed/2.jpg";
import image7 from "./../assets/estate/1.jpg";
import image8 from "./../assets/estate/2.jpg";
import image9 from "./../assets/bed/3.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

function Gallery() {
  const [current, setCurrent] = useState(1);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setCurrentIndex(null);
  };

  const showPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const showNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleImage = () => {
    const start = (current + images.length - 1) % images.length;
    const mid = current % images.length;
    const end = (current + 1) % images.length;
    return [images[start], images[mid], images[end]];
  };

  return (
    <div className="gallery">
      <div className="container">
        <div className="sec-title">
          <p>Preview our gallery</p>
          <h2>Our Gallery</h2>
        </div>
        <div className="images">
          {getVisibleImage().map((image, index) => (
            <div
              key={index}
              className={`image ${index === 1 ? "active" : ""}`}
              style={{ opacity: index === 1 ? 1 : 0.6 }}
              onClick={() => openModal(index)}
            >
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
      {currentImage && (
        <div className="modal">
          <FaTimes className="close-btn" onClick={closeModal} />
          <FaArrowLeft className="nav-btn left" onClick={showPrev} />
          <img src={currentImage} alt="Current" />
          <FaArrowRight className="nav-btn right" onClick={showNext} />
        </div>
      )}
    </div>
  );
}

export default Gallery;
