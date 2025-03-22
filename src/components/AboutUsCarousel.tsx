import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
  title: string;
}

const images: CarouselImage[] = [
  { url: "4pencil-utils1/IHOUSE/ClimateChange/environment_05.svg", title: "Collaborative Space" },
  { url: "4pencil-utils1/3D-REN/girlAlone2.svg", title: "Tech Hub" },
  { url: "studio2.jpeg", title: "Team Space" },
  { url: "studio1.jpeg", title: "Animation Studio" },
  { url: "4pencil-utils1/3D-REN/3D-art005.svg", title: "Modern Studio Space" },
  { url: "4pencil-utils1/3D-REN/3D-art006.svg", title: "Creative Workshop" },
  { url: "4pencil-utils1/3D-REN/3D-art007.svg", title: "Meeting Area" },
];

const ImageCarousel3D: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8">
        <div
          className="flex gap-4 md:gap-6"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 500ms ease-out' : 'none',
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] relative rounded-xl overflow-hidden"
              style={{
                aspectRatio: '3/4',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 sm:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 sm:block"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel3D;
