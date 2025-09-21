"use client";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import AstronautModel from "@/components/AstronautModel";
import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "./loader";

export default function AstronautScene() {
  const isMobile = useMediaQuery({maxWidth: 853})
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Model */}
      <Suspense fallback={<Loader />}>
        <Float>
          <AstronautModel scale={isMobile && 0.1} position={isMobile && [0, -1, 0]} />
        </Float>
        <Rig />
      </Suspense>
      {/* Controls */}
      <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.8} />
    </Canvas>
  );
}

function Rig() {
    return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
