import { createContext } from "react"

export type CursorStatus = "default" | "hover" | "click"

export interface CursorContextType {
  status: CursorStatus
  setStatus: (status: CursorStatus) => void
}

export const CursorContext = createContext<CursorContextType | undefined>(
  undefined,
)
