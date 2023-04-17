import { PointMaterial } from "@react-three/drei"
import React from "react"

export default function PointsSpheres() {
  return (
    <>
      <points position={[0, 0, 0]} scale={50}>
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
      </points>
    </>
  )
}
