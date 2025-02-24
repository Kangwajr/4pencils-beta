import React from "react";
import { Link } from "react-router-dom";

interface ServicesItemProps {
  id: number;
  title: string;
  type: string;
  icon: React.ReactNode;
  url: string;
  galleryUrl: string;
  selected: number | null;
  onSelect: (id: number) => void;
}

const ServicesItem = ({
  id,
  title,
  url,
  onSelect,
}: ServicesItemProps) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
    >
      <img
        src={url}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex justify-center text-white">
            <Link
              to="/gallery"
              className="text-sky-500 text-2xl px-4 py-2 bg-[#FFD700] rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
