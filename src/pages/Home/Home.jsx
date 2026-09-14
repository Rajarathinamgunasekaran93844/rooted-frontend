import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default Home;