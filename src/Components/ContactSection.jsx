import React, { useState } from "react";
import { db, addDoc, collection } from "../firebase";

const ContactSection = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const [loading, setLoading] = useState(false);  // New loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }
  
    setLoading(true);  // Set loading to true
  
    try {
      // Add the form data to Firestore
      await addDoc(collection(db, "contacts"), formData);
  
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setStatus("Message sent successfully!");
    } catch (error) {
      setStatus("Error sending message. Please try again.");
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);  // Reset loading state after operation
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black relative py-0 px-4 m-0">
      <div className="max-w-7xl mx-auto relative z-10 pb-3">
        {/* Section Header */}
        <div className="bg-black py-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-[#CBFE47] text-sm mb-2 tracking-wide uppercase">
              LET'S CONNECT
            </p>
            <h1 className="text-5xl font-normal text-white text-center mb-8">
              Contact Me
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl text-white mb-3">
              Let’s Create Something Amazing Together
            </h2>
            <p className="text-neutral-400 mb-7 leading-relaxed">
              Have a project in mind? Let’s discuss how we can bring your vision to life through thoughtful design and strategic thinking.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="border border-neutral-800 rounded-2xl p-6 backdrop-blur-sm hover:border-neutral-700 transition-all">
                <h3 className="text-white mb-4 text-lg">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-400/10 rounded-xl flex items-center justify-center">
                      <span className="text-[#CBFE47]"><i class="fa-solid fa-location-dot"></i></span>
                    </div>
                    <div>
                      <p className="text-neutral-400">Email</p>
                      <p className="text-white font-medium">tusharguptagps@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-400/10 rounded-xl flex items-center justify-center">
                      <span className="text-[#CBFE47]"><i class="fa-solid fa-phone"></i></span>
                    </div>
                    <div>
                      <p className="text-neutral-400">Phone</p>
                      <p className="text-white font-medium">+91 9893741437</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-400/10 rounded-xl flex items-center justify-center">
                      <span className="text-[#CBFE47]"><i class="fa-brands fa-instagram"></i></span>
                    </div>
                    <div>
                      <p className="text-neutral-400">Instagram</p>
                      <p className="text-white font-medium">instagram.com/imtushaarr</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-400/10 rounded-xl flex items-center justify-center">
                      <span className="text-[#CBFE47]"><i class="fa-brands fa-linkedin"></i></span>
                    </div>
                    <div>
                      <p className="text-neutral-400">Linkedin</p>
                      <p className="text-white font-medium">linkedin.com/in/imtushaarr</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-400/10 rounded-xl flex items-center justify-center">
                      <span className="text-[#CBFE47]"><i class="fa-brands fa-github"></i></span>
                    </div>
                    <div>
                      <p className="text-neutral-400">GitHub</p>
                      <p className="text-white font-medium">github.com/imtushaarr</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-400/10 rounded-xl flex items-center justify-center">
                      <span className="text-[#CBFE47]"><i class="fa-brands fa-x-twitter"></i></span>
                    </div>
                    <div>
                      <p className="text-neutral-400">X-Twitter</p>
                      <p className="text-white font-medium">x.com/imtushaarr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="border border-neutral-800 rounded-2xl p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="Project subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#CBFE47] text-black rounded-xl px-6 py-3 font-medium hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                {loading && <span className="animate-spin"><i class="fa-solid fa-spinner"></i></span>}  {/* Optional: show spinner */}
              </button>
            </form>
            {status && <p className="mt-4 text-white text-center">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;