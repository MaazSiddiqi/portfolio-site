import React, { useState, Fragment } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Card from "./Card"

export default function About() {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 p-16 z-[0]"
    >
      <div className="space-y-8">
        <div className="max-w-5xl space-y-8 text-slate-50">
          <h1 className=" font-bold text-3xl text-slate-100">About Me.</h1>
          <div className="text-lg space-y-6 font-medium">
            <p>
              Hey, my name is Maaz Siddiqi! I'm a passionate self-taught
              developer who just started studying at Western University in Fall
              2021. I'm enrolled in a Business and Computer Science double
              degree program, and its been a blast so far!
            </p>
            <p>
              Fun fact, I've actually moved around 10 times in my life already!
              I was born in Karachi, Pakistan, and at the age of 7, my parents
              took a leap of faith to bring my siblings to Canada. We've had to
              move around numerous times since then, but each experience was
              unforgettable! I've met all kinds of people, picking up a variety
              of skills in the process.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 justify-between">
          <Card title="Employment" grow>
            <div className="text-gray-500 mt-2">
              <h2 className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                Cashier / Self-Checkout Attendant
              </h2>
              <p className="font-light">Walmart Inc.</p>
              <p className="font-light">Since July 2021</p>
            </div>
          </Card>
          <Card title="Hobbies and Interests" grow>
            <ul className="text-gray-500 mt-2">
              <li className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                Basketball
              </li>
              <li className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                Game Development
              </li>
              <li className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                Investing
              </li>
              <li className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                Physical Fitness
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
