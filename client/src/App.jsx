import { useState } from "react";
import "./components/nav.css"
import "./App.css"
import "./pages/home.css"
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Toggle from "./components/toggle";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Event from "./pages/event";
function App() {

  return (
    <>
    <canvas id = "canvas">
    </canvas>
      <Toggle/>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
      {/* <Event/> */}
      {/* <Home /> */}
      
    </>
  );
}

export default App;
