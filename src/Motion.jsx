// src/Motion.jsx
import React, { useEffect, useState } from "react";

const Motion = () => {
  const [highlightedButton, setHighlightedButton] = useState(null);

  useEffect(() => {
    const handleHeadTracking = (event) => {
      // Logic to determine which button to highlight based on head position
      // For simplicity, let's assume we highlight button 1 or button 2
      if (event.gamma > 10) {
        setHighlightedButton(1); // Head turned right
      } else if (event.gamma < -10) {
        setHighlightedButton(2); // Head turned left
      } else {
        setHighlightedButton(null); // No highlight
      }
    };

    window.addEventListener("deviceorientation", handleHeadTracking);

    return () => {
      window.removeEventListener("deviceorientation", handleHeadTracking);
    };
  }, []);

  return (
    <div>
      <button style={{ backgroundColor: highlightedButton === 1 ? 'yellow' : 'white' }}>
        Button 1
      </button>
      <button style={{ backgroundColor: highlightedButton === 2 ? 'yellow' : 'white' }}>
        Button 2
      </button>
    </div>
  );
};

export default Motion;