export default function Hero() {
  const Maaz = () => (
    <img src="./logo-2.svg" alt="logo" className="w-[105px] h-[36px]" />
  )

  const MaazSiddiqi = () => (
    <div className="flex flex-nowrap items-center space-x-1">
      <Maaz />
      <h1 className="text-white text-3xl font-bold">siddiqi</h1>
    </div>
  )

  const Navbar = () => (
    <nav className="sticky top-0 py-2 flex justify-between items-center w-full">
      <Maaz />
      <ul className="flex space-x-6">
        <li>
          <a href="#about">
            <span className="text-primary">#</span>about-me
          </a>
        </li>
        <li>
          <a href="#projects">
            <span className="text-primary">#</span>projects
          </a>
        </li>
        <li>
          <a href="/resume">
            <span className="text-primary">/</span>resume
          </a>
        </li>
      </ul>
    </nav>
  )

  const HeroProfile = () => (
    <div>
      <div className="relative w-fit">
        <img
          src="./pfp-colored.png"
          alt="profile picture"
          className="grayscale hover:grayscale-0 duration-200 hover:scale-[102%] cursor-pointer active:scale-100 active:opacity-95"
        />
        <img
          src="./Dots.png"
          alt="dots"
          className="absolute bottom-5 right-2"
        />
        <img
          src="./pdesign.png"
          alt="design"
          className="absolute top-20 -left-8"
        />
      </div>
      <div className="flex space-x-2 items-center px-4 py-2 border-secondary border-[1px] w-fit">
        <div className="bg-primary w-3 h-3"></div>
        <div>
          Currently working on{" "}
          <span className="text-white">`zlang` Compiler</span>
        </div>
      </div>
    </div>
  )

  const HeroContent = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <MaazSiddiqi />
        <div className="max-w-xl">
          a <span className="text-primary">software engineer</span> passionate
          about building impactful solutions, hackathons, and badminton 🏸.
        </div>
      </div>
      <div className="flex items-center text-white space-x-6">
        <div className="px-4 py-2 border-primary border-[1px] w-fit">
          let's connect 🤝
        </div>
        <a className="hover:scale-105" href="/">
          pdf resume
        </a>
      </div>
      <div className="flex space-x-3">
        <img src="./Email.png" alt="email" />
        <img src="./Github.png" alt="github" />
        <img src="./Linkedin.png" alt="linkedin" />
      </div>
    </div>
  )

  return (
    <div className="w-full h-full grid gap-10 mx-auto max-w-6xl">
      <Navbar />
      <div className="h-12 md:h-28"></div>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-end w-full space-y-12">
        <HeroContent />
        <HeroProfile />
      </div>
    </div>
  )
}
