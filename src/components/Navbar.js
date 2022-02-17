import { useState } from "react"
import Btn from "./Btn"

// Nav height = 90px
export default function Navbar({ mainText, menuItems, special }) {
  const [showSideMenu, setShowSideMenu] = useState(false)

  return (
    <nav className="fixed flex backdrop-filter backdrop-blur-sm backdrop-opacity-100 backdrop bg-gradient-to-b py-6 hover:bg-white transition-all duration-200 text-center text-gray-500  w-full z-50">
      <div className="flex justify-between w-full mx-10 md:mx-24 xl:mx-40">
        {/* Nav Main */}
        <a
          href="#"
          className=" px-2 py-1 text-2xl font-mono bg-white/70 rounded-md border-b-2 border-indigo-600 hover:scale-105 hover:shadow-lg hover:rounded-2xl active:scale-95 active:shadow-inner active:bg-gray-100 transition-all duration-200"
        >
          {mainText ? mainText : "Nav Main."}
        </a>

        {/* Nav Full Menu*/}
        <span className="hidden md:flex space-x-4 font-light items-center">
          {Object.keys(menuItems).map((item) =>
            special.find((_item) => _item === item) ? (
              <a
                href={menuItems[item]}
                target="_blank"
                key={Math.random(1000000, 100000000)}
              >
                <Btn text={item} />
              </a>
            ) : (
              <a
                href={menuItems[item]}
                key={Math.random(1000000, 100000000)}
                className="bg-white/60 rounded px-2 hover:border-b-4 hover:border-violet-600/50 active:border-0 active:shadow-inner transition-all duration-150"
              >
                {item}
              </a>
            )
          )}
        </span>

        {/* Nav Condensed Sidemenu Button */}
        <button
          onClick={(e) => {
            setShowSideMenu(!showSideMenu)
          }}
          className={`md:hidden ${
            showSideMenu ? "hidden" : ""
          } rounded-xl bg-indigo-600 text-white hover:scale-105 hover:shadow-md hover:shadow-violet-600/50 hover:bg-white hover:text-gray-600 transition-all duration-150 p-1 active:shadow-inner active:bg-violet-50 active:scale-95 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </button>

        {/* Nav Condensed SideMenu Panel */}
        <div
          className={`${
            showSideMenu ? "" : "hidden"
          } md:hidden bg-gradient-to-l from-white fixed top-0 right-0 h-full w-full font-light`}
        >
          <ul className="w-full text-right">
            <button
              onClick={(e) => {
                setShowSideMenu(!showSideMenu)
              }}
            >
              <li className="pt-8 pb-2 px-6 group w-full hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-indigo-600 group-hover:scale-125 group-hover:rotate-180 transition-all duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </li>
            </button>

            {Object.keys(menuItems).map((item) =>
              special.find((_item) => _item === item) ? (
                <a
                  href={menuItems[item]}
                  target="_blank"
                  className=""
                  key={`NavItem${item}`}
                >
                  <li className="w-full cursor-pointer text-violet-600 hover:border-r-4 hover:border-violet-600 transition-all duration-200 p-5">
                    {item}
                  </li>
                </a>
              ) : (
                <a href={menuItems[item]} key={`NavItem${item}`}>
                  <li className="w-full cursor-pointer hover:border-r-4 hover:border-violet-600 transition-all duration-200 p-5">
                    {item}
                  </li>
                </a>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
