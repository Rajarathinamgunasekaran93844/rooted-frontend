import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Mission from "./pages/Mission/Mission";
import Instruments from "./pages/Instruments/Instruments";
import InstrumentDetails from "./pages/InstrumentDetails/InstrumentDetails";
import Archives from "./pages/Archives/Archives";
import YouTube from "./pages/Youtube/Youtube";
import Deliverables from "./pages/Deliverables/Deliverables";
import Subscribe from "./pages/Subscribe/Subscribe";
import Research from "./pages/Research/Research";
import NotFound from "./pages/NotFound/NotFound";
import RouteEffects from "./components/RouteEffects/RouteEffects";

function App() {
  return (
    <>
      <RouteEffects />
      <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/mission" element={<Mission />} />

      <Route
        path="/instruments"
        element={<Instruments />}
      />

      <Route
        path="/instruments/:slug"
        element={<InstrumentDetails />}
      />
       <Route
        path="/archives"
        element={<Archives />}
      />
       <Route
        path="/research"
        element={<Research />}
      />
      <Route
        path="/youtube"
        element={<YouTube />}
      />
       <Route
        path="/deliverables"
        element={<Deliverables />}
      />
      <Route
        path="/subscribe"
        element={<Subscribe />}
      />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
