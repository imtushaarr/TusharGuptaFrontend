import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Pages/Home";
import CustomCursor from "./Components/CustomCursor";
import ContactSection from "./Components/ContactSection.jsx";
import Project from "./Pages/Project.js";
import About from "./Pages/About.js";
import Admin from "./Pages/Admin.js";
import Loader from "../src/Components/Loader.jsx";
import Footer from "./Components/Footer.jsx";
import BackgroundMusic from "./assets/sounds/background-music.mp3"; 

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false); 
  const [hasInteracted, setHasInteracted] = useState(false); 
  const audioRef = useRef(null); 

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    const enableAudio = () => {
      setHasInteracted(false);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("keydown", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && hasInteracted) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Audio play failed:", error);
        });
      }
    }
  }, [isMuted, hasInteracted]);

  return (
    <Router>
      <div style={{ fontFamily: '"Outfit", serif' }}>
        {loading && <Loader />}
        <audio ref={audioRef} src={BackgroundMusic} loop />
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
          <button
            onClick={() => setIsMuted(!isMuted)}
            style={{
              padding: "10px 20px",
              backgroundColor: isMuted ? "#f44336" : "#CBFE47",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
        <CustomCursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;