import React from "react";
import "./plates.css";

function Plates() {
  return (
    <>
      <ul className="homepage__plates">
        <li>
          <img
            src="https://images.pexels.com/photos/11724594/pexels-photo-11724594.jpeg?cs=srgb&dl=pexels-dyon-siregar-11724594.jpg&fm=jpg"
            alt="pratos"
          ></img>
        </li>
        <li>
          <img
            src="https://images.pexels.com/photos/11783277/pexels-photo-11783277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="pratos"
          ></img>
        </li>
        <li>
          <img
            src="https://images.pexels.com/photos/8951203/pexels-photo-8951203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="pratos"
          ></img>
        </li>
      </ul>
    </>
  );
}

export default Plates;
