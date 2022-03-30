import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Pages/Home"
import LoadingSite from "./components/Pages/LoadingSite"
import ResumePDF from "./Resume-public/Maaz-Siddiqi.pdf"
import { AnimatePresence } from "framer-motion"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async (time) => {
      await setTimeout(() => {
        setLoading(false)
      }, time)
    }

    // load(0)
    load(1250)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? (
        <LoadingSite />
      ) : (
        <>
          <Navbar
            mainText="Maaz Siddiqi."
            menuItems={{
              Home: "#",
              About: "#about",
              Projects: "#projects",
              Contact: "#contact",
              Resume: ResumePDF,
            }}
            special={["Resume"]}
          />

          <Home />
        </>
      )}
    </AnimatePresence>
  )
}

export default App
