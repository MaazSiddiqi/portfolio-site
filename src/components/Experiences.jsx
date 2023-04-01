import React from "react"
import Project from "./Project"
import Card from "./Card"
import { useState } from "react"
import Experience from "./Experience"

// Typically would be retrived through db
const experiences = [
  {
    title: "Software Development Intern",
    company: "Honest Empathy",
    stack: "ReactJS, ExpressJS, PostgreSQL, Sequelize, AWS, Firebase",
    detail:
      "I optimized the core recommendations algorithm by 80% through parallel data handling and consolidated queries. I improved app analytics by integrating Google Analytics and Firebase for real-time and miscellaneous data storage. I implemented API Cron jobs using AWS Lambda functions and Event Triggers, and provisioned new RDS databases. Lastly, I designed and integrated a complex user reporting system from scratch to enhance the user experience.",
    date: "Sept. 2022 - Present",
    link: "",
  },
  {
    title: "Software Development Intern",
    company: "Opal, LLC.",
    stack: "MongoDB, ExpressJS, ReactJS, NodeJS, Socket.io",
    detail:
      "I developed a real-time chat feature using WebSockets and Socket.io, optimized database design, and reduced API request times by 50%. I also created a model for implementing significant database schema changes while preserving existing data.",
    date: "Sept. 2022 - Present",
    link: "",
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen bg-white ">
      <div
        id="projects"
        className="flex flex-col items-center p-16 space-y-12 text-gray-500"
      >
        <div className="flex flex-col text-center">
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
          <p>Here is an overview of my work experience so far!</p>
        </div>

        <div className="space-y-6">
          {experiences.map(({ title, company, stack, detail, date, link }) => (
            <Experience
              title={company}
              subtitle={title}
              stack={stack}
              detail={detail}
              date={date}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
