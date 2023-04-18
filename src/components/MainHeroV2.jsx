import { Center, Float, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import Deadzone from "./three/Deadzone"
import MainText from "./three/MainText"
import Backdrop from "./three/PointsSpheres"

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
          <Float
            speed={0.8} // Animation speed, defaults to 1
            rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.05} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          >
            <mesh rotation={[0, -Math.PI / 24, 0]} position={[0, 0, -5]}>
              <MainText />
            </mesh>
          </Float>
        </Center>
        <Backdrop />
      </Canvas>
      <Deadzone />
    </div>
  )
}
