import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageLink: '', 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, price, imageLink } = formData;
  
    // Basic URL validation for image link
    const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))(?:\?.*)?$/i;
    if (!urlPattern.test(imageLink)) {
      toast.error('Please provide a valid image URL (PNG, JPG, JPEG, GIF, BMP).');
      return;
    }
  
    if (!title || !description || !price || !imageLink) {
      toast.error('Please fill in all fields and provide a valid image link.');
      return;
    }
  
    const project = { title, description, price, image: imageLink };
  
    try {
      const response = await fetch('https://tusharportfoliobackend.vercel.app/upload-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
  
      if (!response.ok) throw new Error(`Server responded with status ${response.status}`);
      const result = await response.json();
      
      if (result && result.message) {
        toast.success(result.message || 'Project uploaded successfully!');
      } else {
        toast.error('Unexpected response from the server.');
      }
  
      setFormData({
        title: '',
        description: '',
        price: '',
        imageLink: '',
      });
    } catch (error) {
      console.error('Error uploading project:', error);
      toast.error(`Failed to upload project: ${error.message}`);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Upload New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              required
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Price (in INR)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Image Link</label>
            <input
              type="text"
              name="imageLink"
              value={formData.imageLink}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#CBFE47] text-black font-semibold text-lg rounded-md hover:bg-green-400"
            >
              Upload Project
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Admin;