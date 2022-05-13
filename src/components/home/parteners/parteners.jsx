import React from "react";
import Ubereats from "../../../assets/uber-eats.svg";
import glovo from "../../../assets/glovo-logo.svg";
import "./parteners.css";

function Parteners() {
  return (
    <>
      <ul>
        <li>
          <a
            href="https://www.ubereats.com/pt"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={Ubereats}
              alt="logo"
              className="homepage__parteners"
            ></img>
          </a>
        </li>
        <li>
          <a href="https://glovoapp.com/" rel="noreferrer" target="_blank">
            <img src={glovo} alt="logo" className="homepage__parteners"></img>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Parteners;
