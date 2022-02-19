import React from "react"
import About from "../About"
import Contact from "../Contact"
import Footer from "../Footer"
import MainHero from "../MainHero"
import Projects from "../ProjectsSection"

export default function Home() {
  return (
    <>
      <MainHero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
