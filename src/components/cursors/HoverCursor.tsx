import { motion, type MotionValue } from "motion/react"

interface HoverCursorProps {
  cursorX: MotionValue<number>
  cursorY: MotionValue<number>
}

export default function HoverCursor({ cursorX, cursorY }: HoverCursorProps) {
  return (
    <motion.div
      className="w-1.5 h-1.5 border-[1px] border-light bg-midnight rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  )
}
