import React, { useState } from "react";
import {
  FaRegHeart,
  FaMountain,
  FaUtensils,
  FaRegSmileBeam,
  FaStar,
  FaRegCalendarCheck,
  FaArrowRight,
} from "react-icons/fa";
import { MdMuseum } from "react-icons/md";
import { IoLeaf } from "react-icons/io5";
import culture from "./../assets/tour/cultural.jpg";
import adventure from "./../assets/tour/adventure.jpg";
import nature from "./../assets/tour/nature.jpg";
import gastronomy from "./../assets/tour/gastronomy.jpg";
import experiental from "./../assets/tour/experiental.jpg";
import entertainment from "./../assets/tour/entertainment.jpg";
import exclusive from "./../assets/tour/exclusive.jpg";
import blog0 from "./../assets/tour/1.jpeg";
import blog1 from "./../assets/tour/2.jpeg";
import blog2 from "./../assets/tour/3.jpg";
import blog3 from "./../assets/tour/4.jpg";
import blog4 from "./../assets/blog/post_1.jpeg";
import blog5 from "./../assets/blog/post_2.jpeg";
import blog6 from "./../assets/blog/post_3.jpg";
import blog7 from "./../assets/blog/post_4.jpg";
import blog8 from "./../assets/blog/post_5.jpg";
import blog9 from "./../assets/other/home_1.jpg";

const categories = {
  "Cultural History": {
    title: "Cultural History",
    icon: <MdMuseum />,
    description:
      "As the owner of AdrielHomes, we believe that exploring the cultural history of Peru is an enriching experience...",
    heroImage: culture,
    blogs: [
      {
        title: "City tour in Cusco’s historic center",
        description: "Visit the magical sights of the imperial city...",
        fullDescription:
          "Visit the magical sights of the imperial city and discover its rich history, stunning architecture, and vibrant culture... A true privilege!",
        image: blog0,
      },
      {
        title: "Lima city tour + museums",
        description: "Lima’s museums are a window into the past...",
        fullDescription:
          "Lima’s museums are a window into the past, offering visitors a glimpse of Peru’s rich history and cultural heritage...",
        image: blog1,
      },
      {
        title: "The Moche Route tour",
        description: "Where ancestral knowledge seems boundless...",
        fullDescription:
          "Where ancestral knowledge seems boundless! Explore ancient ruins, learn about traditional customs, and immerse yourself in the history of the Moche civilization...",
        image: blog2,
      },
    ],
  },
  Adventure: {
    title: "Adventure",
    icon: <FaMountain />,
    description:
      "For the adventurous spirit, AdrielHomes offers thrilling experiences...",
    heroImage: adventure,
    blogs: [
      {
        title: "Mountain Biking in the Andes",
        description: "An exhilarating experience in the highlands...",
        fullDescription:
          "An exhilarating experience in the highlands! Mountain biking in the Andes offers breathtaking views and challenging trails for all levels...",
        image: blog3,
      },
      {
        title: "Amazon Rainforest Expedition",
        description: "Discover the biodiversity of the Amazon...",
        fullDescription:
          "Discover the biodiversity of the Amazon with our guided expeditions. Explore dense jungles, encounter exotic wildlife, and learn about the unique ecosystem...",
        image: blog4,
      },
      {
        title: "Sandboarding in Huacachina",
        description: "Slide down the towering sand dunes...",
        fullDescription:
          "Slide down the towering sand dunes of Huacachina and experience the thrill of sandboarding in one of the most stunning desert oases...",
        image: blog5,
      },
    ],
  },
  Nature: {
    title: "Nature",
    icon: <IoLeaf />,
    description:
      "AdrielHomes invites you to immerse yourself in the natural beauty of Peru...",
    heroImage: nature,
    blogs: [
      {
        title: "Exploring the Sacred Valley",
        description: "A journey through lush landscapes...",
        fullDescription:
          "A journey through lush landscapes, ancient ruins, and vibrant local markets. The Sacred Valley is a haven for nature lovers...",
        image: blog6,
      },
      {
        title: "Bird Watching in Manu National Park",
        description: "Observe rare and exotic bird species...",
        fullDescription:
          "Observe rare and exotic bird species in their natural habitat. Manu National Park is a bird watcher’s paradise with diverse avian life...",
        image: blog7,
      },
      {
        title: "Hiking the Inca Trail",
        description: "A legendary trek through the Andes...",
        fullDescription:
          "A legendary trek through the Andes leading to the iconic Machu Picchu. Experience stunning views and ancient Inca history...",
        image: blog8,
      },
    ],
  },
  Gastronomy: {
    title: "Gastronomy",
    icon: <FaUtensils />,
    description:
      "Savor the flavors of Peru with AdrielHomes’ gastronomic tours...",
    heroImage: gastronomy,
    blogs: [
      {
        title: "Peruvian Cooking Classes",
        description: "Learn to prepare traditional dishes...",
        fullDescription:
          "Learn to prepare traditional dishes from expert chefs. Peruvian cooking classes offer hands-on experience with authentic recipes...",
        image: blog9,
      },
      {
        title: "Wine Tasting in Ica",
        description: "Sample fine wines in beautiful vineyards...",
        fullDescription:
          "Sample fine wines in beautiful vineyards. Ica is renowned for its wine production and offers a delightful tasting experience...",
        image: blog4,
      },
      {
        title: "Street Food Tour in Lima",
        description: "Discover the best street food...",
        fullDescription:
          "Discover the best street food Lima has to offer. From ceviche to anticuchos, this tour is a culinary adventure...",
        image: blog5,
      },
    ],
  },
  Experiential: {
    title: "Experiential",
    icon: <FaRegSmileBeam />,
    description:
      "Engage with the local culture and community with AdrielHomes...",
    heroImage: experiental,
    blogs: [
      {
        title: "Homestay in a Quechua Village",
        description: "Experience life with local families...",
        fullDescription:
          "Experience life with local families in a Quechua village. Participate in daily activities and learn about traditional customs...",
        image: blog0,
      },
      {
        title: "Weaving Workshop in Chinchero",
        description: "Learn the art of traditional weaving...",
        fullDescription:
          "Learn the art of traditional weaving from skilled artisans. Chinchero is famous for its intricate textile designs...",
        image: blog1,
      },
      {
        title: "Coffee Farm Tour in the Amazon",
        description: "Explore sustainable coffee farming...",
        fullDescription:
          "Explore sustainable coffee farming practices and enjoy fresh brews. The Amazon is home to some of the best coffee farms...",
        image: blog2,
      },
    ],
  },
  Entertainment: {
    title: "Entertainment",
    icon: <FaStar />,
    description:
      "Discover the vibrant entertainment scene in Peru with AdrielHomes...",
    heroImage: entertainment,
    blogs: [
      {
        title: "Live Music in Lima",
        description: "Enjoy performances by local artists...",
        fullDescription:
          "Enjoy performances by local artists in Lima’s buzzing music scene. From traditional tunes to modern beats, there’s something for everyone...",
        image: blog3,
      },
      {
        title: "Dance Shows in Cusco",
        description: "Witness traditional dance performances...",
        fullDescription:
          "Witness traditional dance performances that showcase the rich cultural heritage of Cusco. An experience not to be missed...",
        image: blog4,
      },
      {
        title: "Theater Night in Arequipa",
        description: "Catch a play in historic theaters...",
        fullDescription:
          "Catch a play in historic theaters of Arequipa. Enjoy a night of drama and storytelling in beautiful venues...",
        image: blog5,
      },
    ],
  },
  Exclusive: {
    title: "Exclusive",
    icon: <FaRegCalendarCheck />,
    description:
      "Are sophisticated experiences available in Peru? Yes, of course...",
    heroImage: exclusive,
    blogs: [
      {
        title: "Cruise ship voyage on the Amazon River",
        description: "A privileged view of the Amazon basin...",
        fullDescription:
          "A voyage along the Amazon River on a luxurious cruise ship is quite simply an experience that will take your breath away, and not because it involves any physical effort. No, quite the contrary! Splendid cruise ships like floating hotels sail the waters of the Amazon River, enabling passengers to observe the magnificent natural setting offered by the Pacaya Samiria National Reserve from a privileged perspective. You can enjoy every comfort and first class service as you voyage deep into the forest, where you will have the chance to visit remote communities that have retained remarkable traditions that only those able to make this journey can witness. A true privilege!",
        image: blog6,
      },
      {
        title: "Luxury train journey Cusco, Puno and Arequipa",
        description: "Where luxury arrives on rails...",
        fullDescription:
          "Where luxury arrives on rails! Enjoy a luxury train journey through the stunning landscapes of Cusco, Puno, and Arequipa, with first-class service and amenities...",
        image: blog7,
      },
      {
        title: "Picnic in the Paracas desert",
        description: "An unforgettable adventure...",
        fullDescription:
          "An unforgettable adventure! Experience a luxurious picnic in the breathtaking Paracas desert, complete with gourmet food and stunning views...",
        image: blog8,
      },
    ],
  },
};

function Unique() {
  const [selectedCategory, setSelectedCategory] = useState("Exclusive");
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);

  const { title, icon, description, heroImage, blogs } =
    categories[selectedCategory];

  const handleReadMore = (blog) => {
    setActiveBlog(blog);
    setShowBlogModal(true);
  };

  const handleSubscribe = () => {
    setShowSubscribeModal(true);
  };

  return (
    <div className="unique-container">
      <div className="container">
        <div className="sec-title">
          <h2>
            {icon} {title} : Every experience is uniquely special
          </h2>
        </div>
        <div className="tabs">
          <div className="list">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`tab-button ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {categories[category].icon}
                <span>{category}</span>
              </button>
            ))}
          </div>
          <div className="dropdowns">
            <div className="dropdown">
              <button className="dropbtn">
                {categories[selectedCategory].icon}
                <span>{categories[selectedCategory].title}</span>
              </button>
              <div className="dropdown-content">
                {Object.keys(categories).map((category) => (
                  <button
                    key={category}
                    className={`tab-button ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {categories[category].title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay">
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="see-more">SEE MORE</button>
        </div>
      </div>
      <div className="container">
        <div className="blogs">
          {blogs.slice(0, 3).map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <span className="category">{title}</span>
              <div className="blog-content">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <div className="actions">
                  <FaRegHeart
                    className="icon-heart"
                    onClick={handleSubscribe}
                    title="Subscribe To Get Hot Deals"
                  />
                  <FaArrowRight
                    className="icon-arrow"
                    onClick={() => handleReadMore(blog)}
                    title="Read More"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showBlogModal && activeBlog && (
        <div className="modal">
          <div className="modal-content">
            <img src={activeBlog.image} alt={activeBlog.title} />
            <h2>{activeBlog.title}</h2>
            <p>{activeBlog.fullDescription}</p>
            <button onClick={() => setShowBlogModal(false)}>Close</button>
          </div>
        </div>
      )}

      {showSubscribeModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Subscribe</h2>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone (optional)" />
            <button>Subscribe</button>
            <button onClick={() => setShowSubscribeModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Unique;
