import React from "react";
import Hero from "./../homepage/hero";
import Faq from "./../homepage/faq";
import About from "./../homepage/about";
import Offer from "./../homepage/offer";
import Review from "./../homepage/review";
import Gallery from "./../homepage/gallery";
import Service from "./../homepage/service";
import "./../styles/home.scss";

function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <Service />
        <Offer />
        <About />
        <Review />
        <Gallery/>
        <Faq />
      </div>
    </>
  );
}

export default Home;
