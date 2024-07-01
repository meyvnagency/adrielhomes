import React, { useState } from "react";

const faqData = [
  {
    question: "What services do you offer in real estate?",
    answer:
      "We offer a variety of real estate services including buying, selling, and renting properties, as well as property management and investment consulting.",
  },
  {
    question: "What amenities are included in the bed and breakfast?",
    answer:
      "Our bed and breakfast includes complimentary breakfast, free Wi-Fi, parking, daily housekeeping, and access to our garden and lounge areas.",
  },
  {
    question: "What are the popular tourist attractions nearby?",
    answer:
      "We are located close to several popular attractions such as the National Park, the Historic Downtown, and the Waterfront District. Guided tours are available upon request.",
  },
  {
    question: "What landscaping services do you provide?",
    answer:
      "Our landscaping services include garden design, lawn care, tree trimming, irrigation system installation, and seasonal clean-up.",
  },
  {
    question: "How can I book a stay at your bed and breakfast?",
    answer:
      "You can book a stay through our website's booking page or by calling our front desk. We recommend booking in advance to ensure availability.",
  },
  {
    question: "Do you offer customized real estate solutions?",
    answer:
      "Yes, we offer customized solutions tailored to meet your specific real estate needs, whether you are looking for residential, commercial, or investment properties.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
