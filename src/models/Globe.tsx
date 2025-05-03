"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GlobeModel = () => {
  const gltf = useGLTF("/Assets/Earth.glb");


  useFrame(({ clock }) => {
    gltf.scene.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return <primitive object={gltf.scene} scale={2} position-y={-1} />;
};

const GlobeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <GlobeModel />
      </Suspense>
    </Canvas>
  );
};

export default GlobeCanvas;
