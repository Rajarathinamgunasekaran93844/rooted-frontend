import "./Deliverables.css";
import rootedLogo from "../../assets/rooted_logo.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Deliverables() {
  const deliverables = [
    {
      title: "DIGITAL ARCHIVE",
      description:
        "A comprehensive repository of high-fidelity field recordings and visual documentation of endangered instruments.",
    },
    {
      title: "DOCUMENTARY FILM",
      description:
        "Narrative-driven visual storytelling capturing the lives of traditional musicians and the soul of South Indian heritage.",
    },
    {
      title: "SAMPLE LIBRARIES",
      description:
        "Professionally curated sample packs for global producers, ensuring traditional sounds find new life in contemporary music.",
    },
    {
      title: "INSTRUMENT RESTORATION",
      description:
        "Physical blueprints and material studies dedicated to the recreation of the Yāl harp and Panchamuga Vaathiyam.",
    },
    {
      title: "MUSICIAN SUPPORT LOOP",
      description:
        "An equitable financial system ensuring direct profit-sharing with tribal artists from all digital streaming and sales.",
    },
  ];

  return (
        
    <main className="deliverables-page">
   <Navbar/>
      <section className="deliverables-section">
         
        <div className="deliverables-container">

          {/* HERO */}
          <header className="deliverables-hero">
            <p className="deliverables-coming">COMING SOON</p>

            <div className="deliverables-brand">
             <img src={rootedLogo} alt="ROOTED" />
            </div>
          </header>

          {/* DELIVERABLES GRID */}
          <section className="deliverables-grid">
            {deliverables.map((item, index) => (
              <article
                className={`deliverable-item deliverable-${index + 1}`}
                key={item.title}
              >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </section>

        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default Deliverables;