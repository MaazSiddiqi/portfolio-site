import React from "react"
import About from "../About"
import Contact from "../Contact"
import Experience from "../Experience"
import Footer from "../Footer"
import MainHero from "../MainHero"

export default function Home() {
  return (
    <>
      <MainHero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
