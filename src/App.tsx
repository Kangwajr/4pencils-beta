import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import OurGalleryPage from "./pages/OurGalleryPage"
import Animation2D from "./pages/Animation";
import Illustrations from "./pages/Illustrations";
import ComicsStorybook from "./pages/Comics-storybooks";
import CharacterDesign from  "./pages/Character-design"


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Gallery" element={<OurGalleryPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/animation" element={<Animation2D />} />
        <Route path="/Illustrations" element={<Illustrations />} />
        <Route path="/character-design" element={<CharacterDesign />} />
        <Route path="/comics" element={<ComicsStorybook />} />
      </Routes>
    </Router>
  );
};
export default App;
