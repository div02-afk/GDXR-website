import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";
import Planet from "./planet"
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
    <div className=" w-screen h-screen absolute z-2000">
      {/* Light is placed outside the Canvas */}

      <Canvas
        className="w-screen h-screen"
        camera={{ fov: 20,zoom:2,position:[0,0,30] }}
        
      >
          {/* <Sphere position={[0, 0,0]} args={[5, 100, 100]} >
            <meshStandardMaterial attach="material" color="hotpink" />
          </Sphere>
          <Sphere args={[7, 100, 100]} position={[5, 3, 10]}>
            <meshStandardMaterial attach="material" color="orange" />
          </Sphere> */}
        
        
        <ambientLight intensity={4} />
        <OrbitControls enableZoom={false}/>
        <directionalLight intensity={2.7} position={[0, 0, 10]}/>
        <group position={[3,1,0]} rotation={[0.04,-0.8,-0.15]}>
        <Planet/>
        </group>
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={3.9} height={300} />
          {/* <Noise opacity={0.02} /> */}
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Model;
