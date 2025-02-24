import React from 'react';
import { X, Star, Calendar, User, Clock } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    category: string;
    image: string;
    rating: number;
    reviews: number;
    description: string;
  };
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-black rounded-xl w-full max-w-4xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-sky-500 hover:text-[#FFD700] z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols- md:grid-cols-2">
          <div className="relative aspect-video md:aspect-auto">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
              <h2 className="text-4xl font-bold text-sky-500">{project.title}</h2>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="hidden md:block mb-6">
              <h2 className="text-4xl font-bold text-sky-500 mb-2">{project.title}</h2>
              <span className="inline-block px-3 py-1 text-sm text-sky-500 bg-sky-500/10 rounded-full">
                {project.category}
              </span>
            </div>

            <div className="flex items-center space-x-1 mb-6 text-2xl">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-white font-semibold">{project.rating}</span>
              <span className="text-gray-400 text-sm">({project.reviews} reviews)</span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-semibold text-sky-500 mb-2">About this project</h3>
                <p className="text-[#FFD700] text-2xl">{project.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-2xl">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-sky-500">Released 2024</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <User className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-sky-500">Team of 10</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-sky-500">6 months</span>
                </div>
              </div>

              {/* <button className="w-full px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors duration-300">
                Watch Demo
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;