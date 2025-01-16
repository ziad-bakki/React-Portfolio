"use client";

import "./globals.css";


export default function Home() {
  return (
    <main>
      <h1>
        <img 
          className = "icon-pic"
          src="/accountcircle.svg" 
          alt="accountcircle" 
          style={{
            width: "1em", // Scale image to fit text size
            height: "1em",
            marginRight: "0.5em", // Add space between the image and text
            fontSize: "2em",
            margin: "0",
          }} 
        />
        Ziad Bakki
      </h1>


    </main>
  );
}
