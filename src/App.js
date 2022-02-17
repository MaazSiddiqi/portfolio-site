import Navbar from "./components/Navbar"
import MainHero from "./components/MainHero"
import FullSection from "./components/FullSection"
import Card from "./components/Card"
import Project from "./components/Project"
import Footer from "./components/Footer"
import Socials from "./components/Socials"
import Button from "./components/Btn"
import ContactForm from "./components/ContactForm"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import ResumePDF from "./Resume-public/Maaz-Siddiqi.pdf"

function App() {
  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <Navbar
        mainText="Maaz Siddiqi."
        menuItems={{
          Home: "#",
          About: "#about",
          Projects: "#projects",
          Contact: "#contact",
          Resume: ResumePDF,
        }}
        special={["Resume"]}
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
                my parents took a leap of faith to bring my siblings to Canada.
                We've had to move around numerous times since then, but each
                experience was unforgettable! I've met all kinds of people,
                picking up a variety of skills in the process.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 justify-between">
            <Card title="Employment" grow>
              <div className="text-gray-500 mt-2">
                <h2 className="mb-2 font-semibold bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 text-transparent">
                  Cashier / Self-Checkout Attendant
                </h2>
                <p className="font-light">Walmart Inc.</p>
                <p className="font-light">Since July 2021</p>
              </div>
            </Card>
            <Card title="Hobbies and Interests" grow>
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

      {/* Projects */}
      <FullSection>
        <div
          id="projects"
          className="flex flex-col items-center p-16 space-y-12 text-gray-500"
        >
          <div className="flex flex-col text-center">
            <h1 className="text-3xl text-center font-semibold text-gray-700 mb-6">
              My Projects.
            </h1>
            <p>
              <span className="font-medium">My Tech Stack: </span>
              <span className="sm:gradient-text text-indigo-500 italic font-medium">
                Java, TypeScript, Python, C#, Unity, HTML, CSS, JavaScript,
                ReactJS, NodeJS, ExpressJS
              </span>
            </p>
            <p>
              Here are some of the projects I've worked on over the years. More
              coming soon!
            </p>
          </div>

          <div className="space-y-6">
            <Project
              title="Portfolio Site (this!)"
              stack="HTML, CSS, TailwindCSS, JavaScript, ReactJS"
              detail="My first complete website, built entirely from scratch using ReactJS! Also implemented styling using a very handy CSS library known as TailwindCSS."
              date="January 2022"
            />
            <Project
              title="UWO Course Scrapper"
              stack="Python, Requests, HTML, JSON, IO"
              detail="After realizing how difficult it was to retrieve my university's course data, I decided to implement my own method of obtaining this data. Written in Python, I used the Requests library to send requests to one our calender planning sites. Using the rendered HTML, I parsed out my relevant information and organized it into a neat JSON file and exported it to a subdirectory using File IO."
              date="July 2021"
              link="https://github.com/MaazSiddiqi?tab=repositories"
            />
            <Project
              title="Automated Camp Booker"
              stack="Python, Selenium, HTML"
              detail="A client wanted an easier way to book campsites on Parks Canada. I wrote a simple script in Python in which the user just needs to enter there campsite preference. Once entered, a browser manipulated through Selenium navigates through the Parks Canada site and books a spot with their credentials. No data is saved once the script ends."
              date="June 2021"
            />
            <Project
              title="First Person 'Bunny Hop' Character Controller"
              stack="Unity, C#"
              detail="With a sudden interest in game development, I dove into the Unity game engine and learnt C# to try make my own. I was having too much fun just working on the character controller, as I kept thinking of new features to add! I decided I wanted to replicate the movement mechanic known in many popular games such as CSGO, TitanFall, Apex Legends etc. known as 'Bunny Hopping'. After doing research on the mechanic and the clever vector maths behind it, I was able to successfuly replicate a character controller with bunny hopping!"
              date="May 2021"
            />
            <Project
              title="iPhone Simulator"
              stack="Processing"
              detail="What started out as a school project as a simple Grade 10 Computer Science project turned into the spark that would make me eager to pick up programming again. In this app, I created an iPhone through Processing, a java-like language taught in our school, with features such as battery draining and recharging, home screen, lock screen, a calculator app, and a stopwatch app, all in one project!"
              date="March 2021"
            />

            <div>
              {/* <h1 className="text-xl text-center font-semibold gradient-text mt-14 ">
                And many more coming soon!
              </h1> */}
              <Card colour="border border-indigo-500">
                <h1 className="text-xl text-center font-semibold gradient-text">
                  And many more coming soon!
                </h1>
              </Card>
            </div>
          </div>
        </div>
      </FullSection>

      <section className="flex flex-col space-y-8 min-h-[25rem] p-14 bg-slate-50 text-gray-500"></section>

      <section
        id="contact"
        className="flex flex-col lg:flex-row min-h-fit m-8 md:m-16 md:mx-20 border"
      >
        <div className="flex flex-col lg:max-w-[50%] grow bg-gray-50 p-8 md:p-12 rounded-l-xl">
          <h1 className="text-3xl font-semibold text-gray-700 pb-8">
            Like what you see?{" "}
            <span className="gradient-text whitespace-nowrap">
              Get in touch!
            </span>
          </h1>

          <div className="flex flex-col grow space-y-6">
            <div>
              <h2 className="font-light text-sm">Email</h2>
              <p className="text-lg font-medium">maazali22@gmail.com</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-light text-sm">Links</h2>
              <div className="flex flex-col space-y-3">
                <Socials
                  Icon={FaGithub}
                  href="https://github.com/MaazSiddiqi"
                  suffix="/MaazSiddiqi"
                />
                <Socials
                  Icon={FaLinkedinIn}
                  href="https://www.linkedin.com/in/maaz-siddiqi/"
                  suffix="/maaz-siddiqi"
                />
              </div>
            </div>
            <div className="pt-2 align-bottom">
              <a href={ResumePDF} target="_blank">
                <Button text="Resume" />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </>
  )
}

export default App
