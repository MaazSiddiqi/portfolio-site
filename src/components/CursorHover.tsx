import { AnimatePresence, motion } from "motion/react"
import { useCursor } from "../hooks/useCursor"
import { useState } from "react"

export default function CursorHover({
  children,
}: {
  children: React.ReactNode
}) {
  const { setStatus } = useCursor()

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-fit h-fit relative"
      onMouseEnter={() => {
        setStatus("hover")
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setStatus("default")
        setIsHovered(false)
      }}
    >
      {children}
      <AnimatePresence mode="wait" initial={false}>
        {isHovered && (
          <motion.div
            className="absolute w-full h-[1px] bottom-0 left-0 bg-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
