import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Pages/Home"
import LoadingSite from "./components/Pages/LoadingSite"
import ResumePDF from "./Resume-public/Maaz-Siddiqi.pdf"
import { motion, AnimatePresence } from "framer-motion"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      await setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
    load()
  }, [])

  return (
    <AnimatePresence>
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
