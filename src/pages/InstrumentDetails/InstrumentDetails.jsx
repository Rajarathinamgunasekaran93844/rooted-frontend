import { useParams } from "react-router-dom";

import "./InstrumentDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import yalImage from "../../assets/instruments/Yal_358_454.png";
import kinnaramImage from "../../assets/instruments/kinnaram_358_454.png";
import panchamugaImage from "../../assets/instruments/panchamuga_vaathiyam_358_454.png";
import tutariImage from "../../assets/instruments/Tutari_358_454.png";
import paraiImage from "../../assets/instruments/Parai_358_454.png";


const instruments = {
  yal: {
    title: "THE YĀL HARP",
    subtitle: "A CURVED STRING INSTRUMENT BUILT IN THE SHAPE OF AN ANIMAL",
    image: yalImage,
    button: "LISTEN TO THE SAGA",

    details: [
      "The Yāl does not have a fretboard; each string, when plucked, produces a fixed pitch based on its length, tension, and material.",

      "The wooden bridge, which holds the strings, transmits vibrations to the resonator.",

      "The body of the Yāl is hollowed out, often from jackfruit or sandalwood, acting as a soundbox that amplifies the vibrations.",

      "Unlike later Indian string instruments, the Yāl produces a clean, ringing tone with a distinctive harp-like quality.",

      "The fan-like arrangement of strings allows for both melodic and harmonic playing.",

      "The overall volume of the sound tends to be very low.",
    ],
  },


  kinnaram: {
    title: "THE KINNARAM",
    subtitle: "AN ANCIENT BOWED STRING INSTRUMENT",
    image: kinnaramImage,
    button: "EXPLORE THE SOUND",

    details: [
      "The Kinnaram is an ancient bowed string instrument associated with traditional musical practices.",

      "Its distinctive structure produces a deep and expressive tonal character.",

      "The instrument has important connections with indigenous and tribal musical traditions.",

      "Its sound is shaped by the relationship between the bow, strings, and resonating body.",
    ],
  },


  panchamuga_vaathiyam: {
    title: "PANCHAMUGA VAATHIYAM",
    subtitle: "A FIVE-FACED RHYTHMIC INSTRUMENT",
    image: panchamugaImage,
    button: "LISTEN TO THE RHYTHM",

    details: [
      "The Panchamuga Vaathiyam is known for its distinctive multiple playing surfaces.",

      "Its construction allows for a variety of rhythmic and tonal expressions.",

      "The instrument has strong connections with ceremonial and cultural traditions.",

      "Different surfaces can create different tonal characteristics during performance.",
    ],
  },


  tutari: {
    title: "THE TUTARI",
    subtitle: "A CURVED BRASS WIND INSTRUMENT",
    image: tutariImage,
    button: "HEAR THE CALL",

    details: [
      "The Tutari is a traditional curved brass wind instrument.",

      "It produces a powerful and distinctive ceremonial sound.",

      "Historically, it has been used during celebrations and important announcements.",

      "Its curved form makes it one of the visually recognisable traditional instruments.",
    ],
  },


  parai: {
    title: "THE PARAI",
    subtitle: "AN ANCIENT FRAME DRUM OF TAMIL CULTURE",
    image: paraiImage,
    button: "FEEL THE RHYTHM",

    details: [
      "The Parai is one of the oldest percussion instruments associated with Tamil culture.",

      "It has historically been used for communication, ceremonies, and performance.",

      "The instrument produces powerful rhythmic patterns when played with sticks.",

      "Today, the Parai continues to represent cultural identity, expression, and collective memory.",
    ],
  },
};


function InstrumentDetails() {

  /* GET :slug FROM URL */
  const { slug } = useParams();

  /* CONVERT URL TO LOWERCASE */
  const instrumentSlug = slug?.toLowerCase();

  /* FIND INSTRUMENT */
  const instrument = instruments[instrumentSlug];


  /* NOT FOUND */
  if (!instrument) {
    return (
      <main className="instrument-details-wrapper">
        <Navbar />
        <section className="instrument-not-found">
          <h1>Instrument Not Found</h1>

          <p>
            The requested instrument could not be found.
          </p>
        </section>
        <Footer />
      </main>
    );
  }


  return (
    <main className="instrument-details-wrapper">
      <Navbar />
      <section className="instrument-details-page">

      {/* FULL BACKGROUND IMAGE */}
      <div
        className="instrument-background"
        style={{
          backgroundImage: `url(${instrument.image})`,
        }}
      />

      {/* LIGHT OVERLAY */}
      <div className="instrument-overlay" />


      <div className="instrument-details-container">

        {/* HEADER */}
        <div className="instrument-details-header">

          <p className="instrument-subtitle">
            {instrument.subtitle}
          </p>

          <h1 className="instrument-title">
            {instrument.title}
          </h1>

        </div>


        {/* MAIN CONTENT */}
        <div className="instrument-details-content">

          {/* MAIN IMAGE */}
          <div className="instrument-main-image">

            <img
              src={instrument.image}
              alt={instrument.title}
            />

          </div>


          {/* TEXT CONTENT */}
          <div className="instrument-information">

            <ul>
              {instrument.details.map((detail, index) => (
                <li key={index}>
                  {detail}
                </li>
              ))}
            </ul>


            <button className="instrument-action-button">
              {instrument.button}
            </button>

          </div>

        </div>

      </div>

      </section>
      <Footer />
    </main>
  );
}


export default InstrumentDetails;