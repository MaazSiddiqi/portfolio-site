import React from "react"

export default function Deadzone() {
  return (
    <div className="w-screen h-1/5 absolute bottom-0 grid place-items-center group">
      <div className="w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/25 via-slate-500/25 to-transparent absolute top-0 transition-opacity duration-150"></div>
      <a
        className="pt-10 text-blue-800 hover:drop-shadow-lg group-hover:text-white transition-colors duration-250"
        href="#about"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 animate-bounce "
        >
          <path
            fillRule="evenodd"
            d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  )
}
