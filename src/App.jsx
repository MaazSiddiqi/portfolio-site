import { AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import ResumePDF from "/Resume-public/Maaz Siddiqi.pdf"
import Navbar from "./components/Navbar"
import Home from "./components/Pages/Home"
import LoadingSite from "./components/Pages/LoadingSite"

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
    <>
      {loading ? (
        <LoadingSite />
      ) : (
        <Navbar
          mainText="Maaz Siddiqi."
          menuItems={{
            Home: "#",
            About: "#about",
            Experience: "#experiences",
            Contact: "#contact",
            Resume: ResumePDF,
          }}
          special={["Resume"]}
        />
      )}
      <Home />
    </>
  )
}

export default App
