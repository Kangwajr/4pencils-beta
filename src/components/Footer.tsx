import { Facebook, LinkedinIcon, Instagram, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-2xl text-sky-500 py-12 "  style={{
      fontFamily: "'', sans-serif",
      backgroundImage: "url('4pencil-utils1/ILLUSTRA/Illustration008.svg')",
      backgroundPosition: "center", // Centers the background image
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      backgroundSize: "cover", // Makes the image cover the entire background
    }}>
     
      <div className="container mx-auto px-10 bg-black/90" >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="py-6">
            <h4 className="text-4xl font-semibold mb-4 text-sky-500 hover:text-sky-400 transition-colors">Services</h4>
            <ul className="space-y-2 text-[#FFD700]">
              <Link to="/animation" className="hover:text-sky-400 transition-colors">
                <li>Animations</li>
              </Link>   
              <Link to="/Illustrations" className="hover:text-sky-400 transition-colors">
                <li>Illustrations</li>
              </Link>
              <Link to="/character-design" className="hover:text-sky-400 transition-colors">
                <li>Character Design</li>
              </Link>
              <Link to="/comics" className="hover:text-sky-400 transition-colors">
                <li>Comics & Storyboards</li>
              </Link>           
            </ul>
          </div>
          <div>
            <div className="py-6">
              <h4 className="text-4xl font-semibold mb-4 text-sky-500 hover:text-sky-400 transition-colors">Company</h4>
            <ul className="space-y-2 text-[#FFD700]">
              <Link to="/about" className="hover:text-sky-400 transition-colors">
                <li>About Us</li>
              </Link>
              <Link to="/gallery" className="hover:text-sky-400 transition-colors">
                <li>Gallery</li>
              </Link>
              <Link to="/portfolio" className="hover:text-sky-400 transition-colors">
                <li>portfolio</li>
              </Link>
              <Link to="/contact" className="hover:text-sky-400 transition-colors">
                <li>Contact</li>
              </Link>
            </ul>
            </div>
            
          </div>
          <div className="py-6">
            <h4 className="text-4xl font-semibold mb-4 text-sky-500 hover:text-sky-400 transition-colors">Newsletter</h4>
            <p className="text-[#FFD700] mb-4">
              Subscribe to our newsletter for updates and art tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full bg-white text-black border-0"
              />
              <button className="bg-[#FFD700] hover:bg-[#FFC700] px-4 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#FFD700]">© 2024 4pencils. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0 pb-10">
              <Link to="https://www.facebook.com/NukecreativeSpace" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-7 w-7 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
              </Link>
              
              <Link to="https://www.linkedin.com/company/4-pencils-animation" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-7 w-7 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
              </Link>
              <Link to="https://www.instagram.com/4_pencils_animations?igsh=a3UwamkzaW9peTRk&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-7 w-7 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
              </Link>
              
              <Link to="https://www.youtube.com/@4pencilsAnimations" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-7 w-7 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;