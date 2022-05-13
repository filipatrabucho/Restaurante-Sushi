import React from "react";
import "./linkmenu.css";

function Linkmenu() {
  return (
    <>
      <section className="menu section bd-container" id="menu">
        <span className="section-subtitle">Especial</span>
        <h2 className="section-title">Menu da Semana</h2>

        <div className="menu__container bd-grid">
          <div className="menu__content">
            <img
              src="https://www.sushibarreiro.pt/wp-content/uploads/2021/09/uramaki.jpg"
              alt=""
              className="menu__img"
            />
            <h3 className="menu__name">Kimuchi Peixe Branco</h3>
            <span className="menu__detail">
              Molho kimuchi, peixe branco, alho francês e sementes de sésamo
            </span>
            <span className="menu__preci">€5.00</span>
          </div>

          <div className="menu__content">
            <img
              src="https://www.sushibarreiro.pt/wp-content/uploads/2021/09/uramaki.jpg"
              alt=""
              className="menu__img"
            />
            <h3 className="menu__name">Carpacio</h3>
            <span className="menu__detail">
              Salmão, atum, peixe branco / Ponzu, salmão, atum, kimuchi topping
            </span>
            <span className="menu__preci">€6.90</span>
          </div>

          <div className="menu__content">
            <img
              src="https://www.sushibarreiro.pt/wp-content/uploads/2021/09/uramaki.jpg"
              alt=""
              className="menu__img"
            />
            <h3 className="menu__name">Ura Skin Especial</h3>
            <span className="menu__detail">Pepino e alho francês</span>
            <span className="menu__preci">€8.00</span>
          </div>
        </div>
      </section>
      <a href="/menu" className="linkmenu__button">
        Veja Mais
      </a>
    </>
  );
}

export default Linkmenu;
