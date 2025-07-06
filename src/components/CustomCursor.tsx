import { AnimatePresence, motion, useMotionValue } from "motion/react"
import { useEffect, useState } from "react"
import { useCursor } from "../hooks/useCursor"
import DefaultCursor from "./cursors/DefaultCursor"
import HoverCursor from "./cursors/HoverCursor"

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { status } = useCursor()

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

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
      className="w-[34px] h-[34px] fixed top-0 left-0 z-50 mix-blend-normal pointer-events-none"
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <AnimatePresence mode="wait">
        {status === "hover" ? (
          <HoverCursor cursorX={cursorX} cursorY={cursorY} />
        ) : (
          <DefaultCursor cursorX={cursorX} cursorY={cursorY} />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
