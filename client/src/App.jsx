import { useState } from "react";
import "./components/nav.css"
import "./App.css"
// import "./pages/home.css"
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Toggle from "./components/toggle";
import Genesis from "./pages/genesis";
import Gameathon from "./pages/gameathon";
import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {

  return (
    <>
    <canvas id = "canvas">
    </canvas>
      
      <BrowserRouter>
      <Toggle/>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gameathon" element={<Gameathon />} />
          <Route path="/genesis" element={<Genesis />} />
        </Routes>
      </BrowserRouter>
      {/* <Event/> */}
      {/* <Home /> */}
      
    </>
  );
}

export default App;
