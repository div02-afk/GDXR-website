import { useState } from "react";
import "./pages/home.css";
import "./App.css"
import "./components/nav.css"
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Toggle from "./components/toggle";
function App() {

  return (
    <>
    <canvas id = "canvas">
    </canvas>
      <Toggle/>
      <Navbar />

      <Home />
      
    </>
  );
}

export default App;
