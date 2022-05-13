import React from "react";
import Image from "../../../assets/sushi_about.png";
import "./cta.css";

function Cta() {
  return (
    <section className="about section bd-container" id="about">
      <div className="about__container  bd-grid">
        <div className="about__data">
          <span className="section-subtitle about__initial">Sobre Nós</span>
          <h2 className="section-title about__initial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            magni non aut.
          </p>
          <a href="/sobre" className="button">
            Sabia Mais
          </a>
        </div>

        <img src={Image} alt="Sushi" className="about__img" />
      </div>
    </section>
  );
}
export default Cta;
