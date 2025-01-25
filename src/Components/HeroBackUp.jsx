import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Squares from './Squares'; // Import the Squares component

const HeroSection = () => {
  useEffect(() => {
    const options = {
      strings: ["Software Developer.", "Freelancer.", "Founder of Kraf Technology."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={2}
          borderColor="#999"
          hoverFillColor="#CBFE47"
        />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4">
        {/* Status Badge */}
        <div className="flex items-center gap-2 bg-neutral-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <img src="https://avatar.iran.liara.run/public" alt="Profile" className="w-6 h-6 rounded-full" />
          <span className="text-green-400 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Available for opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl mb-4">
          Welcome to
          <br />
          my digital humble abode
        </h1>

        {/* Subheading with typed.js */}
        <p className="text-neutral-400 max-w-xl mb-8">
          I'm <span className="typed-text text-[#CBFE47]"></span>
          <br />
          I design beautifully simple things, and I love what I do.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2">
            👋 Let's talk
          </button>
          <button className="px-6 py-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-all flex items-center gap-2">
            Get Template <span className="ml-1">↗</span>
          </button>
        </div>

        {/* Brand Logos */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="flex justify-center items-center gap-8 md:gap-12 px-4 grayscale opacity-50">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Disney" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968396.png" alt="Microsoft" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/11189/11189054.png" alt="Duolingo" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/15484/15484303.png" alt="Netflix" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/138/138928.png" alt="Netflix" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/512/14777/14777106.png" alt="Netflix" className="h-10" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;