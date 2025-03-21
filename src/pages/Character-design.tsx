import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "../components/Navbar";

interface characterDesignItems {
  id: number;
  title: string;
  category: string;
  type: "image" | "video";
  url: string;
  height: string;
  thumbnail?: string;
}

const characterDesignItem: characterDesignItems[] = [
  {
    id: 1,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/boy.svg", // Updated to YouTube embed URL
    height: "h-64",
  },
  {
    id: 2,
    title: "2D Animation Reel",
    category: "",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/space_girl1.svg",
    height: "h-96",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/3D-art005.svg",
    height: "h-64",
  },
  {
    id: 3,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/ServicesImages/guy0.svg",
    height: "h-64",
  },
  
  {
    id: 3,
    title: "",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/character001.svg",
    height: "h-64",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/3D-art002.svg",
    height: "h-64",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/pose4.svg",
    height: "h-64",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/3D-art007.svg",
    height: "h-64",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: " 4pencil-utils1/ILLUSTRA/4pencilsIllustrations/SALOME-CHARACTER.svg",
    height: "h-64",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/villainlady1.svg",
    height: "h-64",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/3D-arts003.svg",
    height: "h-96",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/3D-art006.svg",
    height: "h-64",
  },
  {
    id: 4,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/3D-art001.svg",
    height: "h-64",
  },
 
  
 
 
  // Add more gallery items...
];

const characterDesign: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<characterDesignItems | null>(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="min-h-screen py-24 bg-black px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'', sans-serif", backgroundImage: "url('4pencil-utils1/3D-REN/girlAlone.svg')" }}>
      
        <Navbar />
        <div className="max-w-7xl mx-auto text-center bg-black/90">
          <h2 className="text-6xl font-bold text-sky-500">
            Character Design
          </h2>
          <p className="mt-4 text-3xl text-[#FFD700]">
            Explore our diverse collection of designs
          </p>
        </div>

        <div className="mt-12">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="20px">
              {characterDesignItem.map((item) => (
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

export default characterDesign;
