import React from "react";

import "./../styles/tourism.scss";

import Hero from "./../tourism/hero";
import About from "./../tourism/experience";
import Service from "./../tourism/unique";
import Place from "./../tourism/place";
import Thing from "./../tourism/thing";
import Map from "./../tourism/map";
import Book from "./../tourism/book";
import Instagram from "./../tourism/instagram";

function Tourism() {
  return (
    <>
      <div className="tourism">
        <Hero />
        <About />
        <Service />
        <Place />
        <Thing />
        <Map />
        <Book />
        <Instagram />
      </div>
    </>
  );
}

export default Tourism;
