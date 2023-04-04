import { Center, OrbitControls, Text, Text3D } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import NameText from "./three/testText"
import { Color } from "three"

export default function MainHero() {
  return (
    <div className="bg-white h-screen">
      <Canvas color="white">
        <Center>
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.2} />
          <directionalLight
            color="white"
            position={[0, 5, 10]}
            intensity={0.7}
          />
          <Center>
            <mesh position={[0, 0, -1.25 / 8]}>
              <Text3D
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                height={0.5}
                lineHeight={0.5}
                letterSpacing={-0.06}
                size={1.25}
                font="/DM Sans_Bold.json"
              >
                Maaz.
                <meshStandardMaterial
                  attach="material"
                  color="#6366f1"
                  roughness={0.5}
                  metalness={0.4}
                />
              </Text3D>
            </mesh>
            <mesh position={[-0.5, 1.5, 0]}>
              <Text3D
                lineHeight={0.5}
                letterSpacing={-0.06}
                scale={0.3}
                font="/DM Sans_Bold.json"
              >
                Hi! I'm
                <meshStandardMaterial
                  attach="material"
                  color="black"
                  roughness={0.5}
                  metalness={0.4}
                />
              </Text3D>
            </mesh>
          </Center>
        </Center>
      </Canvas>
    </div>
  )
}
