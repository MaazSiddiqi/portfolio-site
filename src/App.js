import Navbar from "./components/Navbar"
import MainHero from "./components/MainHero"
import About from "./components/About"
import Projects from "./components/ProjectsSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ResumePDF from "./Resume-public/Maaz-Siddiqi.pdf"

function App() {
  return (
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

      <MainHero />

      <About />

      <Projects />

      <Contact />

      <Footer />
    </>
  )
}

export default App
