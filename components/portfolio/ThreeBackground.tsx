"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.12;
    meshRef.current.rotation.y += delta * 0.18;
  });

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.1}>
      <mesh ref={meshRef} position={[0.2, 0.1, 0]}>
        <icosahedronGeometry args={[1.35, 8]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#164e63"
          emissiveIntensity={0.6}
          distort={0.45}
          speed={2.2}
          roughness={0.2}
          metalness={0.35}
          transparent
          opacity={0.76}
        />
      </mesh>
    </Float>
  );
}

export function ThreeBackground() {
  return (
    <div className="h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.4], fov: 48 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 3]} intensity={1.2} color="#38bdf8" />
        <pointLight position={[-2, -1.5, 3]} intensity={1.1} color="#0ea5e9" />
        <FloatingShape />
      </Canvas>
    </div>
  );
}
