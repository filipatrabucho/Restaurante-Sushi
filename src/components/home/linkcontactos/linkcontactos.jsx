import React from "react";
import "./linkcontactos.css";

function Linkcontactos() {
  return (
    <section class="contact section bd-container" id="contact">
      <div class="contact__container bd-grid">
        <div class="contact__data">
          <span class="section-subtitle contact__initial">Fale Connosco</span>
          <h2 class="section-title contact__initial">Contatos</h2>
          <p class="contact__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            assumenda.
          </p>
        </div>

        <div class="contact__button">
          <a href="/" class="button">
            Contato-nos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Linkcontactos;
