import { Text3D } from "@react-three/drei"
import React from "react"

export default function TestText() {
  return (
    <>
      <Text3D
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1.5}
        font="/DM Sans_Bold.json"
      >
        Maaz.
        <meshStandardMaterial />
      </Text3D>
    </>
  )
}
