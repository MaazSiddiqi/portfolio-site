export default function MainHero({ children }) {
  return (
    <section className="flex relative w-auto h-screen overflow-hidden justify-center items-center">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fb179a4-6b7f-494e-b735-d9a9d8700761/d5kevoi-c164481b-e731-4bb7-b6de-e44dc43330b5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmYjE3OWE0LTZiN2YtNDk0ZS1iNzM1LWQ5YTlkODcwMDc2MVwvZDVrZXZvaS1jMTY0NDgxYi1lNzMxLTRiYjctYjZkZS1lNDRkYzQzMzMwYjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UkQZ8M9oX0a620Kv1D8E-W6M_j_ekTIqrRIYLOMdbis"
        alt="hero img"
        className="hero-image opacity-[10%]"
      />

      <div className="flex flex-col justify-center md:flex-row md:justify-start w-full px-6 text-gray-500">
        <div className="px-20 lg:px-64 py-14 md:text-right text-center">
          <h1 className="text-6xl md:text-7xl pb-2">
            Hi, I'm
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-fuchsia-500">
              {" "}
              Maaz.
            </span>
          </h1>
          <h2 className="text-lg md:text-xl font-light">
            A{" "}
            <span className="text-xl border-b-2 border-b-fuchsia-500/70 basic-focus-animation p-1 whitespace-nowrap">
              computer science
            </span>{" "}
            student at{" "}
            <span className="text-xl border-b-2 border-b-fuchsia-500/70 p-1 basic-focus-animation whitespace-nowrap">
              Western University.
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}
