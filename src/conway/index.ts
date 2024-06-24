export default class Conway {
  cells: number[][] = []
  width = 0
  height = 0

  constructor(width: number, height: number) {
    console.log("Conway's Game of Life")

    this.width = width
    this.height = height

    this.cells = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => 0),
    )
  }

  run() {
    console.log("Running...")
  }

  stop() {
    console.log("Stopped.")
  }

  reset() {
    console.log("Reset.")
  }

  toggle() {
    console.log("Toggled.")
  }

  step() {
    console.log("Stepped.")
  }

  clear() {
    console.log("Cleared.")
  }

  random() {
    console.log("Random.")
  }
}
