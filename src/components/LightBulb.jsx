import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Lightbulb = () => {
  const { scene } = useGLTF("lightbulb2.glb");
  const [isHovered, setIsHovered] = useState(false);
  const lightRef = useRef();

  const handlePointerOver = () => setIsHovered(true);
  const handlePointerOut = () => setIsHovered(false);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.intensity = isHovered ? 5 : 1;
    }
  });

  return (
    <group
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      scale={[1.5, 1.5, 1.5]} 
    >
      <primitive object={scene} />
      <pointLight
        ref={lightRef}
        position={[0, 2, 0]} 
        intensity={1} 
        distance={5}
        decay={2}
      />
    </group>
  );
};

export default Lightbulb;