import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    url: "4pencil-utils1/IHOUSE/WILDLIFE.svg",
    title: "NIRAS INTERNATIONAL",
    description:
      "Safeguarding Posters for NIRAS International Designed visually engaging safeguarding posters for the Climate Justice Community (CJC), ensuring cultural relevance and accessibility. Incorporated feedback from NIRAS International staff and community representatives and translated materials into three main local languages.",
  },
  {
    url: "4pencil-utils1/IHOUSE/CLIMATE CHANGE/environment.svg",
    title: "GiZ",
    description: "A magical journey through an enchanted forest, featuring hand-drawn characters and vibrant scenery. This project showcases our expertise in traditional animation techniques combined with modern digital tools. The story follows a young explorer discovering mythical creatures and ancient secrets hidden within the forest.",
  },
  {
    url: "4pencil-utils1/IHOUSE/lop1.svg",
    title: "Character Design",
    description: "Fluid motion and captivating animated sequences.",
  },
  {
    url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/herokidsrich.svg",
    title: "Comics",
    description: "Sequential art that tells compelling stories frame by frame.",
  },
  {
    url: "4pencil-utils1/IHOUSE/CLIMATE CHANGE/environment_05 .svg",
    title: "Illustrations",
    description: "Detailed illustrations for various media and purposes.",
  },
  {
    url: "4pencil-utils1/IHOUSE/CLIMATE CHANGE/environment_03.svg",
    title: "Story books",
    description: "Enchanting visuals that bring stories to life.",
  },
  {
    url: "4pencil-utils1/IHOUSE/CLIMATE CHANGE/environment_01.svg",
    title: "Story boards",
    description: "Enchanting visuals that bring stories to life.",
  },
];

function serviceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-4 text-center text-sky-500 ">
          In House Projects
        </h2>
        {/* <p className="text-2xl font-bold text-[#FFD700] mb-8 max-w-3xl mx-auto px-4 pb-2">Discover our most impactful and innovative creations that push the
        boundaries of animation and storytelling.</p> */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative w-50 h-50">
              <img
                src={services[currentSlide].url}
                alt={services[currentSlide].title}
                className="w-full  object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-black/30">
                {/* <h3 className="font-bold text-sky-500 mb-2 text-6xl">
                  {services[currentSlide].title}
                </h3>
                <p className="text-[#FFD700] text-3xl">
                  {services[currentSlide].description}
                </p> */}
              </div>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FFD700] hover:bg-white text-sky-500 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FFD700] hover:bg-white text-sky-500 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-sky-500 w-6" : "bg-[#FFD700]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default serviceSection;
