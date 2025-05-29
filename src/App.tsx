import "./App.css"

function App() {
  return (
    <main className="flex flex-col justify-center h-screen p-72">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/name-lg.png')] bg-cover bg-center"></div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl leading-title">
          <h1>
            Hey, I&apos;m <span className="text-light">Maaz.</span>
          </h1>
          <h1>
            I&apos;m a <span className="text-light">software engineer</span>{" "}
            building systems <br /> for the future.
          </h1>
        </div>
        <div>
          Currently a software engineering intern at{" "}
          <span className="text-light">Amazon Web Services</span>
        </div>
      </div>
    </main>
  )
}

export default App
