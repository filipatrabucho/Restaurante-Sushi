import React from "react";
import { dish } from "../utils/dish";
import "./menu.css";

function Menu() {
  return (
    <section class="menu section bd-container" id="menu">
      <span class="section-subtitle">Especial</span>
      <h2 class="section-title">Menu da Semana</h2>
      <div className="menu__container bd-grid">
        {dish.map((dish) => {
          const { id, image, name, description, price, path } = dish;
          return (
            <div className="menu__content" key={id}>
              <img src={image} alt={name} className="menu__img" />
              <h3 className="menu__name">{name}</h3>
              <span className="menu__detail">{description}</span>
              <span className="menu__preci">{price}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Menu;
