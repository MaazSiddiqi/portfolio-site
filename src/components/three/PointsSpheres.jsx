import { PointMaterial } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import React, { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { TextureLoader } from "three/src/loaders/TextureLoader"

export default function PointsSpheres() {
  const colorMap = useLoader(TextureLoader, "dreamlike_sky_islands.jpeg")

  const blackSphere = useRef()
  const pinkSphere = useRef()
  const purpleSphere = useRef()

  const bgSphere = useRef()

  useEffect(() => {
    if (bgSphere.current) bgSphere.current.scale(-1, 1, 1)
  }, [])

  // useFrame(({ clock }) => {
  //   if (blackSphere.current)
  //     blackSphere.current.rotation.y = Math.sin(clock.getElapsedTime()) / 2
  //   if (pinkSphere.current)
  //     pinkSphere.current.rotation.y = -Math.sin(clock.getElapsedTime()) / 4
  //   if (purpleSphere.current)
  //     purpleSphere.current.rotation.y = -Math.sin(clock.getElapsedTime()) / 8
  // })

  return (
    <>
      <mesh>
        <sphereGeometry args={[10, 32, 32]} ref={bgSphere} />
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </>
  )

  return (
    <>
      <points position={[0, 0, 0]} scale={50} ref={blackSphere}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <PointMaterial color="black" size={0.15} />
      </points>
      <points
        position={[0, 0, 0]}
        scale={50}
        rotation={[0, Math.PI / 3, 0]}
        ref={purpleSphere}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <PointMaterial color="purple" size={0.1} />
      </points>
      <points
        position={[0, 0, 0]}
        scale={50}
        rotation={[0, Math.PI / 6, 0]}
        ref={pinkSphere}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <PointMaterial color="#6b21a8" size={0.1} />
      </points>
    </>
  )
}
