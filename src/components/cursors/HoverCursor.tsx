import { motion, type MotionValue } from "motion/react"

interface HoverCursorProps {
  cursorX: MotionValue<number>
  cursorY: MotionValue<number>
}

export default function HoverCursor({ cursorX, cursorY }: HoverCursorProps) {
  return (
    <motion.div
      className="w-6 h-[1px] bg-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  )
}
