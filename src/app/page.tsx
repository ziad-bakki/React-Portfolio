"use client";

import { useState } from "react";
import "./globals.css";


export default function Home() {
  return (
    <main>
      <h1>
        <img 
          className = "icon-pic"
          src="/linkedinimage.svg" 
          alt="accountcircle" 
          style={{
            width: "5em", // Scale image to fit text size
            height: "5em",
            marginRight: "0.5em", // Add space between the image and text
            fontSize: "2em",
            margin: "0",
            borderRadius: "180px",
            marginBottom: "0.5em",
          }} 
        />
        Ziad Bakki - Software Engineer
      </h1>
          

    </main>
  );
}


