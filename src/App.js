import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar
        mainText="Maaz Siddiqi."
        menuItems={{ Home: "#", About: "#", Contact: "#", Projects: "#" }}
        special={["Projects"]}
        shrinkAt="md"
      />

      <section
        id="hero"
        className="flex w-screen h-screen overflow-hidden justify-center items-center pt-20"
      >
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fb179a4-6b7f-494e-b735-d9a9d8700761/d5kevoi-c164481b-e731-4bb7-b6de-e44dc43330b5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmYjE3OWE0LTZiN2YtNDk0ZS1iNzM1LWQ5YTlkODcwMDc2MVwvZDVrZXZvaS1jMTY0NDgxYi1lNzMxLTRiYjctYjZkZS1lNDRkYzQzMzMwYjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UkQZ8M9oX0a620Kv1D8E-W6M_j_ekTIqrRIYLOMdbis"
          alt="hero img"
          className="h-full min-w-max fixed top-0 -right-[95%] sm:-right-[50%] md:-right-[30%] -z-[1]"
        />
        <div className="flex flex-col md:flex-row w-full px-6 justify-around items-center ">
          <div className="p-6 md:text-left text-center">
            <h1 className="text-6xl pb-2">I'm <span className="font-extrabold text-indigo-600">Maaz.</span></h1>
            <h2 className="text-lg">A computer science student at Western University.</h2>
          </div>
          <span className="rounded-full bg-white border-4 aspect-square h-[350px] w-[350px] m-3"></span>
        </div>
      </section>
      <div className="h-full"><h1>sample</h1></div>
    </>
  );
}

export default App;
