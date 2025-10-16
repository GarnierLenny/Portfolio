"use client";

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

type CubeData = {
  position: [number, number, number];
  color: string;
  label: string;
  targetHeight: number;
  currentHeight: number;
};

function EvolvingCube({ position, color, targetHeight, currentHeight }: CubeData) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      // Smooth transition to target height
      const diff = targetHeight - currentHeight;
      meshRef.current.position.y += diff * 0.05;

      // Subtle rotation
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={[position[0], currentHeight, position[2]]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1.5, 1.5, 1.5)]} />
        <lineBasicMaterial color="#ffffff" opacity={0.3} transparent />
      </lineSegments>
    </mesh>
  );
}

function Scene({ scrollProgress }: { scrollProgress: number }) {
  const [cubes, setCubes] = useState<CubeData[]>([
    {
      position: [-4, 0, 0],
      color: '#61dafb', // React blue
      label: 'Frontend',
      targetHeight: 0,
      currentHeight: 0,
    },
    {
      position: [0, 0, 0],
      color: '#68a063', // Node green
      label: 'Backend',
      targetHeight: 0,
      currentHeight: 0,
    },
    {
      position: [4, 0, 0],
      color: '#DD0031', // Mobile red
      label: 'Mobile',
      targetHeight: 0,
      currentHeight: 0,
    },
    {
      position: [-2, 0, -3],
      color: '#FFA500', // DevOps orange
      label: 'DevOps',
      targetHeight: 0,
      currentHeight: 0,
    },
    {
      position: [2, 0, -3],
      color: '#9B59B6', // Database purple
      label: 'Database',
      targetHeight: 0,
      currentHeight: 0,
    },
  ]);

  useEffect(() => {
    // Calculate heights based on scroll progress
    // Each 20% of scroll raises one cube
    setCubes((prevCubes) =>
      prevCubes.map((cube, index) => {
        const threshold = (index + 1) * 0.2;
        const targetHeight = scrollProgress >= threshold ? index * 2 + 2 : 0;
        return {
          ...cube,
          targetHeight,
        };
      })
    );
  }, [scrollProgress]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

      {cubes.map((cube, index) => (
        <EvolvingCube key={index} {...cube} />
      ))}

      <gridHelper args={[20, 20, '#444444', '#222222']} position={[0, -0.01, 0]} />
    </>
  );
}

export default function ThreeScene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 5, 12], fov: 50 }}
        style={{ background: '#0a0a0a' }}
      >
        <Scene scrollProgress={scrollProgress} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
