import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-blue-700 tracking-wide">
            Nava Youth Association
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-300 hover:text-blue-600 relative group ${
                  location.pathname === link.path ? "text-blue-700 font-semibold" : "text-gray-700"
                }`}
              >
                {link.name}
                <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-blue-600"></span>
              </Link>
            ))}
          </div>
          <button
            className="md:hidden focus:outline-none text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow px-4 pt-4 pb-6 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg transition-colors duration-300 ${
                location.pathname === link.path ? "text-blue-700 font-semibold" : "text-gray-700"
              } hover:text-blue-600`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
