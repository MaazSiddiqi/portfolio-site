import { motion } from "framer-motion"
import React from "react"
import { scrollAnimation } from "./Pages/Home"

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 px-8 py-16 md:p-16 z-[0]"
    >
      <motion.div
        initial={scrollAnimation.initial}
        whileInView={scrollAnimation.whileInView}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="max-w-5xl space-y-8 text-slate-50">
          <h1 className=" font-bold text-3xl text-slate-100">About Me.</h1>
          <div className="text-lg space-y-6 font-light">
            <p>
              I'm a passionate self-taught developer and started studying at
              Western University in Fall 2021. I'm enrolled in Computer Science
              and plan to minor in Software Engineering. I currently have a 3.9
              GPA.
            </p>
            <p>
              Fun fact, I've actually moved around 10 times in my life already!
              I was born in Karachi, Pakistan, and at the age of 7, my parents
              took a leap of faith to bring my siblings to Canada. We've had to
              move around numerous times since then, but each experience was
              unforgettable! I've met all kinds of people, picking up a variety
              of skills in the process.
            </p>
            <p className="font-light">
              <span className="!text-white mb-2 font-semibold text-transparent">
                Interests:
              </span>{" "}
              Machine learning and AI, Augmented Reality, Hackathons, Fitness,
              Badminton, Basketball, Cooking
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
