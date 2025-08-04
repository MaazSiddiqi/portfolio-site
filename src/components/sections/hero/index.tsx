import { AnimatePresence, motion, type Variants } from "motion/react"

const heroVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.2,
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
      <AnimatePresence mode="wait">
        {/* <div className="absolute grid place-items-center top-[50%] left-[50%] w-screen h-screen overflow-clip -translate-x-1/2 -translate-y-1/2 object-cover -z-10">
        <motion.img
          src="/images/name.svg"
          alt="name"
          className="relative top-1/2 left-[calc(50%-10%)] -translate-y-1/2 -translate-x-1/2 scale-[1.15] object-cover"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 3.5, ease: [0.76, 0, 0.24, 1] }}
        />
      </div> */}
        <motion.div variants={heroVariants} initial="hidden" animate="visible">
          <motion.h1 variants={heroTextVariants} className="title">
            Hey, I&apos;m <span className="text-light">Maaz.</span>
          </motion.h1>
          <motion.h1 variants={heroTextVariants} className="title">
            I&apos;m a <span className="text-light">software engineer</span>{" "}
            building systems <br /> for the future.
          </motion.h1>
          <motion.h2 variants={heroTextVariants} className="mt-4">
            Currently a software engineering intern at{" "}
            <span className="text-light">Amazon Web Services</span>
          </motion.h2>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
