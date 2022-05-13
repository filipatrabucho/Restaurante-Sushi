import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer section bd-container">
      <div className="footer__container bd-grid">
        <div className="footer__content">
          <a href="/" className="footer__logo">
            Sushi Relate
          </a>
          <span className="footer__description">Restaurante</span>
          <div>
            <a href="/" className="footer__social">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="/" className="footer__social">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="/" className="footer__social">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Informação</h3>
          <ul>
            <li>
              <a href="/contatos" className="footer__link">
                Contatos
              </a>
            </li>
            <li>
              <a href="/privacidade" className="footer__link">
                Politica de Privacidade
              </a>
            </li>
            <li>
              <a href="/termos" className="footer__link">
                Termos e Condições
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Morada</h3>
          <ul>
            <li>Rua Teste nr 123</li>
            <li>Lisbon - Portugal</li>
            <li>999 - 999 - 999</li>
            <li>sushirealate@email.com</li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">
        &#169; 2022 Sushi Relate. Todos os direitos reservados
      </p>
    </footer>
  );
}

export default Footer;
