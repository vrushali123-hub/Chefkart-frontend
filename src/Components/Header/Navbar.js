
import { useState } from "react";
import { FaHamburger, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <header className="fixed top-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-5">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoErvIxAIWybuxDrbVZuRTz1B3ZaYWZTSqMw&s"
            alt="Logo"
            className="w-48 h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center text-base justify-center space-x-5">
          <div className="relative">
            <button
              className="flex items-center text-2xl hover:text-orange-500 hover:underline"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              Our Services
              <span className="ml-2">
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-60 bg-white text-black shadow-lg rounded-md z-50">
                <Link
                  to="/cook-for-month"
                  className="px-4 py-2 block text-lg font-bold hover:text-orange-500"
                >
                  Cook for a Month <FaChevronRight className="inline ml-2" />
                </Link>
                <hr />
                <Link
                  to="/one-time-cook"
                  className="px-4 py-2 block text-lg font-bold hover:text-orange-500"
                >
                  Chiefit: One Time Cook <FaChevronRight className="inline ml-2" />
                </Link>
                <hr />
                <Link
                  to="/chef-for-party"
                  className="px-4 py-2 block text-lg font-bold hover:text-orange-500"
                >
                  Chef for Party <FaChevronRight className="inline ml-2" />
                </Link>
              </div>
            )}
          </div>

          <Link to="/join-chefkart" className="text-2xl hover:underline">
            ChefKart से जुड़ें
          </Link>
          <Link to="/chef-search" className="text-2xl hover:underline">
            Cooks Near Me
          </Link>
          <Link to="/contact">
            <button className="bg-orange-500 py-2 px-6 rounded-lg text-white text-2xl hover:bg-orange-600">
              Contact Us
            </button>
          </Link>
          <Link to="/register-chef">
            <button className="py-2 px-6 rounded-lg text-white text-2xl">
              Registration as the chef
            </button>
          </Link>
        </nav>

        {/* Hamburger Menu */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FaHamburger className="w-10 h-10" />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-3/4 bg-white text-black shadow-lg z-50">
          <div className="flex flex-col p-5 space-y-4">
            <button
              className="self-end focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <GiTireIronCross className="w-10 h-10 text-black" />
            </button>

            <Link to="/about" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>
              About Us
            </Link>
            <hr />
            <Link to="/blog" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>
              Blog
            </Link>
            <hr />
            <Link to="/career" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>
              Career
            </Link>
            <hr />
            <Link to="/investor-relation" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>
              Investor Relations
            </Link>
            <hr />
            <Link to="/testimonial" className="text-lg font-bold hover:text-orange-500" onClick={toggleMenu}>
              Testimonials
            </Link>
            <hr />

            <button
              className="mt-4 inline-flex items-center bg-orange-500 py-2 px-4 rounded text-white text-lg"
              onClick={toggleMenu}
            >
              Contact Us <FaChevronRight className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


