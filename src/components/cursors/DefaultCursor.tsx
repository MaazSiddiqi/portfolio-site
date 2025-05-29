import {
  motion,
  useReducedMotion,
  useSpring,
  type MotionValue,
  type SpringOptions,
} from "motion/react"
import { useState } from "react"

interface DefaultCursorProps {
  cursorX: MotionValue<number>
  cursorY: MotionValue<number>
}

export default function DefaultCursor({
  cursorX,
  cursorY,
}: DefaultCursorProps) {
  const shouldReduceMotion = useReducedMotion()

  const [damping, setDamping] = useState(200)
  const [stiffness, setStiffness] = useState(4500)
  const [mass, setMass] = useState(1)

  const springConfig = {
    damping: damping || 200,
    stiffness: stiffness || 4500,
    mass: mass || 1,
  } satisfies SpringOptions
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  return (
    <>
      <div className="fixed top-11/12 left-1/2 -translate-x-1/2 flex gap-2 z-20 text-light text-sm">
        <div className="flex items-center gap-2">
          <label>Damping</label>
          <input
            type="number"
            value={damping}
            onChange={(e) => setDamping(Number(e.target.value))}
            placeholder="Damping"
            step={100}
          />
        </div>
        <div className="flex items-center gap-2">
          <label>Stiffness</label>
          <input
            type="number"
            value={stiffness}
            onChange={(e) => setStiffness(Number(e.target.value))}
            placeholder="Stiffness"
            step={100}
          />
        </div>
        <div className="flex items-center gap-2">
          <label>Mass</label>
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            placeholder="Mass"
            step={0.1}
          />
        </div>
      </div>
      <motion.div
        className="w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-full h-full border-[0.5px] border-light bg-midnight rounded-full relative pointer-events-none"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            x: shouldReduceMotion ? cursorX : springX,
            y: shouldReduceMotion ? cursorY : springY,
          }}
        >
          <div className="w-3 h-3 border-[0.5px] border-light bg-midnight rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
        </motion.div>
      </motion.div>
      <motion.div
        className="w-1 h-1 bg-light rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  )
}
