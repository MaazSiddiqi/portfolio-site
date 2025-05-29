import { motion, type Variants } from "motion/react"
import CustomCursor from "./components/CustomCursor"

import "./App.css"

const heroVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.5,
      delayChildren: 2,
    },
  },
} as const satisfies Variants

const heroTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  },
} as const satisfies Variants

function App() {
  return (
    <main className="flex flex-col justify-center h-screen w-screen p-[15%]">
      <CustomCursor />
      <div className="absolute grid place-items-center top-[50%] left-[50%] w-screen h-screen overflow-hidden -translate-x-1/2 -translate-y-1/2 object-cover -z-10 pointer-events-none">
        <motion.img
          src="/images/name.png"
          alt="name"
          className="relative top-0 left-[-10%] scale-[1.25] object-cover"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3.5, ease: [0.76, 0, 0.24, 1], delay: 0 }}
        />
      </div>
      <motion.div variants={heroVariants} initial="hidden" animate="visible">
        <motion.h1
          variants={heroTextVariants}
          className="text-3xl leading-title"
        >
          Hey, I&apos;m <span className="text-light">Maaz.</span>
        </motion.h1>
        <motion.h1
          variants={heroTextVariants}
          className="text-3xl leading-title"
        >
          I&apos;m a <span className="text-light">software engineer</span>{" "}
          building systems <br /> for the future.
        </motion.h1>
        <motion.h2 variants={heroTextVariants} className="mt-4">
          Currently a software engineering intern at{" "}
          <span className="text-light">Amazon Web Services</span>
        </motion.h2>
      </motion.div>
    </main>
  )
}

export default App
