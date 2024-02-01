import { useState, useEffect } from "react";
import "./components/nav.css";
// import "./App.css"
import "./main.css";

import "./pages/event.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Toggle from "./components/toggle";
import Genesis from "./pages/genesis";
import Gameathon from "./pages/gameathon";
import Model from "./components/3dmodel";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [rotation, setRotation] = useState(0);

  return (
    <>
      
        {/* <Model rotation = {`${rotation}`}/> */}
        <div className="parallax-layer meteor"></div>
        <BrowserRouter>
          <Toggle />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gameathon" element={<Gameathon />} />
            <Route path="/genesis" element={<Genesis />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <Event/> */}
        {/* <Home /> */}
      
    </>
  );
}

export default App;
