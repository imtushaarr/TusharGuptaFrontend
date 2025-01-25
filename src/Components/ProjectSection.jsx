import React from 'react';

import defaultImage from '../assets/images/ProjectLoad.png';

const ProjectSection = ({ project, handleBuyNow, openModal }) => {
  // Function to limit description to 10 words
  const getShortDescription = (description, wordLimit = 10) => {
    if (!description || typeof description !== 'string') return '';
    const words = description.split(' ');
    if (words.length > wordLimit) return words.slice(0, wordLimit).join(' ') + '...';
    return description;
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={project.image || defaultImage}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white truncate">{project.title}</h2>
        <p className="text-gray-500 mt-2 text-justify text-sm">
          {getShortDescription(project.description)}
        </p>
        <div className="flex flex-col justify-center mt-3 sm:flex-row gap-4 items-center">
          <button
            onClick={() => openModal(project)}
            className="text-black text-[14px] py-2 px-8 bg-[#CBFE47] rounded-md border-none shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-400 active:translate-y-0.5 hover:text-black"
          >
            View Case Study
          </button>
          <button
            onClick={() => handleBuyNow(project.price, project.downloadLink)}
            className="text-black text-[14px] py-2 px-8 bg-[#CBFE47] rounded-md border-none shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-400 active:translate-y-0.5 hover:text-black"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;