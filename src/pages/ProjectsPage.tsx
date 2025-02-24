import React from "react";
import Navbar from "../components/Navbar";
import ProjectSection from "./portfolio/ProjectModal";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
