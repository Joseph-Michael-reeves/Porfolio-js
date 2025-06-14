
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import DesignStory from "./components/DesignStory";
import SiteAnalysis from "./components/SiteAnalysis";
import TheSpace from "./components/TheSpace";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/design-story" element={<DesignStory />} />
        <Route path="/site-analysis" element={<SiteAnalysis />} />
        <Route path="/the-space" element={<TheSpace />} />
      </Routes>
    </Router>
  );
}
