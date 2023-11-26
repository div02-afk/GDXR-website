import { useState,useEffect } from "react";
import "./components/nav.css"
import "./App.css"
// import "./pages/home.css"
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Toggle from "./components/toggle";
import Genesis from "./pages/genesis";
import Gameathon from "./pages/gameathon";
import Model from "./components/3dmodel";
import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {
  
  const [rotation ,setRotation] = useState(0);
  useEffect(() => {

    const handleScroll = () => {
      const rot = window.scrollY / 10;
      setRotation(rot+rotation);
      // console.log((window.scrollY));
      
      // console.log(scale)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotation]);
  return (
    <>
    
    <canvas id = "canvas">
    
    </canvas>
    <div className="parallax-layer meteor"></div>
      <BrowserRouter>
      <Model rotation = {`${rotation}`}/>
    
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
