import { Center, OrbitControls, PointMaterial, Text3D } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import PointsSpheres from "./three/PointsSpheres"

export default function MainHero() {
  return (
    <div className="bg-white h-screen">
      <Canvas color="white">
        <Center>
          <OrbitControls
            enableZoom={true}
            autoRotate
            autoRotateSpeed={0.2}
            rotateSpeed={0.2}
            maxAzimuthAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.2} />
          <directionalLight
            color="white"
            position={[0, 5, 10]}
            intensity={0.7}
          />
          <mesh rotation={[0, -Math.PI / 12, 0]}>
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
                  letterSpacing={-0.04}
                  scale={0.3}
                  font="/DM Sans_Bold.json"
                >
                  Hi! I'm
                  <meshStandardMaterial
                    attach="material"
                    color="black"
                    roughness={0.8}
                    metalness={0.2}
                  />
                </Text3D>
              </mesh>
            </Center>
          </mesh>
        </Center>
        {/* <points position={[0, 0, 0]} scale={50}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <PointMaterial color="black" size={0.15} />
        </points>
        <points position={[0, 0, 0]} scale={50} rotation={[0, Math.PI / 3, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <PointMaterial color="purple" size={0.1} />
        </points>
        <points position={[0, 0, 0]} scale={50} rotation={[0, Math.PI / 6, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <PointMaterial color="#6b21a8" size={0.1} />
        </points> */}
        <PointsSpheres />
      </Canvas>
    </div>
  )
}
