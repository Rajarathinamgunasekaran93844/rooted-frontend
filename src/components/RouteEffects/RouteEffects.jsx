import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Rooted Music Documentary | Stories, Sounds & Cultural Heritage",
  "/mission": "Mission | ROOTED",
  "/instruments": "Instruments | ROOTED",
  "/archives": "Archives | ROOTED",
  "/research": "Research | ROOTED",
  "/youtube": "Films | ROOTED",
  "/deliverables": "Deliverables | ROOTED",
  "/subscribe": "Subscribe | ROOTED",
};

const instrumentNames = {
  yal: "Yāl Harp",
  kinnaram: "Kinnaram",
  panchamuga_vaathiyam: "Panchamuga Vaathiyam",
  tutari: "Tutari",
  parai: "Parai",
};

function getTitle(pathname) {
  if (pageTitles[pathname]) {
    return pageTitles[pathname];
  }

  const instrumentMatch = pathname.match(/^\/instruments\/([^/]+)$/);
  if (instrumentMatch) {
    const slug = instrumentMatch[1].toLowerCase();
    const name = instrumentNames[slug];
    if (name) {
      return `${name} | ROOTED`;
    }
    return "Instrument | ROOTED";
  }

  return "Page Not Found | ROOTED";
}

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.title = getTitle(pathname);
  }, [pathname]);

  return null;
}

export default RouteEffects;
