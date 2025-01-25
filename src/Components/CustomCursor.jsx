// src/Components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '20px',
        height: '20px',
        backgroundColor: '#CBFE47',
        borderRadius: '50%',
        pointerEvents: 'none', // Ensures the cursor does not block interactions
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        mixBlendMode: 'difference', // Makes it visually distinct on light/dark backgrounds
      }}
    ></div>
  );
};

export default CustomCursor;