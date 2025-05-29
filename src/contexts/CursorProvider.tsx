import { useState, type ReactNode } from "react"
import { CursorContext, type CursorStatus } from "./CursorContext"

export function CursorProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<CursorStatus>("default")

  return (
    <CursorContext.Provider value={{ status, setStatus }}>
      {children}
    </CursorContext.Provider>
  )
}
