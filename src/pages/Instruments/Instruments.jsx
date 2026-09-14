import { Link } from "react-router-dom";

import yalImage from "../../assets/instruments/Yal_358_454.png";
import kinnaramImage from "../../assets/instruments/kinnaram_358_454.png";
import panchamugaImage from "../../assets/instruments/panchamuga_vaathiyam_358_454.png";
import tutariImage from "../../assets/instruments/Tutari_358_454.png";
import paraiImage from "../../assets/instruments/Parai_358_454.png";

import "./Instruments.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Instruments() {
  const instruments = [
    {
      name: "YĀL",
      slug: "yal",
      image: yalImage,
      description:
        "The ancient harp of the Tamil people, mentioned in Sangam literature, carved with intricate symbolic motifs.",
    },
    {
      name: "KINNARAM",
      slug: "kinnaram",
      image: kinnaramImage,
      description:
        "A rare bowed string instrument, its resonance echoing the deep spiritual history of tribal India.",
    },
    {
      name: "PANCHAMUGA VAATHIYAM",
      slug: "panchamuga_vaathiyam",
      image: panchamugaImage,
      description:
        "The five-faced drum, a rhythmic masterpiece of bronze and skin, producing sounds that mimic the elements of nature.",
    },
    {
      name: "TUTARI",
      slug: "tutari",
      image: tutariImage,
      description:
        "The Tutari is a curved brass instrument that calls across valleys and through cultural epochs.",
    },
    {
      name: "PARAI",
      slug: "parai",
      image: paraiImage,
      description:
        "One of the oldest drums of India, the Parai is the voice of the people, a symbol of resistance and communal celebration.",
    },
  ];

  return (
    <main className="instruments-page">
      <Navbar/>
      <section className="instruments-section">
        <div className="instruments-container">

          <div className="instruments-header">
            <span className="instruments-eyebrow">
              ROOTED COLLECTION
            </span>

            <h1>
              CORE MUSICAL INSTRUMENTS
            </h1>
          </div>

          <div className="instruments-grid">
            {instruments.map((instrument) => (
              <Link
                to={`/instruments/${instrument.slug}`}
                className="instrument-card"
                key={instrument.slug}
              >
                <div className="instrument-image-wrapper">
                  <img
                    src={instrument.image}
                    alt={instrument.name}
                    className="instrument-image"
                  />
                </div>

                <h2>{instrument.name}</h2>

                <p>{instrument.description}</p>

                <span className="instrument-explore">
                  EXPLORE INSTRUMENT →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default Instruments;