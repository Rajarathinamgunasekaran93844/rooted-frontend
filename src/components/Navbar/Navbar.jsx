import { Link, NavLink } from "react-router-dom";

import rootedLogo from "../../assets/rooted_logo.png";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* ROOTED Logo */}
        <Link to="/" className="navbar-logo">
          <img src={rootedLogo} alt="ROOTED" />
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/mission"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            MISSION
          </NavLink>

          <NavLink
            to="/instruments"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            INSTRUMENTS
          </NavLink>

          <NavLink
            to="/archives"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            ARCHIVES
          </NavLink>

          <NavLink
            to="/research"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            RESEARCH
          </NavLink>

          <NavLink
            to="/youtube"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            YOUTUBE
          </NavLink>

          <NavLink
            to="/deliverables"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            DELIVERABLES
          </NavLink>

          <NavLink
            to="/subscribe"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            SUBSCRIBE
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;