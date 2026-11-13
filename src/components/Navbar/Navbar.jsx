import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import rootedLogo from "../../assets/rooted_logo_optimized.png";

import "./Navbar.css";

function Navbar() {
  const [openMenuPath, setOpenMenuPath] = useState(null);
  const navbarRef = useRef(null);
  const { pathname } = useLocation();
  const isMenuOpen = openMenuPath === pathname;

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpenMenuPath(null);
    };
    const closeOnOutsidePointer = (event) => {
      if (!navbarRef.current?.contains(event.target)) {
        setOpenMenuPath(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" aria-label="Main navigation" ref={navbarRef}>
      <div className="nav-container">

        {/* ROOTED Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setOpenMenuPath(null)}>
          <img src={rootedLogo} alt="ROOTED" />
        </Link>

        <button
          className={`nav-menu-toggle${isMenuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() =>
            setOpenMenuPath((openPath) =>
              openPath === pathname ? null : pathname,
            )
          }
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation Links */}
        <div
          className={`nav-links${isMenuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          onClick={() => setOpenMenuPath(null)}
        >

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
