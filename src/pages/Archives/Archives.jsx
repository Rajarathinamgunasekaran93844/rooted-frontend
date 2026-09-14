import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Archives.css";

function Archives() {
  const archives = [
    {
      number: "01",
      title: "SOUND ARCHIVES",
      description:
        "A living collection of rare recordings, field documentation, oral histories, and endangered musical traditions.",
    },
    {
      number: "02",
      title: "VISUAL ARCHIVES",
      description:
        "Photographs, moving images, performances, and visual records documenting instruments and their communities.",
    },
    {
      number: "03",
      title: "INSTRUMENT ARCHIVES",
      description:
        "Stories, forms, materials, and histories of instruments that continue to carry generations of cultural memory.",
    },
    {
      number: "04",
      title: "ORAL HISTORIES",
      description:
        "Conversations with musicians, makers, elders, and communities who preserve knowledge through lived experience.",
    },
    {
      number: "05",
      title: "FIELD DOCUMENTATION",
      description:
        "Research notes, journeys, recordings, and observations gathered from the places where these traditions continue.",
    },
    {
      number: "06",
      title: "CULTURAL MEMORY",
      description:
        "Fragments of stories, practices, rituals, and traditions preserved for future generations.",
    },
  ];

  return (
    <div className="archives-page">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="archives-hero">
        <div className="archives-overlay"></div>

        <div className="archives-hero-content">
          <span className="archives-eyebrow">
            PRESERVING CULTURAL MEMORY
          </span>

          <h1>ARCHIVES</h1>

          <p>
            A living repository of sounds, stories, images, instruments,
            and memories from India's endangered musical traditions.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="archives-intro">
        <div className="archives-intro-container">
          <span className="section-label">
            THE COLLECTION
          </span>

          <h2>
            Memory deserves to be
            <br />
            preserved and shared.
          </h2>

          <p>
            ROOTED archives the voices, sounds, instruments, and stories
            that exist at the edge of disappearance. Each recording,
            photograph, and document represents a living connection between
            communities, history, and cultural memory.
          </p>

          <p>
            Our archive is not a place where culture is frozen in time.
            It is a growing space where traditions continue to speak,
            evolve, and find new audiences.
          </p>
        </div>
      </section>

      {/* ================= ARCHIVE GRID ================= */}

      <section className="archives-collection">
        <div className="archives-collection-header">
          <span className="section-label">
            EXPLORE THE ARCHIVE
          </span>

          <h2>Collections</h2>
        </div>

        <div className="archive-grid">
          {archives.map((archive) => (
            <article
              className="archive-card"
              key={archive.number}
            >
              <span className="archive-number">
                {archive.number}
              </span>

              <div className="archive-card-content">
                <h3>{archive.title}</h3>

                <p>{archive.description}</p>

                <button className="archive-button">
                  EXPLORE COLLECTION
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FEATURED SECTION ================= */}

      <section className="featured-archive">
        <div className="featured-archive-content">
          <span className="section-label">
            FEATURED COLLECTION
          </span>

          <h2>
            The Sounds
            <br />
            That Remain
          </h2>

          <p>
            Discover recordings and stories from musicians whose traditions
            have travelled across generations, surviving through memory,
            practice, and community.
          </p>

          <button className="featured-button">
            ENTER THE ARCHIVE
          </button>
        </div>

        <div className="featured-archive-number">
          2026
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Archives;