import React from 'react';

import defaultImage from '../assets/images/ProjectLoad.png';

const Modal = ({ closeModal, projectDescription, projectImage, handleBuyNow, price, downloadLink }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
    <div className="bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Project Details</h2>

      {/* Full Project Image */}
      <div className="mb-4">
        <img
          src={projectImage || defaultImage}
          alt="Project"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Project Description */}
      <div className="text-gray-300 text-justify mb-4 max-h-96 overflow-y-auto scrollbar-hidden">
        <p>{projectDescription}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4 justify-between">
        <button
          onClick={closeModal}
          className="text-black text-[14px] py-2 px-8 bg-[#CBFE47] rounded-md border-none shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-400 active:translate-y-0.5 hover:text-black"
        >
          Close
        </button>

        <button
          onClick={() => handleBuyNow(price, downloadLink)}
          className="text-black text-[14px] py-2 px-8 bg-[#CBFE47] rounded-md border-none shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-400 active:translate-y-0.5 hover:text-black"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

export default Modal;