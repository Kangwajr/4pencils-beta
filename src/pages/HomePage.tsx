import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/ServicesPage";
import ProjectsPage from "../components/ProjectsSection";
import Partners from "../components/Partners/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SocialIcons from '../components/SocialIcons';

const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'', sans-serif" }}>
      <Navbar />
      <SocialIcons />
      <Hero />
      <Services />
       <ProjectsPage />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
