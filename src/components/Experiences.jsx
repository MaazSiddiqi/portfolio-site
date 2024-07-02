import React from "react"
import Experience from "./Cards/Experience"

// Typically would be retrived through db
export const experiences = [
  {
    title: "Software Development Intern",
    company: "RBC Amplify",
    stack:
      "ReactJS, NextJS, Typescript, PostgreSQL, NLP, LLM, Docker, Kubernetes",
    detail:
      "I develop an internal self-serve solution that reduces HR call volumes for 90,000 employees. My work involves building deployment pipelines using Kubernetes on OpenShift and ensuring that the solution architecture aligns with executive goals. Additionally, I enhance user experience and product capabilities by utilizing NLP, LLMs, and custom RAG models.",
    date: "May 2024 - Present",
    link: "",
  },
  {
    title: "Software Development Intern",
    company: "PeerSupport.io",
    stack: "ReactJS, ExpressJS, PostgreSQL, Sequelize, AWS, Firebase",
    detail:
      "I optimized the core recommendations algorithm by 80% through parallel data handling and consolidated queries. I improved app analytics by integrating Google Analytics and Firebase for real-time and miscellaneous data storage. I implemented API Cron jobs using AWS Lambda functions and Event Triggers, and provisioned new RDS databases. Lastly, I designed and integrated a complex user reporting system from scratch to enhance the user experience.",
    date: "Sept. 2022 - Apr. 2023",
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
