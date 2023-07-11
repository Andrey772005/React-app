import React from "react";
import { useState } from "react";
// import { images } from "./images";
import Image from "../../assets/1.webp";
import "./styles.css";

export const cards = [
  {
    image: Image,
    header: "Canada",
    text: `Image description`,
  },
  {
    image: Image,
    header: "",
    text: ""
  },
  {
    image: Image,
    header: "",
    text: ""
  },
  {
    // image: {Image},
    header: "",
    text: ""
  },
  {
    // image: {Image},
    header: "",
    text: ""
  }
];

export const Accordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section>
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
          key={card.image}
          className={isActive}
          onClick={() => handleToggle(index)}
          >
            <img src={card.image} alt="" />
            <div className="content">
              <span className="material-symbols-outlined">photo_camera</span>
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};