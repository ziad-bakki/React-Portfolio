"use client";

import "./globals.css"
import ReactDOM from "react-dom/client";

export default function Home() {
  return (
    <main>
      <h1> My Porfolio</h1>
      
    </main>
    
  );
 
}

const element = <h1>Test Line</h1>
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(element);
}


