import Navbar from "./components/Navbar"
import Home from "./components/Pages/Home"
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

      <Home />
    </>
  )
}

export default App
