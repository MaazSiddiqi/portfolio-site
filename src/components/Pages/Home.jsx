import React from "react"
import About from "../About"
import Contact from "../Contact"
import Experience from "../Experience"
import Footer from "../Footer"
import MainHero from "../MainHero"
import MainHeroV2 from "../MainHeroV2"

export default function Home({ finishLoading }) {
  return (
    <>
      <MainHeroV2 finishLoading={finishLoading} />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
