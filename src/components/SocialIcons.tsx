import React from 'react';
import { Facebook, LinkedinIcon, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div className="fixed right-16 md:right-24 lg:right-32 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      <Link
        to="https://www.facebook.com/NukecreativeSpace" target="_blank" rel="noopener noreferrer"
        className="p-2 bg-[#FFD700] hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-300"
      > <Facebook className="h-7 w-7 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
      </Link>
     
      <Link
        to="https://www.linkedin.com/company/4-pencils-animation"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#FFD700] hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-300"
      >
        <LinkedinIcon className="h-7 w-7 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
      </Link>
      <Link
        to="https://www.instagram.com/4_pencils_animations?igsh=a3UwamkzaW9peTRk&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-[#FFD700] hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-300"
      >
         <Instagram className="h-7 w-7 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
      </Link>
      <Link
        to="https://www.youtube.com/@4pencilsAnimations" 
        className="p-2 bg-[#FFD700] hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors duration-300"
      >
        <Youtube className="h-7 w-7 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
      </Link>
    </div>
  );
};

export default SocialIcons;