'use client';

import React, { useRef, useState, useEffect, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, OrbitControls, Text } from '@react-three/drei';

// Skills categories
const skills = {
  development: [
    "Javascript", "React", "NextJS", "TailwindCSS",
    "TypeScript", "NodeJS", "Express", "PostgreSQL", "REST API"
  ],
  devops: ["Git", "GitHub", "CI/CD", "Docker", "Jenkins", "Linux", "Vercel"],
  uiux: ["Figma", "Adobe XD", "Framer", "ShadCN-UI", "Threejs","Html","Css",]
};

const allSkills = Object.values(skills).flat();

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    ref.current.material.color.lerp(color.set(hovered ? '#00ffff' : 'white'), 0.1);
  });

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        fontSize={2.5}
        letterSpacing={-0.05}
        lineHeight={1}
        material-toneMapped={false}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {children}
      </Text>
    </Billboard>
  );
}

function Cloud({ words, radius = 20 }) {
  const wordPositions = useMemo(() => {
    const spherical = new THREE.Spherical();
    const count = Math.ceil(Math.sqrt(words.length));
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    return words.map((word, index) => {
      const i = Math.floor(index / count) + 1;
      const j = index % count;
      const pos = new THREE.Vector3().setFromSpherical(
        spherical.set(radius, phiSpan * i, thetaSpan * j)
      );
      return [pos, word];
    });
  }, [words, radius]);

  return wordPositions.map(([pos, word], i) => (
    <Word key={i} position={pos} children={word} />
  ));
}

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] text-white px-6 py-20 rounded-t-[7rem] justify-center items-center flex">
  <div className="max-w-7xl mx-auto">

    <h1 className="text-6xl font-bold tracking-wide text-left">About Me</h1>

    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

      <div className="flex-1 text-center lg:text-left">
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
          I&apos;m a Full Stack Developer passionate about crafting modern, performant web apps.
          My stack includes React, Next.js, TailwindCSS, and Three.js for the frontend, while I build robust APIs with Node.js, Express, and databases like PostgreSQL and MongoDB.
        </p>
        <div className='w-7 mx-auto lg:mx-0 mb-6'>
        <a
          href=""
          download
          className=" decoration-1 px-6 py-3 rounded-lg font-medium hover:text-[#0f0f1a] transition-all duration-300"
        >
          Download My CV {">>"}
        </a>
        </div>
        
      </div>

      {/* 3D Word Cloud */}
      <div className="flex-1 w-full h-[500px] lg:h-[550px]">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={['#0f0f1a', 0, 80]} />
          <Suspense fallback={null}>
            <group rotation={[0, 0, 0]}>
              <Cloud words={allSkills} radius={20} />
            </group>
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={2}
            enableZoom={false}
            enablePan={false}
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

    </div>
  </div>
</section>

  );
};

export default About;
