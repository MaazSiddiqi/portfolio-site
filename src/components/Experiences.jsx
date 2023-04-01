import React from "react"
import Experience from "./Cards/Experience"

// Typically would be retrived through db
export const experiences = [
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
    date: "June 2022 - Oct. 2022",
    link: "",
  },
]

export default function Experiences() {
  return (
    <>
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
    </>
  )
}
