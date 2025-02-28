import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import ProjectModal from "./ProjectModal";
import Navbar from "../../components/Navbar";

const projects = [
  {
    title: "GIZ",
    image: "/4pencil-utils1/ILLUSTRA/GIZ 1.svg",
    rating: 4.9,
    reviews: 128,
    description:
      "We partnered with GIZ Zambia to develop illustrations for Farmer Field School materials, contributing to impactful agricultural learning and community engagement.",
  },
  {
    title: "NIRAS INTERNATIONAL",
    image: "4pencil-utils1/ILLUSTRA/Nira1.svg",
    rating: 4.8,
    reviews: 94,
    description:
      "Safeguarding Posters for NIRAS International Designed visually engaging safeguarding posters for the Climate Justice Community (CJC), ensuring cultural relevance and accessibility. Incorporated feedback from NIRAS International staff and community representatives and translated materials into three main local languages.",
  },
  {
    title: "ACTIONAID",
    image: "4pencil-utils1/ILLUSTRA/ACTIONAID 1.svg",
    rating: 4.7,
    reviews: 156,
    description:
      "We had the privilege of managing ActionAid's social media pages, overseeing content creation and graphic design for digital advocacy. This role allowed me to contribute to the organization's online presence, strategically crafting engaging content and visually compelling designs to amplify their messages and advocacy efforts in the digital space.",
  },
  {
    title: "Leonard Cheshire Disability",
    image: "4pencil-utils1/ILLUSTRA/cheshire homes 1.svg",
    rating: 5.0,
    reviews: 73,
    description:
      "Collaborated with the Cheshire Homes Society of Zambia (CHSZ) and the Ministry of Education (MoE) to create a series of seven illustrative posters for the Financial Inclusion Project school clubs. This initiative, aimed at primary school children with disabilities, was a meaningful opportunity to promote inclusivity and empowerment through creative design.",
  },
  {
    title: "FOOD AND AGRICULTURE ORGANIZATION OF THE UNITED NATION",
    image: "/4pencil-utils1/ILLUSTRA/FOODANDAGRICULTUREORGANIZATIONOFTHEUNITEDNATION1.svg",
    rating: 5.0,
    reviews: 73,
    description: "",
  },
  {
    title: "Immigration",
    image: "4pencil-utils1/ILLUSTRA/immigration1.svg",
    rating: 5.0,
    reviews: 73,
    description: "",
  },
  {
    title: "Catholic Relief Services",
    image: "4pencil-utils1/ILLUSTRA/119.svg",
    rating: 5.0,
    reviews: 73,
    description: "we had the privilege of transforming the CIF+ Learning Brief, Job Aid, and Pocket Guide through strategic graphic design and illustration, enhancing visual appeal and user accessibility.",
  },
  {
    title: "Catholic Relief Services",
    image: "4pencil-utils1/ILLUSTRA/catholic1.svg",
    rating: 5.0,
    reviews: 73,
    description: "We collaborated with Catholic Relief Services - Zambia Country Program to illustrate visuals for the Inclusive, Positive Parenting manual. The focus was on depicting children with cerebral palsy and other differing abilities. The illustrations aimed to contribute to a comprehensive resource supporting positive parenting for families facing unique challenges. This project reflects my commitment to creative contributions that foster inclusivity and support diverse communities.",
  },

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="py-24 bg-black" style={{ fontFamily: "'', sans-serif" }}>
      <Navbar />
      <div className="container mx-auto px-4" >
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-sky-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-[#FFD700] text-3xl max-w-2xl mx-auto">
            Discover our most impactful and innovative creations that push the
            boundaries of animation and storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-black/40 border border-gray-800 hover:border-sky-500 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-4xl font-bold text-sky-500 mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-[#FFD700] fill-yellow-500" />
                    <span className="text-white font-semibold">
                      {project.rating}
                    </span>
                    <span className="text-gray-400 text-sm">
                      ({project.reviews})
                    </span>
                  </div>
                </div>
                <p className="text-[#FFD700] text-2xl mb-4">
                  {project.description.slice(0, 120)}...
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-2 text-2xl text-sky-500 hover:text-[#FFD700] transition-colors group"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
