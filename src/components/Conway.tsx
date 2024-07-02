type CellProps = {
  x: number
  y: number
  alive: boolean
}

const Cell = ({ x, y, alive }: CellProps) => {
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

type ConwayProps = {
  width: number
  height: number
}

export const Conway = ({ width, height }: ConwayProps) => {
  return (
    <div
      className={`grid grid-cols-[${width}] grid-rows-[${height}] grid-flow-row place-items-start w-screen h-screen bg-slate-200`}
    >
      {Array.from({ length: height }).map((_, y) =>
        Array.from({ length: width }).map((_, x) => (
          <Cell x={x} y={y} alive={Math.random() > 0.5} />
        )),
      )}
    </div>
  )
}
