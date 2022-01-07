import { useState } from "react";
import Btn from "./Btn";

export default function Navbar({ mainText, menuItems, special, shrinkAt = 'sm' }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <nav className="fixed flex bg-gradient-to-b from-white py-6 text-center text-gray-600  w-full z-50">
      <div className="flex justify-between w-full mx-10 md:mx-24 xl:mx-40">
        {/* Nav Main */}
        <a href="#" className=" p-1 text-2xl font-mono border-b-2 border-indigo-600 hover:scale-105 hover:shadow-lg hover:rounded-xl active:scale-95 active:shadow-inner active:bg-gray-100 transition-all duration-200">
          {mainText ? mainText : "Nav Main."}
        </a>

        {/* Nav Full Menu*/}
        <span className={`hidden ${shrinkAt}:flex space-x-4 font-light items-center`}>
          {Object.keys(menuItems).map((item) =>
            special.find((_item) => _item === item) ? (
              <Btn text={item} key={Math.random(1000000, 100000000)} />
            ) : (
              <a
                href={menuItems[item]}
                key={Math.random(1000000, 100000000)}
                className="rounded px-1 hover:border-b-4 hover:border-violet-600/50 active:border-0 active:shadow-inner transition-all duration-150"
              >
                {item}
              </a>
            )
          )}
        </span>

        {/* Nav Condensed Sidemenu Button */}
        <button
          onClick={(e) => {
            setShowSideMenu(!showSideMenu);
          }}
          className={`${shrinkAt}:hidden ${
            showSideMenu ? "hidden" : ""
          } rounded-xl bg-indigo-600 text-white hover:scale-105 hover:shadow-md hover:shadow-violet-600/50 hover:bg-white hover:text-gray-600 transition-all duration-150 p-1 active:shadow-inner active:scale-95 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
        
        {/* Nav Condensed SideMenu Panel */}
        <div
          className={`${
            showSideMenu ? "" : "hidden"
          } ${shrinkAt}:hidden bg-gradient-to-l from-white fixed top-0 right-0 h-full w-full font-light`}
        >
          <ul className="w-full text-right">
            <button
              onClick={(e) => {
                setShowSideMenu(!showSideMenu);
              }}
            >
              <li className="pt-8 pb-2 px-6 group w-full hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-indigo-600 group-hover:scale-125 group-hover:rotate-180 transition-all duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="indigi"
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
                  className=""
                  key={Math.random(1000000, 100000000)}
                >
                  <li className="w-full cursor-pointer text-violet-600 hover:border-r-4 hover:border-violet-600 transition-all duration-200 p-5">
                    {item}
                  </li>
                </a>
              ) : (
                <a href={menuItems[item]} key={Math.random(1000000, 100000000)}>
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
  );
}
