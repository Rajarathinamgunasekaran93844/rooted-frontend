import { Link } from "react-router-dom";

import yalImage from "../../assets/instruments/Yal_358_454.jpg";
import kinnaramImage from "../../assets/instruments/kinnaram_358_454.jpg";
import panchamugaImage from "../../assets/instruments/panchamuga_vaathiyam_358_454.jpg";
import tutariImage from "../../assets/instruments/Tutari_358_454.jpg";
import paraiImage from "../../assets/instruments/Parai_358_454.jpg";

import "./Instruments.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useCatalogData from "../../hooks/useCatalogData";

const instrumentImages = {
  yal: yalImage,
  kinnaram: kinnaramImage,
  panchamuga_vaathiyam: panchamugaImage,
  tutari: tutariImage,
  parai: paraiImage,
};

const fallbackInstruments = [
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

function Instruments() {
  const catalogInstruments = useCatalogData(
    "/api/catalog/instruments",
    fallbackInstruments,
  );
  const instruments = Array.isArray(catalogInstruments)
    ? catalogInstruments.map((instrument) => ({
        ...instrument,
        image: instrumentImages[instrument.slug] || yalImage,
      }))
    : fallbackInstruments;

  return (
    <div className="instruments-page">
      <Navbar />
      <main className="instruments-section">
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
                    width="1114"
                    height="1412"
                    loading="lazy"
                    decoding="async"
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
      </main>
      <Footer />
    </div>
  );
}

export default Instruments;
