import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  ChevronDown,
  Film,
  Palette,
  BookOpen,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    name: "Animation",
    icon: <Film className="w-5 h-5" />,
    path: "/animation",
  },
  {
    name: "Illustrations",
    icon: <Palette className="w-5 h-5" />,
    path: "/illustrations",
  },
  {
    name: "Character Design",
    icon: <Palette className="w-5 h-5" />,
    path: "/Character-design",
  },
  
  {
    name: "Comics & Story Books",
    icon: <BookOpen className="w-5 h-5" />,
    path: "/comics-story-books",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  // Set active link based on the current URL
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 font-semibold text-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
             <Link
              to="/">
            <img
              src="/4pencil-utils1/logos/4pencils_Final.svg"
              alt="Logo"
              className="h-15 w-14"
            />
              </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8" style={{ fontFamily: "'', sans-serif" }}>
            <Link
              to="/"
              className={`${
                activeLink === "/" ? "text-[#FFD700]" : "text-[#FFD700]"
              } hover:text-[#FFD700] transition-colors`}
              onClick={() => setActiveLink("/")}
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-[#FFD700] hover:text-[#FFD700] transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-xl shadow-xl border border-sky-500 bg-black/35 backdrop-blur-sm overflow-hidden opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 text-xl">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`flex items-center space-x-3 px-4 py-3 ${
                      activeLink === service.path
                        ? "text-[#FFD700]"
                        : "text-[#FFD700]"
                    } hover:bg-[#FFD700] hover:text-black transition-colors`}
                    onClick={() => setActiveLink(service.path)}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Centered Links */}
            <div className="flex items-center justify-center space-x-8">
              {["Team", "Portfolio", "About", "Gallery", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={`${
                      activeLink === `/${item.toLowerCase().replace(" ", "-")}`
                        ? "text-[#FFD700]"
                        : "text-[#FFD700]"
                    } hover:text-[#FFD700] transition-colors`}
                    onClick={() =>
                      setActiveLink(`/${item.toLowerCase().replace(" ", "-")}`)
                    }
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden [#700] hover:text-[#FFD700] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[32rem] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-4 space-y-4 bg-black/95 backdrop-blur-sm rounded-b-xl">
            <Link
              to="/"
              className={`block px-4 py-2 ${
                activeLink === "/" ? "text-[#FFD700]" : "text-sky-500"
              } hover:text-[#FFD700] transition-colors`}
              onClick={() => {
                setActiveLink("/");
                setIsOpen(false);
              }}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-[#FFD700] hover:text-[#FFD700] transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`space-y-2 bg-black/50 transition-all duration-200 ${
                  servicesOpen ? "max-h-96 py-2" : "max-h-0 overflow-hidden"
                }`}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`flex items-center space-x-3 px-6 py-2 ${
                      activeLink === service.path
                        ? "text-[#FFD700]"
                        : "text-[#FFD700]"
                    } hover:text-[#FFD700] transition-colors`}
                    onClick={() => {
                      setActiveLink(service.path);
                      setIsOpen(false);
                    }}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {["Team", "Portfolio", "About", "Gallery", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className={`block px-4 py-2 ${
                    activeLink === `/${item.toLowerCase().replace(" ", "-")}`
                      ? "text-[#FFD700]"
                      : "text-sky-500"
                  } hover:text-[#FFD700] transition-colors`}
                  onClick={() => {
                    setActiveLink(`/${item.toLowerCase().replace(" ", "-")}`);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
