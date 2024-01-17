import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";
import {Planet,Cloud} from "./planet"
const Model = (rotation) => {
  // const ref  = useRef();
  // useEffect(() => {
  // console.log("hello")
  // try{
  // console.log(ref.current.rotation);
  // ref.current.rotation._y = rotation.rotation;}
  // catch{
  //     console.log("error")
  // }
  // ref.rotation.y = rotation;
  // },[])
  return (
    <div className="absolute -z-30  xl:ml-96" style={{width:"100vw",height:"100vh"}}>
      
      <Canvas
        className="w-full h-full"
        camera={{ fov: 20,zoom:3,position:[0,0,30] }}
        
      >
      
        <ambientLight intensity={4} />
        <OrbitControls enableZoom={false}/>
        <directionalLight intensity={2.7} position={[0, 0, 10]}/>
        <group position={[0,0.5,0]} rotation={[0.04,-0.8,-0.15]}>
        <Planet/>
        <Cloud/>
        </group>
        
      </Canvas>
    </div>
  );
};

export default Model;
