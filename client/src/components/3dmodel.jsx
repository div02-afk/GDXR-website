import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";

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
    <div className="canvas-container">
      {/* Light is placed outside the Canvas */}

      <Canvas
        className="bg-black"
        camera={{ fov: 20, position: [0, 0, 100] }}
        style={{ width: "100vw", height: "100%" }}
      >
        
        
        <ambientLight intensity={4} />
        
        <directionalLight intensity={2.7} position={[0, 0, 10]}/>
          <Sphere position={[14, 6,0]} args={[5, 100, 100]} >
            <meshStandardMaterial attach="material" color="hotpink" />
          </Sphere>
          <Sphere args={[7, 100, 100]} position={[20, 7, 10]}>
            <meshStandardMaterial attach="material" color="orange" />
          </Sphere>
        
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={2.9} height={200} />
          {/* <Noise opacity={0.02} /> */}
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Model;