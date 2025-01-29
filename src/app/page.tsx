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
      top: screen.height,
      behavior: "smooth",
    });
    console.log("Arrow Clicker");
  }
  return (
    
    <main>
      <title>{"Ziad's Portfolio"}</title>
      <div className="background">
        <Effects /> 
      </div>
      
      <div className="landing-container">
      <h1 id="landing">
        <Image
          className = "icon-pic"
          // src="/linkedinimage.svg" 
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
      {/* <p style={{textAlign:"center", fontWeight: 500, marginTop: "1rem"}}>Here are my Favorite Technologies</p> */}
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
        <div className="project-div">
          <div className="project-container" style={{flex:1}}>s</div>
          <div className="project-container" style={{flex:1}}>s</div>
        </div>
        


      </div>
      

        
      </main>
  );
}







