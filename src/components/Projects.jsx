import React from "react"
import Card from "./Cards/Card"
import Project from "./Cards/Project"

// Typically would be retrived through db
export const projects = [
  {
    title: "Zlang Compiler",
    stack: "C++, LLVM",
    detail:
      "A custom programming language developed as an exploratory project around programming language development. This project aims to implement a complete language utilizing LLVM as a backend.",
    date: "Sept. 2022",
    link: "https://github.com/MaazSiddiqi?tab=repositories",
  },
  {
    title: "Western Rank",
    stack: "Python, Numpy",
    detail:
      "A cross-functional team of four to build Western Rank, the first course review platform for Western University, using ReactJS, NextJS, Typescript, TailwindCSS, Prisma, and PostgreSQL. The platform attracted over 10,000 visitors within the first 24 hours and garnered 470+ reviews. I developed the course rankings algorithm, authentication, and review system, and served as the lead code reviewer.",
    date: "Sept. 2022",
    link: "https://github.com/MaazSiddiqi?tab=repositories",
  },
  {
    title: "MNIST Classifier from Scratch",
    stack: "Python, Numpy",
    detail:
      "I developed a multi-layer, densely connected feed-forward neural network from scratch to classify handwritten images of numbers in the MNIST dataset. Using Python and Numpy for matrix operations, I trained the model on 60,000 images, achieving a record accuracy of 97% by employing Xavier Initialization and Stochastic Gradient Descent techniques.",
    date: "Jun. 2023",
    link: "https://github.com/MaazSiddiqi?tab=repositories",
  },
  {
    title: "EYES.py (Hack the North 2022)",
    stack: "Python, Adhawk SD Kit",
    detail:
      "Created an analytics tool to generate heatmaps using vision detection for insight on user attention direction on a site. Utilized Adhawk Microsystem's MindLink eye-tracking glasses to get user vision coordinates on screen as input for custom heatmap generation algorithm with scalable precision.",
    date: "Sept. 2022",
    link: "https://github.com/MaazSiddiqi?tab=repositories",
  },
  {
    title: "UWO Timetables",
    stack:
      "ReactJS, NextJS, Redux, TailwindCSS, NodeJS, NextAuth, Prisma, PostgreSQL",
    detail:
      "The UWO Timetables project is a smart student organization hub aimed at modernizing the course selection process at Western University. The project includes features such as degree assisted course planning, course and professor reviews, and assignment deadline and grade calculation tools. Web scrapers were built in Python for public university sites to extract course data from Western's database.",
    date: "April 2022",
    link: "https://github.com/MaazSiddiqi?tab=repositories",
  },
  {
    title: "UWO Course Scrapper",
    stack: "Python, Requests, BeautifulSoup, HTML, JSON, IO",
    detail:
      "After realizing how difficult it was to retrieve my university's course data, I decided to implement my own method of obtaining this data. Written in Python, I used the Requests library to send requests to one our calender planning sites. Using the rendered HTML, I parsed out my relevant information and organized it into a neat JSON file and exported it to a subdirectory using File IO.",
    date: "July 2021",
    link: "https://github.com/MaazSiddiqi?tab=repositories",
  },
  {
    title: "Automated Camp Booker",
    stack: "Python, Selenium, HTML",
    detail:
      "A client wanted an easier way to book campsites on Parks Canada. I wrote a simple script in Python in which the user just needs to enter there campsite preference. Once entered, a browser manipulated through Selenium navigates through the Parks Canada site and books a spot with their credentials. No data is saved once the script ends.",
    date: "June 2021",
    link: "",
  },
  {
    title: "First Person 'Bunny Hop' Character Controller",
    stack: "Unity, C#",
    detail:
      "With a sudden interest in game development, I dove into the Unity game engine and learnt C# to try make my own. I was having too much fun just working on the character controller, as I kept thinking of new features to add! I decided I wanted to replicate the movement mechanic known in many popular games such as CSGO, TitanFall, Apex Legends etc. known as 'Bunny Hopping'. After doing research on the mechanic and the clever vector maths behind it, I was able to successfuly replicate a character controller with bunny hopping!",
    date: "January 2022",
    link: "",
  },
  {
    title: "iPhone Simulator",
    stack: "Processing",
    detail:
      "What started out as a school project as a simple Grade 10 Computer Science project turned into the spark that would make me eager to pick up programming again. In this app, I created an iPhone through Processing, a java-like language taught in our school, with features such as battery draining and recharging, home screen, lock screen, a calculator app, and a stopwatch app, all in one project!",
    date: "March 2021",
    link: "",
  },
]

export default function Projects() {
  return (
    <>
      {projects.map(({ title, stack, detail, date, link }) => (
        <Project
          title={title}
          stack={stack}
          detail={detail}
          date={date}
          link={link}
        />
      ))}
    </>
  )
}
