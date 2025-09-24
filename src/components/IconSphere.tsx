"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

interface IconsGroupProps {
  icons: string[];
  radius?: number;
  scale?: number;
  speed?: number;
}

interface IconSphereProps {
  size?: number;         
  iconSize?: number;      
  rotationSpeed?: number;  
  icons?: string[];         
  radius?: number;          
}

function useModal() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const Modal = () => (
    modalContent && (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          zIndex: 1000,
          textAlign: "center",
          maxWidth: "300px",
          fontFamily: "Inter, sans-serif"
        }}
      >
        <p>{modalContent}</p>
        <button
          onClick={() => setModalContent(null)}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "#444",
            border: "none",
            borderRadius: "4px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    )
  );

  return { Modal, showModal: setModalContent };
}

function IconsGroup({ icons, radius = 5, scale = 1.2, speed = 0.003 }: IconsGroupProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { showModal } = useModal();
  const textures = useTexture(icons);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed;
    }
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, i) => {
        const material = new THREE.SpriteMaterial({ map: texture, color: 0xffffff });

        const phi = Math.acos(1 - (2 * (i + 0.5)) / icons.length);
        const theta = Math.sqrt(icons.length * Math.PI) * phi;
        const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);

        return (
          <sprite
            key={i}
            material={material}
            scale={[scale, scale, scale]}
            position={pos}
            onClick={() => showModal(`Clicked icon: ${icons[i]}`)}
          />
        );
      })}
    </group>
  );
}

export default function IconSphere({
  size = 20,
  iconSize = 1.2,
  rotationSpeed = 0.005,
  icons: propIcons,
  radius = 5
}: IconSphereProps) {
  const [loading, setLoading] = useState(true);
  const { Modal, showModal } = useModal();

  const defaultIcons = [
    "https://raw.githubusercontent.com/github/explore/main/topics/html/html.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png",
    "https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/tailwind/tailwind.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/ethereum/ethereum.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png",
    "https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/google-cloud/google-cloud.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/github/github.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/git/git.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/linux/linux.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/tensorflow/tensorflow.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/pytorch/pytorch.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/jupyter-notebook/jupyter-notebook.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/numpy/numpy.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/java/java.png",
    "https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/c/c.png",
    "https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/cpp/cpp.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/postgresql/postgresql.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/redis/redis.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/firebase/firebase.png",
    "https://raw.githubusercontent.com/github/explore/main/topics/solidity/solidity.png",
    "https://raw.githubusercontent.com/github/explore/refs/heads/main/topics/sql/sql.png",
  ];

  const icons = propIcons || defaultIcons;

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {loading ? (
        <div style={{ color: "white", textAlign: "center", paddingTop: "50vh" }}>
          Loading...
        </div>
      ) : (
        <>
          <Canvas
            camera={{ position: [0, 0, size], fov: 45 }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <IconsGroup icons={icons} radius={radius} scale={iconSize} speed={rotationSpeed} />
            <OrbitControls enableDamping enableZoom={false} target={[0, 0, 0]} /> {/* center fixed */}
          </Canvas>
          {/* <Modal /> */}
        </>
      )}
    </div>
  );
}
