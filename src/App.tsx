import "./App.css"

const width = 20
const height = 20

function App() {
  const Cell = ({ x, y, alive }: { x: number; y: number; alive: boolean }) => {
    return (
      <div
        key={`${x}-${y}`}
        className={`border border-slate-400 w-full h-full aspect-square ${
          alive ? "bg-slate-800" : "bg-slate-200"
        }`}
        style={{
          gridColumnStart: x + 1,
          gridRowStart: y + 1,
        }}
      ></div>
    )
  }

  return (
    <div>
      <h1>Conway's Game of Life</h1>
      <div>
        <button>Run</button>
        <button>Stop</button>
        <button>Reset</button>
        <button>Toggle</button>
        <button>Step</button>
        <button>Clear</button>
        <button>Random</button>
      </div>

      <div
        className={`grid grid-cols-[${width}] grid-rows-[${height}] grid-flow-row place-items-start w-screen h-screen bg-slate-200`}
      >
        {Array.from({ length: height }).map((_, y) =>
          Array.from({ length: width }).map((_, x) => (
            <Cell x={x} y={y} alive={Math.random() > 0.5} />
          )),
        )}
      </div>
    </div>
  )
}

export default App
