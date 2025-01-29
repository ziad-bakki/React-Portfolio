"use client";


import "./globals.css";
import Image from "next/image";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";




export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  function Effects() {
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#070619",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 45,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    );
  }

  function ArrowClick() {
    window.scrollTo({
      // top: screen.height-150,
      top: document.getElementById("technologies")?.offsetTop,
      behavior: "smooth",
    });
  }

  
  return (
    
    <main>
      <title>{"Ziad's Portfolio"}</title>
      <div className="background">
        <Effects /> 
      </div>
      <div className="navbar">
        <div className="content" style={{marginLeft: "5rem"}} onClick={() => {window.scrollTo({
          top: 0,
          behavior: "smooth",
        } )}}>Home</div>
      </div>
      
      <div className="landing-container">
      <h1 id="landing">
        <Image
          className = "icon-pic"
          src="/ziad.jpeg"
          alt="accountcircle" 
          height={200}
          width={200}
          />
          Ziad Bakki
          <div className="bio">
            <p id="bio">🚀Incoming SWE Intern @Rocket Mortgage</p>
            <p id="bio">📍East Lansing, Michigan</p>
          </div>
      </h1>
      <Image
        onClick={() => ArrowClick()}
        src="/arrowdown.svg"
        alt="arrowdown"
        id="arrowdown"
        width={1}
        height={1}
        style={{
          width: "3rem",
          height: "3rem",
        }}
        />
      </div>
      <hr style={{backgroundColor:"", height: "1px", border: "none"}} id="hr1"/>
      <div id="technologies">
        <div className="technology" style={{flex: 2, textAlign: "center"}}>
          <Image src="/pythonlogo.svg" id="tech_image" alt="python-logo" width={50} height={50}/>Python
        </div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}>
          <Image src="/tslogo.svg" id="tech_image" alt="typescript-logo"  width={50} height={50}/>Typescript
        </div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}>
          <Image src="/csharplogo.svg" id="tech_image" alt="c#-logo"  width={50} height={50}/>C#
        </div>
      </div>
      <div id="technologies">
        <div className="technology" style={{flex: 2, textAlign: "center"}}>
          <Image src="/cpplogo.svg" id="tech_image" alt="c++ logo"  width={50} height={50}/>C++
        </div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}>
          <Image src="/giticon.svg" id="tech_image" alt="git logo"  width={50} height={50}/>Git
        </div>
        <div className="technology" style={{flex: 2, textAlign: "center"}}>
          <Image src="/reactlogo.svg" id="tech_image" alt="react logo"  width={50} height={50}/>React
        </div>
      </div>
      
      <br/>
      <div className="projects">
        <h1 className="title">Projects</h1>
        <hr id="hr2"/>
        <br/>
        <div className="project-div">
          <div onClick={() => {window.open("https://github.com/ziad-bakki/Tanweer-Energy-Solutions")}} className="project-container" style={{flex:1}}>
            <Image id="project-image" width={50} height={50} src={"/tanweerlogo3.svg"} alt="tanweerlogo"/>
            <div style={{marginTop:"2rem"}}>Solar Solutions Website</div>
          </div>
          <div onClick={() => {window.open("https://github.com/ziad-bakki/GymAI")}} className="project-container" style={{flex:1}}>
            <Image id="project-image" width={50} height={50} src={"/gymailogo2.svg"} alt="gymnasiumlogo"/>
            <div style={{marginTop:"2rem"}}>AI Reinforcement Learning</div>
          </div>
          <div onClick={() => {window.open("https://github.com/ziad-bakki/online-python-compiler")}} className="project-container" style={{flex:1}}>
            <Image id="project-image" width={50} height={50} src={"/pythonlogo.svg"} alt="pythonlogo"/>
            <div style={{marginTop:"2rem"}}>Online Python Compiler</div>
          </div>
        </div>
        <div className="project-div">
          
          <div onClick={() => {window.open("https://github.com/ziad-bakki/Nasa-Image-Parser")}} className="project-container" style={{flex:1}}>
            <Image id="project-image" width={50} height={50} src={"/nasalogo.svg"} alt="nasalogo"/>
            <div style={{marginTop:"2rem"}}>NASA Daily Image Parser</div>
          </div>
          <div onClick={() => {window.open("https://github.com/ziad-bakki/canadian-experience")}} className="project-container" style={{flex:1}}>
            <Image id="project-image" width={50} height={50} src={"/sparty2.png"} alt="canadianexperience"/>
            <div style={{marginTop:"2rem"}}>Dynamic Machine Animation for Canadian Experience</div>
          </div>




        </div>
        


      </div>
      

        
      </main>
  );
}







