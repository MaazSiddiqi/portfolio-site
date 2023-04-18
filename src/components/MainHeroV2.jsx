import { Center, OrbitControls, Text3D } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import Deadzone from "./three/Deadzone"
import Backdrop from "./three/PointsSpheres"
import MainText from "./three/MainText"

export default function MainHero() {
  return (
    <div className="bg-white h-screen">
      <Canvas color="white">
        <Center>
          <OrbitControls
            enableZoom={true}
            maxDistance={12}
            minDistance={3}
            zoomSpeed={0.8}
            autoRotate
            autoRotateSpeed={0.15}
            enablePan={false}
            rotateSpeed={0.2}
            maxAzimuthAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.2} />
          <directionalLight
            color="white"
            position={[0, 5, 10]}
            intensity={0.7}
          />
          <mesh rotation={[0, -Math.PI / 24, 0]} position={[0, 0, -5]}>
            <MainText />
          </mesh>
        </Center>
        <Backdrop />
      </Canvas>
      <Deadzone />
    </div>
  )
}
