import { Center, Text3D } from "@react-three/drei"
import React from "react"

export default function MainText() {
  return (
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
          font="./DM Sans_Bold.json"
        >
          Maaz
          <meshStandardMaterial
            attach="material" // color="#6366f1"
            color="#8b5cf6"
            roughness={0.6}
            metalness={0.2}
          />
        </Text3D>
      </mesh>
      <mesh position={[-0.5, 1.5, 0]}>
        <Text3D
          lineHeight={0.5}
          letterSpacing={-0.04}
          scale={0.3}
          font="/DM Sans_Bold.json"
        >
          Hi! I'm
          <meshStandardMaterial
            attach="material"
            color="#1e1b4b"
            roughness={0.8}
            metalness={0.2}
          />
        </Text3D>
      </mesh>
    </Center>
  )
}
