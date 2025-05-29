import { motion, type MotionValue } from "motion/react"

interface DefaultCursorProps {
  cursorX: MotionValue<number>
  cursorY: MotionValue<number>
  springX: MotionValue<number>
  springY: MotionValue<number>
}

export default function DefaultCursor({
  cursorX,
  cursorY,
  springX,
  springY,
}: DefaultCursorProps) {
  return (
    <>
      <motion.div
        className="w-full h-full"
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
            x: springX,
            y: springY,
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
