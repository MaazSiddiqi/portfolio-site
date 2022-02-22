import React from "react"
import { motion, useAnimation } from "framer-motion"
import WaveSVG from "../../images/Wave1.svg"

const animationDuration = 1

export default function LoadingSite() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      exit={{
        scale: 0,
        transition: {
          duration: 2,
          ease: "easeIn",
        },
      }}
      className="flex relative justify-center items-center w-screen h-screen overflow-x-hidden"
    >
      <div>
        <div className="relative">
          <motion.div
            initial={{
              scale: 1.05,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: animationDuration * 1,
                ease: "easeIn",
                yoyo: Infinity,
              },
            }}
            className="p-6 bg-white rounded-full drop-shadow-lg z-[1]"
          >
            <h1 className="px-2 py-1 text-lg md:text-5xl font-mono text-gray-500 text-center ">
              Maaz Siddiqi.
            </h1>
          </motion.div>

          <motion.div
            initial={{
              scale: 1,
              opacity: 0.25,
            }}
            animate={{
              scale: 2.0,
              opacity: 0,
              transition: {
                delay: animationDuration - 0.1,
                duration: animationDuration * 1.5,
                repeat: Infinity,
                repeatDelay: animationDuration * 0.5,
              },
            }}
            className="absolute bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 top-0 right-0 rounded-full w-full h-full z-[-2] opacity-10"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  )
}
