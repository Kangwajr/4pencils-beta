import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "../components/Navbar";

interface animationItem {
  id: number;
  title: string;
  category: string;
  type: "image" | "video";
  url: string;
  height: string;
  thumbnail?: string;
}

const animationItems: animationItem[] = [
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/ctEyIELC9UQ", // Updated to YouTube embed URL
    thumbnail: "4pencil-utils1/Gallery/microbial1.svg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Showcase",
    category: "3D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/ilGDshaUzwQ",
    thumbnail: "4pencil-utils1/thumbnails/lindiwe.svg",
    height: "h-96",
},
  {
    id: 3,
    title: "Character Design",
    category: "2D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/O9U4IGB0v3k",
    thumbnail: "4pencil-utils1/Gallery/med-search1.svg",
    height: "h-64",
  },
  {
    id: 4,
    title: "3D Animation Showcase",
    category: "3D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/r5WBf12Qkpc",
    thumbnail: "4pencil-utils1/thumbnails/Pos-systems.svg",
    height: "h-96",
},
{
  id: 5,
  title: "3D Animation Showcase",
  category: "3D Animation",
  type: "video",
  url: "https://www.youtube.com/embed/2-q7L4oSy8k",
  thumbnail: "4pencil-utils1/thumbnails/Support-services.svg",
  height: "h-96",
},
{
  id: 6,
  title: "",
  category: "3D Animation",
  type: "video",
  url: "https://www.youtube.com/embed/dcT9DMi5FCU",
  thumbnail: "4pencil-utils1/thumbnails/guy001.svg",
  height: "h-96",
},
{
  id: 7,
  title: "",
  category: "3D Animation",
  type: "video",
  url: "https://www.youtube.com/embed/ee8iDZy2Yjk",
  thumbnail: "/4pencil-utils1/ServicesImages/guy0.svg",
  height: "h-96",
},

  // Add more gallery items...
];

const animation: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<animationItem | null>(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
   
      <div className="min-h-screen bg-black px-24 sm:px-6 lg:px-8" style={{ fontFamily: "'', sans-serif", backgroundImage: "url('4pencil-utils1/3D-REN/girlAlone.svg')", }}>
        <Navbar />
        <div className="max-w-7xl mx-auto text-center bg-black/90">
          <h2 className="text-6xl font-bold text-sky-500">
            Our 2D/3D Animations
          </h2>
          <p className="mt-4 text-3xl text-[#FFD700]">
            Explore our diverse collection of artwork, animations, and videos
          </p>
        </div>

        <div className="mt-12">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="20px">
              {animationItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  {item.type === "video" ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {/* <div className="absolute bottom-0 left-0 right-0 p-4 text-sky-500">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#FFD700]">{item.category}</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      {/* Modal for viewing videos and images */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-black rounded-lg text-white p-6 max-w-3xl w-full">
              {/* <h3 className="text-2xl text-sky-500 mb-4">{selectedItem.title}</h3> */}
              <div className="aspect-video">
                {selectedItem.type === "video" ? (
                  <iframe
                    className="w-full h-full"
                    src={selectedItem.url}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img src={selectedItem.url} alt={selectedItem.title} className="w-full h-full object-contain" />
                )}
              </div>
              <button
                className="mt-4 px-4 py-2 bg-sky-500 text-black rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default animation;
