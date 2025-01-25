import React, { useState, useEffect } from 'react';
import ProjectSection from '../Components/ProjectSection.jsx';
import Modal from '../Pages/Modal.js';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://tusharportfoliobackend.vercel.app/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleBuyNow = async (price, downloadLink) => {
    try {
      const response = await fetch('https://tusharportfoliobackend.vercel.app/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price }),
      });
      const data = await response.json();

      const rzp = new window.Razorpay({
        key: process.env.RAZORPAY_KEY_ID ,
        order_id: data.id,
        handler: () => (window.location.href = downloadLink),
      });
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-black min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[#CBFE47] text-sm mb-2">CURATED WORK</p>
        <h1 className="text-5xl font-normal text-white text-center mb-2">Featured Projects</h1>
        <p className="text-center text-gray-400 mb-12">
          Browse through our featured projects and get started with your next!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectSection
              key={project.id}
              project={project}
              handleBuyNow={handleBuyNow}
              openModal={openModal}
            />
          ))}
        </div>
      </div>

      {/* Show Modal if it's open */}
      {isModalOpen && selectedProject && (
        <Modal
          closeModal={closeModal}
          projectDescription={selectedProject.description}
          projectImage={selectedProject.image}
          handleBuyNow={handleBuyNow}
          price={selectedProject.price}
          downloadLink={selectedProject.downloadLink}
        />
      )}
    </div>
  );
};

export default Project;