import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
 
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    image: " 4pencil-utils1/IHOUSE/ClimateChange/environment_05.svg",
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    image: "4pencil-utils1/IHOUSE/WILDLIFE.svg",
  },
  {
    id: 2,
    title: "Health & Wellness App",
    description: "Mobile-first application for tracking fitness and nutrition goals",
    image: "4pencil-utils1/IHOUSE/ClimateChange/environment.svg",
  },
  {
    id: 3,
    title: "Smart Home Dashboard",
    description: "IoT control center for managing connected home devices",
    image: "4pencil-utils1/IHOUSE/lop1.svg",
  },
  {
    id: 4,
    title: "Comics",
    description: "Sequential art that tells compelling stories frame by frame.",
    image: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/herokidsrich.svg",
  },
  {
    id: 5,
    title: "Illustrations",
    description: "Detailed illustrations for various media and purposes.",
    image: "4pencil-utils1/IHOUSE/ClimateChange/environment_05 .svg",
  },
  {
    id: 6,
    title: "Story Books",
    description: "Enchanting visuals that bring stories to life.",
    image: "4pencil-utils1/IHOUSE/ClimateChange/environment_03.svg",
  },
  {
    id: 7,
    title: "Story Boards",
    description: "Enchanting visuals that bring stories to life.",
    image: "4pencil-utils1/IHOUSE/ClimateChange/environment_01.svg",
  },
];


const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    // Preload images
    projects.forEach(project => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        setLoadedImages(prev => new Set(prev).add(project.image));
      };
    });
  }, []);

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex(prevIndex => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const isImageLoaded = (image: string) => loadedImages.has(image);
  const currentProject = projects[currentIndex];

  return (
    <div className="w-full h-full bg-black">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700] py-10 text-center">
        In-House Projects
      </h1>
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div 
          key={currentProject.id}
          className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
            direction === 'right' ? 'animate-slideLeft' : 
            direction === 'left' ? 'animate-slideRight' : ''
          }`}
        >
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                isImageLoaded(currentProject.image) ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${currentProject.image})` }}
            />

            {!isImageLoaded(currentProject.image) && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-[#FFD700] backdrop-blur-sm hover:bg-white/50 transition-colors z-10"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-sky-500" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-[#FFD700] backdrop-blur-sm hover:bg-white/50 transition-colors z-10"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-sky-500" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;