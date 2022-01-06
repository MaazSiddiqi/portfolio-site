import Navbar from "./components/Navbar";
import MainHero from "./components/MainHero";

function App() {
  return (
    <>
      <Navbar
        mainText="Maaz Siddiqi."
        menuItems={{ Home: "#", About: "#", Contact: "#", Projects: "#" }}
        special={["Projects"]}
      />

      <MainHero>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fb179a4-6b7f-494e-b735-d9a9d8700761/d5kevoi-c164481b-e731-4bb7-b6de-e44dc43330b5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmYjE3OWE0LTZiN2YtNDk0ZS1iNzM1LWQ5YTlkODcwMDc2MVwvZDVrZXZvaS1jMTY0NDgxYi1lNzMxLTRiYjctYjZkZS1lNDRkYzQzMzMwYjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UkQZ8M9oX0a620Kv1D8E-W6M_j_ekTIqrRIYLOMdbis"
          alt="hero img"
          className="hero-image opacity-[15%]"
        />
        <div className="flex relative top-8 flex-col md:flex-row w-full px-6 justify-around items-center text-gray-500">
          <div className="px-20 py-14 md:text-right text-center">
            <h1 className="text-6xl pb-2">
              Hi, I'm
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-fuchsia-500">
                {" "}
                Maaz.
              </span>
            </h1>
            <h2 className="text-lg font-light">
              A{" "}
              <span className="text-xl border-b-2 border-b-fuchsia-500/70 basic-focus-animation p-1 whitespace-nowrap">
                computer science
              </span>{" "}
              student at{" "}
              <span className="text-xl border-b-2 border-b-fuchsia-500/70 p-1 basic-focus-animation whitespace-nowrap">
                Western University
              </span>
              .
            </h2>
          </div>
          <div className="rounded-full bg-white border-4 aspect-square h-[350px] w-[350px] m-3"></div>
        </div>
      </MainHero>

      <section className="h-20">

      </section>

    </>
  );
}

export default App;
