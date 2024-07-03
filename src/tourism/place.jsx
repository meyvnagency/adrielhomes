import React, { useState, useEffect } from "react";
import akagera from "./../assets/destination/akagera.jpg";
import gishwati from "./../assets/destination/gishwati.jpg";
import huye from "./../assets/destination/huye.jpg";
import karongi from "./../assets/destination/karongi.jpg";
import kibeho from "./../assets/destination/kibeho.jpg";
import kigali from "./../assets/destination/kigali.jpg";
import kivu from "./../assets/destination/kivu.jpg";
import musanze from "./../assets/destination/musanze.jpg";
import nyanza from "./../assets/destination/nyanza.jpg";
import nyungwe from "./../assets/destination/nyungwe.jpg";
import rubavu from "./../assets/destination/rubavu.jpg";
import rusizi from "./../assets/destination/rusizi.jpg";
import volcano from "./../assets/destination/volcano.jpg";

const places = [
  {
    category: "City",
    name: "Kigali",
    description:
      "The capital city is pleasantly low key yet dynamic and progressive. It's green, clean and safe with meaningful culture and remarkable drive.",
    image: kigali,
  },
  {
    category: "National Park",
    name: "Gishwati Mukura National Park",
    description:
      "Rwanda's fourth National Park, Gishwati Mukura is made up of two separate forests - the larger Gishwati and small Mukura. It is home to chimpanzees, golden, blue and L'Hoest's monkeys as well as a host of birds and smaller animals.",
    image: gishwati,
  },
  {
    category: "Town",
    name: "Huye",
    description:
      "Peaceful and compact, Huye was founded in the early colonial era. Today is a centre of academia, as well as housing the Ethnographic Museum.",
    image: huye,
  },
  {
    category: "National Park",
    name: "Nyungwe National Park",
    description:
      "One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. The mountainous region is teaming with wildlife, including a small population of chimpanzees as well as 12 other species of primate.",
    image: nyungwe,
  },
  {
    category: "Town",
    name: "Rusizi",
    description:
      "A small town on the border with the Democratic Republic of the Congo and the closest town to Nyungwe National Park. Budget accommodation here will appeal to self-drive visitors to the National Park.",
    image: rusizi,
  },
  {
    category: "Town",
    name: "Nyanza",
    description:
      "Home to the King's Palace - a reconstruction of the traditional royal residence, a beautifully-crafted thatched dwelling shaped like a beehive.",
    image: nyanza,
  },
  {
    category: "City",
    name: "Musanze",
    description:
      "Close to the Volcanoes National Park, Musanze is a hassle-free and buzzing city, with plenty of choice for eating out, ATMs to withdraw cash, vibrant nightlife, markets and artisanal trades.",
    image: musanze,
  },
  {
    category: "Lake",
    name: "Lake Kivu",
    description:
      "Part of Africa’s Great Rift Valley, Lake Kivu is dotted with islands and inlets along its shoreline, with charming beach resorts, spectacular vistas and plenty of opportunities for hiking and cycling.",
    image: kivu,
  },
  {
    category: "National Park",
    name: "Akagera National Park",
    description:
      "The relatively warm and low-lying plains of Akagera comprise savannah, woodland, wetland and a dozen lakes. In partnership with African Parks, we have reintroduced lions and rhinos, meaning once again visitors can hope to see the Big Five on safari drives.",
    image: akagera,
  },
  {
    category: "Lake",
    name: "Karongi",
    description:
      "A popular beach retreat on the shores of Lake Kivu with majestic vistas, a tranquil atmosphere and easy access from Kigali.",
    image: karongi,
  },
  {
    category: "Town",
    name: "Rubavu",
    description:
      "A waterfront town on the shores of Lake Kivu, with red sandy beaches, warm clean water and an easygoing tropical character.",
    image: rubavu,
  },
  {
    category: "National Park",
    name: "Volcanoes National Park",
    description:
      "“In the heart of Central Africa, so high up that you shiver more than you sweat,” wrote the eminent primatologist Dian Fossey, “are great, old volcanoes towering almost 15,000 feet, and nearly covered with rich, green rainforest - the Virungas.”",
    image: volcano,
  },
  {
    category: "City",
    name: "Kibeho",
    description:
      "Kibeho Parish has been a global pilgrimage destination for Roman Catholics since the Virgin Mary appeared on 28 November 1981.",
    image: kibeho,
  },
];

const categories = ["All", "City", "National Park", "Town", "Lake"];

function Place() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredPlaces.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const filteredPlaces =
    activeCategory === "All"
      ? places
      : places.filter((place) => place.category === activeCategory);

  return (
    <div className="place-container">
      <div className="container">
        <div className="sec-title">
          <h2>Places to visit</h2>
        </div>
        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="carousel">
          <div className="card">
            <div className="thumbnail">
              <img
                src={filteredPlaces[currentIndex].image}
                alt={filteredPlaces[currentIndex].name}
              />
            </div>
            <div className="card-text">
              <h3>{filteredPlaces[currentIndex].name}</h3>
              <p>{filteredPlaces[currentIndex].description}</p>
            </div>
          </div>
          <div className="indicators">
            {filteredPlaces.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? "active" : ""}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
