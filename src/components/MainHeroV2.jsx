import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import Deadzone from "./three/Deadzone"
import HeroScene from "./three/HeroScene"
import LoadingSite from "./Pages/LoadingSite"
import { PerformanceMonitor } from "@react-three/drei"

export default function MainHero({ finishLoading }) {
  return (
    <div className="bg-white h-screen">
      <Canvas
        color="white"
        camera={{ position: [0, 0, 10] }}
        onLoad={() => {
          console.log("Canvas loaded")
          finishLoading()
        }}
      >
        <HeroScene finishLoading={finishLoading} />
      </Canvas>
      <Deadzone />
    </div>
  )
}
