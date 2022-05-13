import React from "react";
import "../styles/homepage.css";
import { Link } from "react-router-dom";
//import Plates from "../home/images/plates";
//import Parteners from "../home/parteners/parteners";
import Cta from "../home/cta/cta";
import Services from "../home/services/services";
import Linkmenu from "../home/linkmenu/linkmeu";
import Linkcontactos from "../home/linkcontactos/linkcontactos";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="homepage__info">
          <h1>Sushi Relate</h1>
          <p>Vê já as nossas novidades</p>
          <Link to="/menu" className="button">
            Menu
          </Link>
          {/* <Parteners /> */}
        </div>
        {/* <Plates /> */}
      </div>
      <Cta />
      <Linkmenu />
      <Services />
      <Linkcontactos />
    </>
  );
}

export default Homepage;
