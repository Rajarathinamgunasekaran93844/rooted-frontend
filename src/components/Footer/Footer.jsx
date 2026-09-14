import { Link } from "react-router-dom";
import rootedLogo from "../../assets/rooted_logo.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={rootedLogo} alt="ROOTED" />
          </Link>

          <p>
            Preserving India's endangered musical traditions through film,
            sound, and cultural memory.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>EXPLORE</h3>

          <Link to="/">Home</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/instruments">Instruments</Link>
          <Link to="/archives">Archives</Link>
        </div>

        {/* More Links */}
        <div className="footer-section">
          <h3>DISCOVER</h3>

          <Link to="/research">Research</Link>
          <Link to="/youtube">YouTube</Link>
          <Link to="/deliverables">Deliverables</Link>
          <Link to="/subscribe">Subscribe</Link>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>CONNECT</h3>

          <a href="mailto:hello@rooted.com">
            hello@rooted.com
          </a>

          <Link to="/youtube">YouTube</Link>
          <Link to="/subscribe">Newsletter</Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 ROOTED. All Rights Reserved.</p>

        <p>Preserving Sound. Protecting Memory.</p>
      </div>
    </footer>
  );
}

export default Footer;