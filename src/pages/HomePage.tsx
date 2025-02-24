import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import OurGallery from "../components/ServicesPage";
import ServicesPage from "../components/ProjectsSection";
import Partners from "../components/Partners/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Wonderkids', sans-serif" }}>
      <Navbar />
      <Hero />
      <OurGallery />
       <ServicesPage />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
