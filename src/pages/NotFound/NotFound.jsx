import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <Navbar />
      <main className="not-found-content">
        <p>ROOTED ARCHIVE</p>
        <h1>THIS PAGE HAS NOT BEEN FOUND.</h1>
        <span></span>
        <Link to="/">RETURN HOME</Link>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
