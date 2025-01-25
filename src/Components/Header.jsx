import React, { useState } from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram, FaBars, FaTimes, FaGithub, FaDribbble } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="relative">
        <nav className="container mx-auto px-4 py-4">
          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-between items-center">
            {/* Left Section */}
            <div className="flex-1 flex items-center space-x-6 font-thin text-sm">
              {/* Use Link for routing */}
              <Link to="/" className="hover:text-[#CBFE47]">Home</Link>
              <Link to="/projects" className="hover:text-[#CBFE47]">Projects</Link>
              <Link to="/about" className="hover:text-[#CBFE47]">About</Link>
              <Link to="/contact" className="hover:text-[#CBFE47]">Lets Talk</Link>
            </div>

            {/* Middle Section */}
            <div className="flex-1 flex justify-center">
              <img src={logo} alt="Logo" className='w-20 h-auto'/>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex justify-end items-center space-x-3">
              <a href="https://linkedin.com/in/imtushaarr" className="hover:text-[#CBFE47]">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://github.com/imtushaarr" className="hover:text-[#CBFE47]">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://dribbble.com/imtushaarr" className="hover:text-[#CBFE47]">
                <FaDribbble className="text-lg" />
              </a>
              <a href="https://instagram.com/imtushaarr" className="hover:text-[#CBFE47]">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-between items-center">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>

            <img src={logo} alt="Logo" className='w-40 h-auto'/>

            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#CBFE47]">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-[#CBFE47]">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-[#CBFE47]">
                <FaDribbble />
              </a>
              <a href="#" className="hover:text-[#CBFE47]">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          {isOpen && (
            <div
              className="lg:hidden absolute top-full left-0 right-0 bg-black"
              onClick={() => setIsOpen(false)}
            >
              <div className="px-4 py-3 space-y-3">
                <Link to="/" className="block hover:text-[#CBFE47]">Home</Link>
                <Link to="/projects" className="block hover:text-[#CBFE47]">My Projects</Link>
                <Link to="/resume" className="block hover:text-[#CBFE47]">My Resume</Link>
                <Link to="/about" className="block hover:text-[#CBFE47]">My About</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;