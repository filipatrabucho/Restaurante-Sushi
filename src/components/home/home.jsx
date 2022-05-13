import React from "react";
import "./home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">Tasty food</h1>
          <h2 className="home__subtitle">
            Try the best food of <br> the week.</br>
          </h2>
          <a href="/" className="button">
            View Menu
          </a>
        </div>
        <img
          src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?cs=srgb&dl=pexels-pixabay-357756.jpg&fm=jpg"
          alt="teste"
          className="home__img"
        />
      </div>
    </section>
  );
}

export default Home;
