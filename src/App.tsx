import CustomCursor from "./components/CustomCursor"

import "./App.css"
import { About } from "./components/sections/about"
import Hero from "./components/sections/hero"

function App() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-screen">
      <CustomCursor />
      <div className="fixed grid place-items-center top-[50%] left-[50%] w-screen h-screen overflow-clip -translate-x-1/2 -translate-y-1/2 object-cover -z-10 pointer-events-none">
        {/* <motion.img
          src="/images/name.png"
          alt="name"
          className="relative top-0 left-[-10%] scale-[1.25] object-cover"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3.5, ease: [0.76, 0, 0.24, 1], delay: 0 }}
        /> */}
      </div>
      <Hero />
      <About />
    </main>
  )
}

export default App
