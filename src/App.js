import Navbar from "./components/Navbar";
import MainHero from "./components/MainHero";
import sampleImg from "./images/sample.svg";
import FullSection from "./components/FullSection";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar
        mainText="Maaz Siddiqi."
        menuItems={{ Home: "#", About: "#about", Projects: "#", Contact: "#" }}
        special={["Contact"]}
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
                Western University.
              </span>
            </h2>
          </div>
          <div className="rounded-full bg-white border-4 aspect-square h-[350px] w-[350px] m-3"></div>
        </div>
      </MainHero>

      {/* About Me */}
      <section
        id="about"
        className="flex flex-col justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 p-16 z-[0]"
      >
        <div className="space-y-8">
          <div className="max-w-5xl space-y-8 text-slate-50">
            <h1 className=" font-bold text-3xl text-slate-100">About Me.</h1>
            <div className="text-lg space-y-6 font-medium">
              <p>
                Hey, my name is Maaz Siddiqi! I'm a passionate self-taught
                developer who just started studying at Western University in
                Fall 2021. I'm enrolled in a Business and Computer Science
                double degree program, and its been a blast so far!
              </p>
              <p>
                Fun fact, I've actually moved around 10 times in my life
                already! I was born in Karachi, Pakistan, and at the age of 7,
                my parents took a leap of faith to bring my siblings here. We've
                had to move around numerous times since then, but each
                experience was unforgettable! I've met all kinds of people,
                picking up a variety of skills in the process.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 justify-between">
            <Card title="Employment" img={sampleImg}>
              <div className="text-gray-500 mt-2">
                <h2 className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                  Cashier / Self-Checkout Attendant
                </h2>
                <p>Walmart Inc.</p>
                <p>Since July 2021</p>
              </div>
            </Card>
            <Card title="Hobbies and Interests">
              <ul className="text-gray-500 mt-2">
                <li className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                  Basketball
                </li>
                <li className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                  Game Development
                </li>
                <li className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                  Investing
                </li>
                <li className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                  Physical Fitness
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* <section className="relative flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-white p-14 z-[1]">
        <img
          src={sampleImg}
          alt=""
          className="aspect-video max-h-[12rem] lg:max-h-[18rem]"
        />
        <div className="max-w-lg text-gray-500">
          <h1 className="pb-2 font-semibold text-3xl text-gray-700">
            Main Title
          </h1>
          <p className="pt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur error vitae et neque ut dolores quos pariatur animi
            suscipit nobis.
          </p>
        </div>
      </section> */}

      <FullSection>
        <h1 className="">You want some proof eh?</h1>
      </FullSection>
    </>
  );
}

export default App;
