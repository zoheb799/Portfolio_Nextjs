"use client"
import React, { useEffect, useState, useRef, Suspense, memo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  OrbitControls,
  Environment,
  Grid
} from "@react-three/drei";
import dynamic from "next/dynamic";
import { easing } from "maath";
import Mail from "@/assets/Mail";
import { Github } from "lucide-react";
import LinkedIn from "@/assets/LinkedIn";

// 🌠 Dynamic imports (load these only when needed)
const EffectComposer = dynamic(() =>
  import("@react-three/postprocessing").then(mod => mod.EffectComposer), { ssr: false }
);
const Bloom = dynamic(() =>
  import("@react-three/postprocessing").then(mod => mod.Bloom), { ssr: false }
);
const ToneMapping = dynamic(() =>
  import("@react-three/postprocessing").then(mod => mod.ToneMapping), { ssr: false }
);

const roles = ["Full Stack Developer", "DevOps Engineer", "UI/UX Designer"];

const Homepage: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Canvas
          flat
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [-15, 0, 10], fov: 25 }}
        >
          <fog attach="fog" args={["black", 15, 22.5]} />
          <Suspense fallback={null}>
            <Stage
              intensity={0.5}
              environment="city"
              shadows={{
                type: "accumulative",
                bias: -0.001,
                intensity: Math.PI
              }}
              adjustCamera={false}
            >
              <Kamdo rotation={[0, Math.PI, 0]} />
            </Stage>
            <Grid
              renderOrder={-1}
              position={[0, -1.85, 0]}
              infiniteGrid
              cellSize={0.6}
              cellThickness={0.6}
              sectionSize={3.3}
              sectionThickness={1.5}
              sectionColor={[0.5, 0.5, 10]}
              fadeDistance={30}
            />
            <OrbitControls
              autoRotate
              autoRotateSpeed={3}
              enableZoom={false}
              makeDefault
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <EffectComposer disableNormalPass>
              <Bloom luminanceThreshold={2} mipmapBlur />
              <ToneMapping />
            </EffectComposer>
            <Environment background preset="sunset" blur={0.8} />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay UI */}
      <div className="relative z-10 w-full h-full flex items-center justify-between">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/3 pl-8 text-white text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold">
            Hey there! <br /> I&apos;m Khaja Zoheb Uddin
          </h1>

          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl lg:text-3xl font-medium text-gray-100"
          >
            {roles[index]}
          </motion.h2>
        </motion.div>

        <div className="w-1/3" />
        <div className="w-1/3 flex justify-end pr-8">
          <div className="flex flex-col items-center gap-10">
            {[
              {
                icon: <LinkedIn width={20} height={20} />,
                link: "https://www.linkedin.com/in/khaja-zoheb-uddin-b529701ba/"
              },
              {
                icon: <Mail width={20} height={20} />,
                link: "mailto:zohebuddin25@gmail.com"
              },
              {
                icon: <Github size={20} />,
                link: "https://github.com/zoheb799"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Homepage);

// === Kamdo GLTF Model ===
const Kamdo = memo((props: any) => {
  const head = useRef<any>();
  const stripe = useRef<any>();
  const light = useRef<any>();
  const { nodes, materials } = useGLTF(
    "Assets/s2wt_kamdo_industrial_divinities-transformed.glb"
  );

  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
    stripe.current.color.setRGB(2 + t * 20, 2, 20 + t * 50);
    easing.dampE(
      head.current.rotation,
      [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0],
      0.4,
      delta
    );
    light.current.intensity = 1 + t * 4;
  });

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body001.geometry}
        material={materials.Body}
      />
      <group ref={head}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.head001.geometry}
          material={materials.Head}
        />
        <mesh castShadow receiveShadow geometry={nodes.stripe001.geometry}>
          <meshBasicMaterial ref={stripe} toneMapped={false} />
          <pointLight ref={light} intensity={1} color={[10, 2, 5]} distance={2.5} />
        </mesh>
      </group>
    </group>
  );
});

useGLTF.preload("Assets/s2wt_kamdo_industrial_divinities-transformed.glb");
