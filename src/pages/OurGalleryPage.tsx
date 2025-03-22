import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "../components/Navbar";


interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: "image" | "video";
  url: string;
  height: string;
  thumbnail?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "antimicrobial",
    category: "2D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/ctEyIELC9UQ", // Updated to YouTube embed URL
    thumbnail: "4pencil-utils1/Gallery/microbial1.svg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Demo",
    category: "3D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/ee8iDZy2Yjk",
    thumbnail: "4pencil-utils1/ServicesImages/guy0.svg",
    height: "h-96",
},
  {
    id: 3,
    title: " ",
    category: "",
    type: "image",
    url: "4pencil-utils1/IHOUSE/ClimateChange/environment_01.svg",
    height: "h-96",
  },
  {
    id: 19,
    title: "3D Animation Showcase",
    category: "3D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/ilGDshaUzwQ",
    thumbnail: "4pencil-utils1/thumbnails/lindiwe.svg",
    height: "h-96",
},
  {
    id: 6,
    title: "Med search Contraceptives",
    category: "2D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/O9U4IGB0v3k",
    thumbnail: "4pencil-utils1/Gallery/med-search1.svg",
    height: "h-64",
  },
  {
    id: 2,
    title: "3D Animation Showcase",
    category: "3D Animation",
    type: "video",
    url: "https://www.youtube.com/embed/r5WBf12Qkpc",
    thumbnail: "4pencil-utils1/thumbnails/Pos-systems.svg",
    height: "h-96",
},
{
  id: 2,
  title: "3D Animation Showcase",
  category: "3D Animation",
  type: "video",
  url: "https://www.youtube.com/embed/2-q7L4oSy8k",
  thumbnail: "4pencil-utils1/thumbnails/Support-services.svg",
  height: "h-96",
},
{
  id: 11,
  title: "",
  category: "3D Animation",
  type: "video",
  url: "https://www.youtube.com/embed/dcT9DMi5FCU",
  thumbnail: "",
  height: "h-96",
},
  {
    id: 4,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/comics/comic07.svg",
    height: "h-64",
  },
  {
    id: 5,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/ServicesImages/stealing.svg",
    height: "h-96",
  },
 
  {
    id: 7,
    title: "",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/pose2.svg",
    height: "h-64",
  },
  {
    id: 8,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/JAMES1.svg",
    height: "h-96",
  },
  {
    id: 9,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/pose3.svg",
    height: "h-96",
  },
  {
    id: 10,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/chi2.svg",
    height: "h-96",
  },
  {
    id: 11,
    title: "",
    category: "",
    type: "image",
    url: "/4pencil-utils1/ILLUSTRA/CAHOLICRELIEF1.svg",
    height: "h-96",
  },
  {
    id: 12,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/4pencilsIllustrations/albino1.svg",
    height: "h-96",
  },
  {
    id: 13,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/ILLUSTRA/Nira1.svg",
    height: "h-96",
  },
  {
    id: 14,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/comics/comic08.svg",
    height: "h-96",
  },
  {
    id: 15,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/comics/comic09.svg",
    height: "h-96",
  },
  {
    id: 16,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/pose1.svg",
    height: "h-96",
  },
  {
    id: 17,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/seg.svg",
    height: "h-96",
  },
  {
    id: 19,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/3D-REN/renders/space_girl1.svg",
    height: "h-96",
  },
  {
    id: 20,
    title: "",
    category: "",
    type: "image",
    url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/boy21.svg",
    height: "h-96",
  },
  {
    id: 21,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/comics/comic001.svg",
    height: "h-64",
  },
  {
    id: 22,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/comics/comic002.svg",
    height: "h-64",
  },
  {
    id: 23,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/comics/comic003.svg",
    height: "h-64",
  },
  {
    id: 24,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/comics/comic004.svg",
    height: "h-64",
  },
 {
    id: 10,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/comics/storyboard1.svg",
    height: "h-64",
  },
  {
    id: 10,
    title: "Character Design",
    category: "2D Animation",
    type: "image",
    url: "4pencil-utils1/comics/storyboard001.svg",
    height: "h-64",
  },
    {
       id: 4,
       title: "Character Design",
       category: "2D Animation",
       type: "image",
       url: "4pencil-utils1/3D-REN/3D-art.svg",
       height: "h-64",
     },
     {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/3D-REN/chi3.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/3D-REN/both11.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/3D-REN/girlAlone2.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/Illustration009.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/Illustration008.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/immigration1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/mobilemoney.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/nira2.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/Nira1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/FOODANDAGRICULTUREORGANIZATIONOFTHEUNITEDNATION1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/GIZ.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/ACTIONAID1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/fertilizer.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/cheshirehomes1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/Illustration0010.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/catholic1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/CAHOLICRELIEF1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/valentines-image.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/new-stuff.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/virtiligoGirl.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/village.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/SALOME-CHARACTER.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/mom-and-daughter.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/Indoor-shot.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/Illustration2 1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/Housecloseup.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/herokidsrich.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/herokids1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/cat1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/Backgroundandhouse1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/ILLUSTRA/4pencilsIllustrations/albino1.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "4pencil-utils1/IHOUSE/ClimateChange/environment_05.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "NIRAS INTERNATIONAL/Nira3.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "NIRAS INTERNATIONAL/Nira5.svg",
      height: "h-64",
    },
    {
      id: 4,
      title: "Character Design",
      category: "2D Animation",
      type: "image",
      url: "GIZ/giz2.svg",
      height: "h-64",
    },
    // Add other items here...
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  const isYouTubeVideo = (url: string) => url.includes("youtube.com/embed/");

  return (
    <>
      <div className="min-h-screen py-24 bg-black px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'', sans-serif", backgroundImage: "url('4pencil-utils1/IHOUSE/WILDLIFE.svg')", }}>
        <Navbar />
        <div className="max-w-7xl mx-auto text-center bg-black/90">
          <h2 className="text-6xl font-extrabold text-sky-500 ">
            Our Gallery
          </h2>
          <p className="mt-4 text-xl text-[#FFD700]">
            Explore our diverse collection of artwork, animations, and videos
          </p>
        </div>

        <div className="mt-12">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="20px">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="relative overflow-hidden transition-transform duration-300 cursor-pointer"
                >
                  {item.type === "video" ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full hover:scale-105 object-cover"
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
              <h3 className="text-2xl text-sky-500 mb-4">{selectedItem.title}</h3>
              <div className="aspect-video">
                {selectedItem.type === "video" && isYouTubeVideo(selectedItem.url) ? (
                  <iframe
                    className="w-full h-full"
                    src={selectedItem.url}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : selectedItem.type === "video" ? (
                  <video controls className="w-full h-full">
                    <source src={selectedItem.url} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
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

export default Gallery;
