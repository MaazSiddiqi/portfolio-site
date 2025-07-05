import { motion, type Variants } from "motion/react"

const heroVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.35,
      delayChildren: 1.75,
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

export default function Hero() {
  return (
    <div className="flex flex-col justify-center h-screen w-screen p-[15%]">
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
    </div>
  )
}
