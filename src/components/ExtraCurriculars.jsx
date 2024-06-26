import React from "react"
import Experience from "./Cards/Experience"

// Typically would be retrived through db
export const extraCurriculars = [
  {
    title: "Co-Chair",
    company: "Hack Western",
    stack: "ReactJS, NextJS, Typescript, TailwindCSS, Prisma, PostgreSQL",
    detail:
      "I led a team of 26 organizers to plan and execute one of Canada's largest hackathons, hosting over 400 attendees for a 3-day event. I secured over $50,000 in sponsorship funding and coordinated promotional campaigns that attracted 1300+ applications, with a live site facilitating 500+ users.",
    date: "Feb 2023 - Jan 2024",
    link: "",
  },
  {
    title: "Organizer (Full Stack Developer)",
    company: "Hack Western",
    stack: "ReactJS, NextJS, Typescript, TailwindCSS, Prisma, PostgreSQL",
    detail:
      "During our hackathon planning for Hack Western 9, I built a promotional site and application portal that resulted in over 1100 applications, and a live site that supported 500+ users. I also implemented complex UI components, utilizing parallax, carousels, animations, and autosave features. Additionally, I created REST APIs with user authentication, OAuth, sign in, and signup flows. To ensure secure data interactions, I designed relational database schemas and integrated type-safe interactions using Prisma ORM.",
    date: "April 2022 - Feb 2023",
    link: "",
  },
  {
    title: "Tech Lead (prev. Developer)",
    company: "Western Developers Society",
    stack: "ReactJS, NodeJS",
    detail:
      "As the Tech Lead, I have been responsible for leading the development and maintenance of the club's main website, as well as supervising all developer teams in the club. This includes providing technical assistance and ensuring progress on projects. Additionally, I have hosted development workshops and managed technical systems during club events. I have also assisted in organizing club tournaments, ensuring fair submissions, and finalist judging.",
    date: "May 2022 - Present",
    link: "",
  },
]

export default function ExtraCurriculars() {
  return (
    <>
      {extraCurriculars.map(({ title, company, stack, detail, date, link }) => (
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
