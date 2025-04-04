import React, { useState } from "react";
import VoiceAssistant from "../Voice"; // Import the Voice component
import Music from "./Music"; // Import the Music component
import Instructions from "./instructions"; // Import other components as needed
import Inspiration from "./inspiration"; // Import other components as needed
import Timers from "./timers"; // Import other components as needed
import Notes from "./notes"; // Import other components as needed
import '../styles/Home.css'; 
import 'regenerator-runtime/runtime';

export default function Home() {
  const hello = "Creative Activities Homepage!";
  const [selectedComponent, setSelectedComponent] = useState("home"); // State for selected component

  const handleButtonClick = (component) => {
    console.log(`Navigating to ${component}`);
    setSelectedComponent(component); // Update the selected component
  };

  const buttons = [
    { label: "Music", component: "music" },
    { label: "Instructions", component: "instructions" },
    { label: "Inspiration", component: "inspiration" },
    { label: "Timers", component: "timers" },
    { label: "Notes", component: "notes" },
  ];

  // Function to render the selected component
  const renderComponent = () => {
    switch (selectedComponent) {
      case "music":
        return <Music />;
      case "instructions":
        return <Instructions />;
      case "inspiration":
        return <Inspiration />;
      case "timers":
        return <Timers />;
      case "notes":
        return <Notes />;
      default:
        return (
          <div>
            <h1 className="title">{hello}</h1>
            <p>Creative Activities Homepage!</p>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="button-container">
        {buttons.map((button) => (
          <button
            key={button.component}
            className="button"
            onClick={() => handleButtonClick(button.component)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <VoiceAssistant onSelectButton={handleButtonClick} /> {/* Pass the function as a prop */}
      {renderComponent()} {/* Render the selected component */}
    </div>
  );
}