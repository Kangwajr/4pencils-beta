import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
  title: string;
}

const images: CarouselImage[] = [
  { url: "4pencil-utils1/IHOUSE/ClimateChange/environment_05.svg", title: "Collaborative Space" },
  { url: "4pencil-utils1/3D-REN/girlAlone2.svg", title: "Tech Hub" },
  { url: "4pencil-utils1/character001.svg", title: "Team Space" },
  { url: "studio1.jpeg", title: "Animation Studio" },
  { url: "4pencil-utils1/3D-REN/3D-art005.svg", title: "Modern Studio Space" },
  { url: "4pencil-utils1/3D-REN/3D-art006.svg", title: "Creative Workshop" },
  { url: "4pencil-utils1/3D-REN/3D-art007.svg", title: "Meeting Area" },
];

const ImageCarousel3D: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedImages, setDisplayedImages] = useState(images);

  const updateDisplayedImages = useCallback(() => {
    const newImages = [...images];
    const offset = currentIndex % images.length;
    const reorderedImages = [
      ...newImages.slice(offset),
      ...newImages.slice(0, offset)
    ];
    setDisplayedImages(reorderedImages);
  }, [currentIndex]);

  useEffect(() => {
    updateDisplayedImages();
  }, [currentIndex, updateDisplayedImages]);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= images.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
        }, 500);
        return prevIndex;
      }
      return nextIndex;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(images.length - 1);
        }, 500);
        return prevIndex;
      }
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-black/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8">
        <div
          className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex % images.length) * (100 / images.length)}%)`,
          }}
        >
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-16px)] relative rounded-xl overflow-hidden group"
              style={{
                aspectRatio: '3/4',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="w-full h-full transition-transform duration-500 group-hover:transform group-hover:rotate-y-12"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    {image.title}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 sm:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 sm:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel3D;