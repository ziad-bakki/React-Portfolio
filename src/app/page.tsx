"use client";

import { useState } from "react";
import "./globals.css";


export default function Home() {
  return (
    <main>

      <div className="landing-container">
      <h1 id="landing">
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
        Ziad Bakki
        <p> Incoming SWE Intern @Rocket Mortgage</p>
        
      </h1>
      <img 
        src="/arrowdown.svg"
        alt="arrowdown"
        id="arrowdown"
        />
      </div>
      <hr style={{backgroundColor:"black", height: "1px", border: "none"}} id="hr1"/>
      <div id="technologies">
        {/* <p>Here are my Favorite Technologies</p> */}
        <div className="technology" style={{flex: 2, textAlign: "center"}}> 1</div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}> 1</div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}> 1</div>
        
      </div>
      <div id="technologies">
        <div className="technology" style={{flex: 2, textAlign: "center"}}> 1</div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}> 1</div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}> 1</div>
      </div>
      <hr id="hr2"/>
      </main>
  );
}


