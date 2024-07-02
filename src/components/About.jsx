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
              I'm a self-taught developer and currently studying Computer
              Science at Western University.{" "}
            </p>
            <p>
              Professionally, I work as an Amplify Developer at RBC, where
              I&apos;m developing solutions to streamline HR processes for
              90,000 employees using technologies like ReactJS, NextJS, and
              Kubernetes.
            </p>
            <p>
              In leadership roles, I co-chaired Hack Western, orchestrating one
              of Canada&apos;s largest hackathons, and was a Tech Lead at the
              Western Developers Society, supervising development projects and
              conducting workshops.
            </p>
            <p>
              Born in Karachi, Pakistan, and having moved around 10 times,
              I&apos;ve met tons of people and gained diverse experiences and
              skills that have shaped my journey.
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
