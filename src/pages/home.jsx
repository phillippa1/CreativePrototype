import React, { useState } from "react";
import VoiceAssistant from "../Voice"; // Import the Voice component
import '../styles/Home.css'; 
import 'regenerator-runtime/runtime';

export default function Home() {
  const hello = "Creative Activities Homepage!";
  const [selectedButton, setSelectedButton] = useState(null); // State for selected button
  const [buttonColors, setButtonColors] = useState({}); // State for button colors

  const handleButtonClick = (page) => {
    console.log(`Navigating to ${page}`);

    // Reset the color of the previously selected button
    setButtonColors((prevColors) => {
      const newColors = { ...prevColors };
      // Reset the color of the previously selected button
      if (selectedButton) {
        newColors[selectedButton] = '#007bff'; // Default color
      }
      // Set the color of the newly selected button
      newColors[page] = newColors[page] === 'green' ? 'blue' : 'green'; // Toggle between two colors
      return newColors;
    });

    // Update the selected button
    setSelectedButton(page);
  };

  const buttons = [
    { label: "Music", page: "music" },
    { label: "Instructions", page: "instructions" },
    { label: "Inspiration", page: "inspiration" },
    { label: "Timers", page: "timers" },
    { label: "Notes", page: "notes" },
  ];

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p>Creative Activities Homepage!</p>
      <div className="button-container">
        {buttons.map((button) => (
          <button
            key={button.page}
            className={`button ${selectedButton === button.page ? 'active' : ''}`}
            style={{ backgroundColor: buttonColors[button.page] || '#007bff' }} // Default color
            onClick={() => handleButtonClick(button.page)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <VoiceAssistant onSelectButton={handleButtonClick} /> {/* Pass the function as a prop */}
    </>
  );
}