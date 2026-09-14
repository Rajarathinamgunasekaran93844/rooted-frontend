import "./Hero.css";
import heroImage from "../../assets/background_image.png";

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Traditional Indian Musical Instruments"
        className="hero-background"
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
          <button className="watch-button">
            Watch Now
          </button>

          <button className="explore-button">
            Explore Saga
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;