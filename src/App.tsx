import "./App.css"

import { motion, useScroll, useTransform } from "motion/react"
import CustomCursor from "./components/CustomCursor"
import { About } from "./components/sections/about"
import Experience from "./components/sections/experience"
import Footer from "./components/sections/footer"
import Hero from "./components/sections/hero"

function App() {
  const { scrollYProgress } = useScroll()
  const offsetY = useTransform(scrollYProgress, [0, 1], [0, -1350])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [1, 0.05, 0])

  return (
    <main className="flex flex-col justify-center min-h-screen w-screen">
      <CustomCursor />
      <motion.div
        className="fixed top-0 -z-20"
        style={{
          top: offsetY,
          opacity,
        }}
      >
        <Hero />
      </motion.div>
      <div className="mt-[100dvh] bg-midnight">
        <About />
        <Experience />
        <Footer />
      </div>
    </main>
  )
}

export default App
