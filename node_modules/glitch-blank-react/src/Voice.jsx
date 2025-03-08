import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceAssistant = ({ onSelectButton }) => {
  const commands = [
    {
      command: "open *",
      callback: (website) => window.open(`http://${website.split(" ").join("")}`),
    },
    {
      command: "change background color to *",
      callback: (color) => (document.body.style.backgroundColor = color),
    },
    {
      command: ["music*", "Music*"], 
      callback: () => {
        console.log("Music command recognized");
        onSelectButton("music");
      },
    },
    {
      command: ["instructions*", "Instructions*"],
      callback: () => {
        console.log("Instructions command recognized");
        onSelectButton("instructions");
      },
    },
    {
      command: ["inspiration*", "Inspiration*"],
      callback: () => {
        console.log("Inspiration command recognized");
        onSelectButton("inspiration");
      },
    },
    {
      command: ["timers*", "Timers*"],
      callback: () => {
        console.log("Timers command recognized");
        onSelectButton("timers");
      },
    },
    {
      command: ["notes*", "Notes*"],
      callback: () => {
        console.log("Notes command recognized");
        onSelectButton("notes");
      },
    },
  ];

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (listening) {
      console.log("Listening...");
    }
    console.log("Transcript:", transcript); // Log the transcript
  }, [listening, transcript]);


  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn’t support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={stopListening}>Stop Listening</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceAssistant;