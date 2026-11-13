import { Link } from "react-router-dom";

import "./Hero.css";
import heroImage from "../../assets/background_image.jpg";

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Traditional Indian Musical Instruments"
        className="hero-background"
        fetchPriority="high"
        decoding="async"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-series">ORIGINAL SERIES</p>

        <h1 className="hero-title">ROOTED</h1>

        <p className="hero-description">
          Preserving India's Endangered Musical Traditions
          <br />
          Through Film, Sound, and Cultural Memory
        </p>

        <div className="hero-buttons">
          <Link to="/youtube" className="watch-button">
            Watch Now
          </Link>

          <Link to="/instruments" className="explore-button">
            Explore Saga
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
