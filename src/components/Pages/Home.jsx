import React from "react"
import About from "../About"
import Contact from "../Contact"
import Experience from "../Experience"
import Footer from "../Footer"
import MainHero from "../MainHero"
import MainHeroV2 from "../MainHeroV2"

export default function Home() {
  return (
    <>
      {/* <MainHero /> */}
      <MainHeroV2 />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
