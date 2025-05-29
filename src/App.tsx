import { motion, type Variants } from "motion/react"

import "./App.css"

const heroVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 0.5,
      delayChildren: 1.5,
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
    <main className="flex flex-col justify-center h-screen p-72">
      {/* <motion.div
        className="absolute top-0 left-0 w-full h-full bg-midnight z-10"
        initial={{ x: "0" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1] }}
      /> */}
      {/* <motion.div
        className="absolute top-0 left-0 w-full h-full bg-light"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
      /> */}
      {/* <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[url('/images/name-lg.png')] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
      /> */}
      <motion.img
        src="/images/name.png"
        alt="name"
        className="absolute top-0 left-[-10%] scale-[1.35] object-cover"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: [0.76, 0, 0.24, 1], delay: 0 }}
      />
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
