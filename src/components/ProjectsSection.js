import React from "react"
import Project from "./Project"
import Card from "./Card"

export default function ProjectsSection() {
  return (
    <section className="min-h-screen bg-white ">
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
    </section>
  )
}
