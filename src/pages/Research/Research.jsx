import rootedLogo from "../../assets/rooted_logo_optimized.png";
import "./Research.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useCatalogData from "../../hooks/useCatalogData";

const fallbackResearchAreas = [
  {
    number: "01",
    title: "FIELD DOCUMENTATION",
    description:
      "Recording endangered musical practices directly within the communities where they continue to live, evolve and survive.",
  },
  {
    number: "02",
    title: "INSTRUMENT STUDIES",
    description:
      "Examining the construction, materials, acoustics and cultural history of traditional instruments across South India.",
  },
  {
    number: "03",
    title: "ORAL HISTORIES",
    description:
      "Preserving the voices of musicians, craftspeople, elders and communities whose knowledge has traditionally been passed from generation to generation.",
  },
  {
    number: "04",
    title: "MUSICAL TRADITIONS",
    description:
      "Studying the contexts in which traditional music is performed, including rituals, celebrations, ceremonies and everyday community life.",
  },
  {
    number: "05",
    title: "ARCHIVAL RESEARCH",
    description:
      "Connecting contemporary field recordings with historical texts, photographs, manuscripts and existing cultural archives.",
  },
  {
    number: "06",
    title: "CULTURAL PRESERVATION",
    description:
      "Building accessible digital resources that allow endangered sounds, stories and knowledge to remain available for future generations.",
  },
];

function Research() {
  const catalogResearchAreas = useCatalogData(
    "/api/catalog/research-areas",
    fallbackResearchAreas,
  );
  const researchAreas = Array.isArray(catalogResearchAreas)
    ? catalogResearchAreas
    : fallbackResearchAreas;

  return (
    <div className="research-page">
      <Navbar />
      <main className="research-section">
        <div className="research-container">

          {/* =========================================
              HERO
          ========================================= */}

          <header className="research-hero">

            <p className="research-eyebrow">
              ROOTED RESEARCH
            </p>

            <h1 className="research-title">
              LISTEN.
              <br />
              DOCUMENT.
              <br />
              PRESERVE.
            </h1>

            <div className="research-logo">
              <img
                src={rootedLogo}
                alt="ROOTED"
              />
            </div>

          </header>


          {/* =========================================
              INTRODUCTION
          ========================================= */}

          <section className="research-intro">

            <div className="research-intro-label">
              THE RESEARCH
            </div>

            <div className="research-intro-content">

              <h2>
                Every sound carries
                <br />
                a history.
              </h2>

              <div className="research-intro-text">

                <p>
                  ROOTED approaches traditional music as a living
                  archive. Our research begins with the people,
                  places and instruments that continue to carry
                  these traditions forward.
                </p>

                <p>
                  Through field recordings, interviews,
                  documentation and material studies, we work to
                  understand not only how an instrument sounds,
                  but why it exists, who plays it and what it
                  means to the community around it.
                </p>

              </div>

            </div>

          </section>


          {/* =========================================
              RESEARCH AREAS
          ========================================= */}

          <section className="research-areas">

            <div className="research-section-heading">

              <span>
                AREAS OF STUDY
              </span>

              <div></div>

            </div>


            <div className="research-grid">

              {researchAreas.map((area) => (
                <article
                  className="research-card"
                  key={area.number}
                >

                  <span className="research-number">
                    {area.number}
                  </span>

                  <h3>
                    {area.title}
                  </h3>

                  <p>
                    {area.description}
                  </p>

                  <span className="research-arrow">
                    →
                  </span>

                </article>
              ))}

            </div>

          </section>


          {/* =========================================
              METHODOLOGY
          ========================================= */}

          <section className="research-methodology">

            <div className="methodology-heading">

              <span>
                OUR APPROACH
              </span>

              <h2>
                RESEARCH
                <br />
                WITH RESPECT.
              </h2>

            </div>


            <div className="methodology-content">

              <div className="methodology-line">
                <span>01</span>
                <p>
                  LISTEN FIRST
                </p>
              </div>

              <div className="methodology-line">
                <span>02</span>
                <p>
                  DOCUMENT CAREFULLY
                </p>
              </div>

              <div className="methodology-line">
                <span>03</span>
                <p>
                  CREDIT THE SOURCE
                </p>
              </div>

              <div className="methodology-line">
                <span>04</span>
                <p>
                  RETURN KNOWLEDGE
                </p>
              </div>

            </div>

          </section>


          {/* =========================================
              ARCHIVE STATEMENT
          ========================================= */}

          <section className="research-statement">

            <div className="research-statement-line"></div>

            <p>
              THE GOAL IS NOT TO FREEZE
              <br />
              TRADITION IN TIME.
            </p>

            <h2>
              IT IS TO KEEP IT ALIVE.
            </h2>

            <div className="research-statement-line"></div>

          </section>


          {/* =========================================
              FOOTNOTE
          ========================================= */}

          <footer className="research-footer-note">

            <span>
              ROOTED / RESEARCH
            </span>

            <span>
              DOCUMENTING SOUND & CULTURE
            </span>

          </footer>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Research;
