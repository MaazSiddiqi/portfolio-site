import { motion, useInView } from "motion/react"
import { useRef } from "react"

const ABOUT_INFO = [
  {
    topic: "Education",
    answer: "Bachelors of Science, Computer Science @ Western University",
  },
  {
    topic: "Location",
    answer: "Toronto, Ontario",
  },
  {
    topic: "Personal Interests",
    answer: "Hackathons, badminton, climbing, food, travelling",
  },
  {
    topic: "Learning",
    answer: "Low-level programming, distributed systems, infrastructure",
  },
  {
    topic: "Technologies",
    answer: "React, Typescript, Python, Ruby on Rails, Java, C++, Go, Rust",
  },
  {
    topic: "Previously Interned At",
    answer: "Shopify, Onova, RBC, PeerSupport.io, Opal LLC",
  },
]
export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.33, once: true })

  return (
    <div
      className="relative flex items-center justify-center h-screen w-screen bg-transparent overflow-hidden p-[15%]"
      ref={ref}
    >
      {inView && (
        <motion.div className="absolute top-1/2 left-[calc(50%+10%)] -translate-x-1/2 -translate-y-1/2 w-full h-fit -z-10 pointer-events-none">
          <motion.img
            src="/images/about-me.svg"
            alt="about"
            className="object-cover scale-110"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      )}
      <div className="relative z-10 flex flex-row gap-24 items-center bg-transparent p-8 rounded-lg">
        {/* Image section */}
        <img
          src="/images/pfp.jpg"
          alt="Profile"
          className="object-cover grayscale"
        />
        {/* Text section */}
        <div className="flex flex-col gap-4 min-w-[350px] text-left">
          {ABOUT_INFO.map(({ topic, answer }) => (
            <div key={topic} className="flex flex-col gap-3">
              <div className="label">{topic}</div>
              <div className="text-accent">{answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
