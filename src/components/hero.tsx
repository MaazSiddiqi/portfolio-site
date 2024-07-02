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

  return (
    <div className="w-full h-full grid gap-10">
      <h1 className="text-primary">Hero</h1>
      <Maaz />

      <img
        src="./pfp-colored.png"
        alt="profile picture"
        className="grayscale hover:grayscale-0 duration-200 hover:scale-[102%] cursor-pointer active:scale-100 active:opacity-95"
      />

      <MaazSiddiqi />

      <div>
        a <span className="text-primary">software engineer</span> passionate
        about building impactful solutions, hackathons, and badminton 🏸.
      </div>

      <div className="px-4 py-2 border-primary border-[1px] w-fit">
        let's connect 🤝
      </div>
      <div className="text-white">pdf resume</div>
    </div>
  )
}
