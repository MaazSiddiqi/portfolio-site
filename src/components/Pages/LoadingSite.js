import React from "react"
import WaveSVG from "../../images/Wave1.svg"

export default function LoadingSite() {
  return (
    <div className="flex relative justify-center items-center w-screen h-screen overflow-x-hidden">
      <div>
        <div className="relative">
          <div className="p-6 bg-white rounded-full drop-shadow-lg z-[1]">
            <a
              href="#top"
              className="px-2 py-1 text-5xl font-mono text-gray-500"
            >
              Maaz Siddiqi.
            </a>
          </div>
          <div className="absolute bg-fuchsia-500 top-0 right-0 rounded-full w-full h-full z-[-2] animate-ping opacity-10"></div>
        </div>
        {/* <img
          src={WaveSVG}
          alt="wave background"
          className="absolute scale-x-150 z-[-1] top-1/4 opacity-50"
        /> */}
      </div>
    </div>
  )
}
