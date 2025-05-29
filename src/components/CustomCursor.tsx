import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "motion/react"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = {
    damping: 30,
    stiffness: 200,
    mass: 0.5,
  } satisfies SpringOptions
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      if (!isVisible) setIsVisible(true)
      cursorX.set(clientX - 16)
      cursorY.set(clientY - 16)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [cursorX, cursorY, isVisible, isMobile])

  if (!isVisible || isMobile) return null

  return (
    <motion.div
      className="w-8 h-8 fixed top-0 left-0 z-50 mix-blend-normal"
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
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
    </motion.div>
  )
}
