import "./Mission.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Mission() {
  return (
    <div className="mission-page">
      <Navbar />

      <main className="mission-section">
        <div className="mission-overlay"></div>

        <div className="mission-container">
          <h1 className="mission-title">Mission</h1>

          <div className="mission-content">
            <p>
              Rooted operates at the intersection of archival practice and
              historical research, focusing on instruments that are disappearing
              from Indian cultural memory such as the Yāl, Kinnaram, Panchamuga
              Vaathiyam, Tutari, and Parai.
            </p>

            <p>
              Through collaboration with tribal musicians and ethnomusicologists,
              researchers and music lovers, Rooted is creating a community based
              on love for culture and appreciation for the arts.
            </p>

            <p>
              Our value is preservation through activation: we do not archive
              these sounds in silence, but bring them into circulation.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Mission;