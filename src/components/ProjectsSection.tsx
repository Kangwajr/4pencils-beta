import React, { useState, useEffect, useMemo } from "react";
import { Suspense } from "react";

const ChevronLeft = React.lazy(() =>
  import("lucide-react").then((mod) => ({ default: mod.ChevronLeft }))
);
const ChevronRight = React.lazy(() =>
  import("lucide-react").then((mod) => ({ default: mod.ChevronRight }))
);

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
    description:
      "A magical journey through an enchanted forest, featuring hand-drawn characters and vibrant scenery. This project showcases our expertise in traditional animation techniques combined with modern digital tools. The story follows a young explorer discovering mythical creatures and ancient secrets hidden within the forest.",
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

function ServiceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload next and previous images
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % services.length;
    const prevIndex = (currentSlide - 1 + services.length) % services.length;

    const preloadNext = new Image();
    const preloadPrev = new Image();
    preloadNext.src = services[nextIndex].url;
    preloadPrev.src = services[prevIndex].url;
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const serviceDots = useMemo(
    () =>
      services.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentSlide === index ? "bg-sky-500 w-6" : "bg-[#FFD700]"
          }`}
        />
      )),
    [services, currentSlide]
  );

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-4 text-center text-sky-500">
          In House Projects
        </h2>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative w-50 h-50">
              <img
                src={services[currentSlide].url}
                alt={services[currentSlide].title}
                className="w-full object-cover img-transition"
                loading="lazy"
              />
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
          <div className="flex justify-center mt-4 space-x-2">{serviceDots}</div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
