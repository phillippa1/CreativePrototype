// src/pages/Home.jsx
import * as React from "react";
import Motion from "../Motion"; // Import the Motion component

export default function Home() {
  const hello = "Hello React!";

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p>
        Project for reading in recipes.
        {" "}
        <a href="https://glitch.com/edit/#!/remix/glitch-hello-react">
          ~glitch-hello-react
        </a>
        .
      </p>
      <Motion /> {/* Add the Motion component here */}
    </>
  );
}