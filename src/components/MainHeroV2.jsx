import { Center, OrbitControls, Shadow, Stars, Text3D } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import NameText from "./three/testText"

export default function MainHero() {
  return (
    <div className="bg-black h-screen">
      <Canvas>
        <Center>
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.4} />
          <directionalLight
            color="white"
            position={[0, 5, 5]}
            intensity={0.7}
          />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Stars saturation={1} />
          {/* Floor */}
          <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshBasicMaterial attach="material" color="white" />
          </mesh>
          <mesh position={[-1, -0.95, 0]} rotation={[0, Math.PI / -4, 0]}>
            <NameText />
            <Shadow />
          </mesh>
        </Center>
      </Canvas>
    </div>
  )
}
