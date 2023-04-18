import React, { useState } from "react"
import WorkExperiences, { experiences } from "./Experiences"
import ExtraCurriculars, { extraCurriculars } from "./ExtraCurriculars"
import Projects, { projects } from "./Projects"

// Typically would be retrived through db
const subtitles = {
  work: "Here is an overview of my work experience so far!",
  extraCurriculars:
    "Here is a summary of everything I've been involved in at Western University!",
  projects:
    "Here are some of the projects I've worked on over the years. More coming soon!",
}

const tabCounts = {
  work: experiences.length,
  extraCurriculars: extraCurriculars.length,
  projects: projects.length,
}

export default function Experiences() {
  const [tab, setTab] = useState("work")

  const TabNavButton = ({ name, title }) => (
    <button
      className={`${
        tab === name
          ? "bg-indigo-500 text-white font-semibold"
          : "bg-white text-gray-500 hover:bg-slate-50 active:bg-indigo-50"
      } flex px-8 py-1 rounded-xl font-light drop-shadow-md hover:scale-105 active:scale-95 active:drop-shadow-sm transition-all duration-200`}
      onClick={() => setTab(name)}
      key={name + "button"}
    >
      <div>
        {title}{" "}
        <span
          className={`font-light text-xs self-end ${
            tab !== name ? "text-slate-400" : "text-white"
          }`}
        >
          {tabCounts[name]}
        </span>
      </div>
    </button>
  )

  // Tab navigation for each panel: work, extraCurriculars, projects
  const TabNavigation = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center px-6 space-y-3 md:space-y-0 md:space-x-4 rounded-md w-full">
        <TabNavButton name="work" title="Work" />
        <TabNavButton name="extraCurriculars" title="Extra Curriculars" />
        <TabNavButton name="projects" title="Projects" />
      </div>
    )
  }

  const Tab = ({ name }) => {
    switch (name) {
      case "work":
        return WorkExperiences()
      case "extraCurriculars":
        return ExtraCurriculars()
      case "projects":
        return Projects()
      default:
        return WorkExperiences()
    }
  }

  return (
    <section className="bg-white">
      <div
        id="experiences"
        className="flex flex-col items-center px-8 py-16 md:p-16 space-y-8 text-gray-500"
      >
        <div className="flex flex-col text-center space-y-4 w-full">
          <h1 className="text-3xl text-center font-semibold text-gray-700 mb-6">
            My Experience.
          </h1>
          <p>
            <span className="font-medium">My Tech Stack: </span>
            <span className="sm:gradient-text text-indigo-500 italic font-medium">
              Java, TypeScript, Python, C#, Unity, HTML, CSS, JavaScript,
              ReactJS, NodeJS, ExpressJS
            </span>
          </p>
          <TabNavigation />
          {/* <p className="text-center">{subtitles[tab]}</p> */}
        </div>

        <div className="space-y-6">
          <Tab name={tab} />
        </div>
      </div>
    </section>
  )
}
