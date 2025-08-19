import React from "react";
import '../../componentes/banner/banner.scss'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1>Venha conhecer nossas promoções</h1>
        <p>
          <span className="highlight">50% Off</span> nos produtos
        </p>
        <button className="btn">Ver produto</button>
      </div>
    </section>
  );
};

export default Banner;
