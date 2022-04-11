import React, { Fragment } from "react"
import About from "../About"
import Contact from "../Contact"
import Footer from "../Footer"
import MainHero from "../MainHero"
import Projects from "../Projects"

export default function Home() {
  return (
    <Fragment className="">
      <MainHero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  )
}
