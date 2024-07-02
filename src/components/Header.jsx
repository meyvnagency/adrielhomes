import React, { useState, useEffect } from "react";
import "./../styles/component.scss";
import logo from "./../assets/brand/favicon.jpg";
import axios from "axios";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaThermometerHalf, FaCalendarAlt, FaClock } from "react-icons/fa";
import {
  MdBed,
  MdOutlineRealEstateAgent,
  MdTravelExplore,
} from "react-icons/md";
import { PiFlowerLotusThin } from "react-icons/pi";

function Header() {
  const [weather, setWeather] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  // Fetch and update date and time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { year: "numeric", day: "numeric", month: "long" };
      setDate(now.toLocaleDateString(undefined, options));
      setTime(now.toLocaleTimeString());
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fetch weather information based on user's current location
  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const { data } = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: latitude,
              lon: longitude,
              units: "metric",
              appid: apiKey,
            },
          }
        );
        setWeather(`${data.name} ${Math.round(data.main.temp)}ºC`);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    // Function to get user's location using Geolocation API
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            console.error("Error getting location", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    // Call function to get user's location and fetch weather
    getLocation();
  }, [apiKey]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-logo">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="container">
          <div className="header-top">
            <div className="header-top-left">
              <ul>
                <li className="weather">
                  <FaThermometerHalf /> {weather}
                </li>
                <li className="date">
                  <FaCalendarAlt /> {date}
                </li>
                <li className="time">
                  <FaClock /> {time}
                </li>
              </ul>
              <ul>
                <li>
                  <a href="about">About Us</a>
                </li>
                <li>
                  <a href="">Useful information</a>
                </li>
              </ul>
            </div>
            <div className="header-top-right">
              <ul className="social">
                <li>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTiktok />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/250737078357/"
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="tel:250791206736" title="Call Us">
                    <FaPhoneAlt />
                  </a>
                </li>
                <li>
                  <a href="" title="Leave us mail">
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-left">
              <ul>
                <li>
                  <a href="real-estate">
                    <MdOutlineRealEstateAgent /> Real Estate
                  </a>
                </li>
                <li>
                  <a href="bed-and-breakfast">
                    <MdBed /> Bed and Breakfast
                  </a>
                </li>
                <li>
                  <a href="tourism">
                    <MdTravelExplore /> Tourism
                  </a>
                </li>
                <li>
                  <a href="landscaping">
                    <PiFlowerLotusThin /> Landscaping
                  </a>
                </li>
                <li>
                  <a href="book-us">Book us now</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
