import React from "react";

const Footer = () => {
  return (
    <footer id="footer_component" className="w-full bg-[#000000] py-4 pt-4 relative">
      {/* Top Line with Blur Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-transparent to-gray-600/50 backdrop-blur-sm "></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Side */}
          <div className="text-xs text-gray-400">
            Created by <span className="text-white">@imtushaarr</span> ×{" "}
            <span className="text-white">@kraftechnology</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4 text-xs">
              <a
                href="https://github.com/imtushaarr"
                className="text-white transition-colors duration-300 hover:text-[#CBFE47]"
              >
                GitHub <i class="fa-solid fa-location-arrow"></i>
              </a>
              <a
                href="https://linkedin.com/in/imtushaarr"
                className="text-white transition-colors duration-300 hover:text-[#CBFE47]"
              >
                LinkedIn <i class="fa-solid fa-location-arrow"></i>
              </a>
              <a
                href="https://instagram.com/imtushaarr"
                className="text-white transition-colors duration-300 hover:text-[#CBFE47]"
              >
                Instagram <i class="fa-solid fa-location-arrow"></i>
              </a>
              <a
                href="https://youtube.com/c/kraftechnology"
                className="text-white hover:text-[#CBFE47] transition-colors duration-300"
              >
                YouTube <i class="fa-solid fa-location-arrow"></i>
              </a>
              <a
                href="https://dribble.com/imtushaarr"
                className="text-white hover:text-[#CBFE47] transition-colors duration-300"
              >
                Dribble <i class="fa-solid fa-location-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;