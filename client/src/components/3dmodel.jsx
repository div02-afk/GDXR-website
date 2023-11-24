import React, { useEffect ,useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls ,Sphere } from "@react-three/drei";


const Model = (rotation) => {
    const ref  = useRef();
    useEffect(() => {
    console.log("hello")
    try{
    console.log(ref.current.rotation);
    ref.current.rotation._y = rotation.rotation;}
    catch{
        console.log("error")
    }
    // ref.rotation.y = rotation;
},[])
  return (
    <div className="canvas-container">
      {/* Light is placed outside the Canvas */}

      <Canvas
        
        className="bg-black"
        camera={{ fov: 40, position: [40, 0, 0] }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <OrbitControls /> */}
        <directionalLight intensity={0.7} position={[10,10,10]} />
        <group > 
        <Sphere position={[4,3,-11]} args={[3,100,100]}> 
            <meshStandardMaterial attach="material" color="hotpink" />
        </Sphere>
        <Sphere args = {[5,100,100]} position={[10, 4 ,-15]} ref = {ref}>
            <meshStandardMaterial attach="material" color="orange"  />
        </Sphere>
        </group>
      </Canvas>
    </div>
  );
};

export default Model;
