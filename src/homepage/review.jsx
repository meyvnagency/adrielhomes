import React, { useState, useEffect } from "react";
import user1 from "./../assets/review/test-1.png";
import user2 from "./../assets/review/test-2.png";
import user3 from "./../assets/review/test-3.png";
import user4 from "./../assets/review/test-4.png";
import user5 from "./../assets/review/test-5.jpeg";
import bgimg from "./../assets/review/parallax_bg.jpg";

const reviews = [
  {
    id: 1,
    name: "Roberta",
    date: "3 Dec",
    image: user1,
    text: "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud.",
  },
  {
    id: 2,
    name: "John",
    date: "10 Jan",
    image: user2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Anna",
    date: "15 Feb",
    image: user3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "Mike",
    date: "20 Mar",
    image: user4,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 5,
    name: "Sophia",
    date: "25 Apr",
    image: user5,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="review-section"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <h2 className="title">What Clients Says</h2>
      <div className="review-container">
        <div className="review-card">
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="user-image"
          />
          <div className="review-content">
            <h3 className="user-name">{reviews[currentIndex].name}</h3>
            <p className="review-date">{reviews[currentIndex].date}</p>
            <p className="review-text">"{reviews[currentIndex].text}"</p>
          </div>
        </div>
        <div className="review-navigation">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`nav-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
