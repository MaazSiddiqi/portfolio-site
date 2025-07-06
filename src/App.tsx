import CustomCursor from "./components/CustomCursor"

import "./App.css"
import { About } from "./components/sections/about"
import Footer from "./components/sections/footer"
import Hero from "./components/sections/hero"

function App() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-screen">
      <CustomCursor />
      <Hero />
      <About />
      <Footer />
    </main>
  )
}

export default App
