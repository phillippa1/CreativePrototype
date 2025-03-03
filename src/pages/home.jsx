// src/pages/Home.jsx
import * as React from "react";
import Motion from "../Motion"; // Import the Motion component

export default function Home() {
  const hello = "Hello React!";

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p>
        This starter gives you everything you need to start working on a new
        React project, and nothing more. If you're looking for something with
        more options included out of the box, try remixing
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