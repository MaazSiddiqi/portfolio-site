import "./App.css"

import { motion, useScroll, useTransform } from "motion/react"
import CustomCursor from "./components/CustomCursor"
import { About } from "./components/sections/about"
import Experience from "./components/sections/experience"
import Footer from "./components/sections/footer"
import Hero from "./components/sections/hero"

function App() {
  const { scrollYProgress } = useScroll()
  const offset = useTransform(scrollYProgress, [0, 1], [0, -1350])

  return (
    <main className="flex flex-col justify-center min-h-screen w-screen">
      <CustomCursor />
      <motion.div
        className="fixed top-0 -z-20"
        style={{
          top: offset,
        }}
      >
        <Hero />
      </motion.div>
      <div className="mt-[100vh] bg-midnight">
        <About />
        <Experience />
        <Footer />
      </div>
    </main>
  )
}

export default App
