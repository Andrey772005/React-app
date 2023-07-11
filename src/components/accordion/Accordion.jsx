import { useState } from "react";
import { images } from "images";
import "./styles.css";

export const Accordion = () => {
  const [active, setActive] = useState(0);
  return (
    <section>
      {images.map((card, index) => (
        <article key={card.image}
          className={active === index ? "active" : ""}
          onClick={() => setActive(index)}
          >
          <img src={card.image} alt=""/>
          <div className="content">
            <span>photo_camera</span>
            <div>
              <h2>{card.header}</h2>
              <p>{card.text}</p>
            </div>
          </div>
        </article>
       ))
      }
    </section>
  );
};