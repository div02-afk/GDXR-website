import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { act, useFrame } from "@react-three/fiber";
import { Flex } from "@react-three/flex";

export default function Planet() {
  const ref = useRef();
  const modelPath = "/revolve.glb";
  const { nodes, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, ref);

  //   console.log(ref.current)
    
  useEffect(() => {
    console.log(actions);
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
    </>
  );
}