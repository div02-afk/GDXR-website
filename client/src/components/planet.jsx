import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { act, useFrame } from "@react-three/fiber";
import { Flex } from "@react-three/flex";
import {Bloom, EffectComposer, Noise, Vignette} from "@react-three/postprocessing";

  function Planet() {
  const ref = useRef();
  const modelPath = "/bodies.glb";
  const { nodes, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, ref);

  //   console.log(ref.current)
    
  useEffect(() => {
    console.log(actions);
    actions.revolve.setDuration(10);
    actions.revolve.repetitions = Infinity;
    actions.revolve.play();
  })

  return (
    <>
      <Flex justifyContent="right" >
        <primitive
          object={nodes.Scene}
          scale={0.5}
          posiition={[0,0,0]}
          ref={ref}
        />
      </Flex>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={1.2} height={400} />
        {/* <Noise opacity={0.02} /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
    </>
  );
}
  function Cloud() {
  const ref = useRef();
  const modelPath = "/clouds.glb";
  const { nodes, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, ref);

  //   console.log(ref.current)
    
  

  return (
    <>
      <Flex justifyContent="right" >
        <primitive
          object={nodes.Scene}
          scale={0.5}
          posiition={[0,0,0]}
          ref={ref}
        />
      </Flex>
      
    </>
  );
}


export {
  Planet,
  Cloud
}