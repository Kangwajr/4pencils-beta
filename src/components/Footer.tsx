import { Facebook, LinkedinIcon, Instagram, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-2xl text-sky-500 py-12" style={{ fontFamily: "'Wonderkids', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-mega font-bold mb-4 hover:text-sky-400 transition-colors">FourPencils</h3>
            <p className="text-[#FFD700]">
              Crafting visual stories that inspire and engage.
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-semibold mb-4 text-sky-500 hover:text-sky-400 transition-colors">Services</h4>
            <ul className="space-y-2 text-[#FFD700]">
              <Link to="/animation" className="hover:text-sky-400 transition-colors">
                <li>2D Art</li>
              </Link>   
              <Link to="/animation" className="hover:text-sky-400 transition-colors">
                <li>3D Art</li>
              </Link>
              <Link to="/animation" className="hover:text-sky-400 transition-colors">
                <li>Animations</li>
              </Link>
              <Link to="/comics" className="hover:text-sky-400 transition-colors">
                <li>Comics</li>
              </Link>           
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-500 hover:text-sky-400 transition-colors">Company</h4>
            <ul className="space-y-2 text-[#FFD700]">
              <Link to="/about" className="hover:text-sky-400 transition-colors">
                <li>About Us</li>
              </Link>
              <Link to="/team" className="hover:text-sky-400 transition-colors">
                <li>Team</li>
              </Link>
              <Link to="#" className="hover:text-sky-400 transition-colors">
                <li>Careers</li>
              </Link>
              <Link to="/contact" className="hover:text-sky-400 transition-colors">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-500 hover:text-sky-400 transition-colors">Newsletter</h4>
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
            <p className="text-[#FFD700]">© 2024 wyo. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="https://www.facebook.com/NukecreativeSpace" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
              </Link>
              
              <Link to="https://www.linkedin.com/company/4-pencils-animation" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
              </Link>
              
              <Link to="https://www.youtube.com/@4pencilsAnimations" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5 text-sky-500 hover:text-sky-400 cursor-pointer transition-colors" />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;