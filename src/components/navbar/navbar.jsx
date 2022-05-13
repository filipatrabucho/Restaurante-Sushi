import React from "react";
import { navlinks } from "../utils/navlinks";
import "./navbar.css";

function Navbar() {
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="/" className="nav__logo">
          Sushi Relate
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {navlinks.map((navlinks) => {
              const { path, name, id } = navlinks;
              return (
                <li className="nav__item" key={id}>
                  <a href={path} className="nav__link ">
                    {name}
                  </a>
                </li>
              );
            })}

            {/*  <li className="nav__item">
              <a href="#about" className="nav__link active-link">
                About
              </a>
            </li> */}
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
