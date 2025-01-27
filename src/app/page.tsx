"use client";

import { useState } from "react";
import "./globals.css";


export default function Home() {
  return (
    <main >

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
        <p>🚀Incoming SWE Intern @Rocket Mortgage</p>
        <p>📍East Lansing, Michigan</p>
        
      </h1>
      <img 
        src="/arrowdown.svg"
        alt="arrowdown"
        id="arrowdown"
        />
      </div>
      <hr style={{backgroundColor:"", height: "1px", border: "none"}} id="hr1"/>
      {/* <p style={{textAlign:"center", fontWeight: 500, marginTop: "1rem"}}>Here are my Favorite Technologies</p> */}
      <div id="technologies">
        <div className="technology" style={{flex: 2, textAlign: "center"}}><img src="/pythonlogo.svg" id="tech_image"/>Python</div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}><img src="/tslogo.svg" id="tech_image"/>Typescript</div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}><img src="/csharplogo.svg" id="tech_image"/>C#</div>
        
      </div>
      <div id="technologies">
        <div className="technology" style={{flex: 2, textAlign: "center"}}><img src="/cpplogo.svg" id="tech_image"/>C++</div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}><img src="/giticon.svg" id="tech_image"/>Git</div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}><img src="/reactlogo.svg" id="tech_image"/>React</div>
      </div>
        
      </main>
  );
}


