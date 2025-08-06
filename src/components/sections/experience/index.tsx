import { AnimatePresence, motion, useInView } from "motion/react"
import { useRef } from "react"

const EXPERIENCE = [
  {
    company: "Amazon Web Services",
    title: "Software Engineering Intern",
    date: "MAY 2025 - AUG 2025",
  },
  {
    company: "Shopify",
    title: "Software Engineering Intern",
    date: "JAN 2025 - APR 2025",
  },
  {
    company: "Onova",
    title: "Software Engineering Intern",
    date: "SEP 2024 - DEC 2024",
  },
  {
    company: "Royal Bank of Canada",
    title: "Software Engineering Intern",
    date: "MAY 2024 - AUG 2024",
  },
  {
    company: "PeerSupport.io",
    title: "Software Engineering Intern",
    date: "SEP 2022 - APR 2023",
  },
  {
    company: "Opal LLC",
    title: "Software Engineering Intern",
    date: "JUL 2022 - SEP 2022",
  },
] as const

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.33, once: true })

  return (
    <motion.div
      className="grid place-items-center w-screen h-screen p-[15%] relative overflow-hidden z-10"
      ref={ref}
      id="experience"
    >
      <AnimatePresence mode="wait">
        {inView && (
          <motion.div className="absolute top-1/2 left-[calc(50%+10%)] -translate-x-1/2 -translate-y-1/2 w-full h-fit -z-10 pointer-events-none">
            <motion.img
              src="/images/experience.svg"
              alt="experience"
              className="object-cover"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        )}
        <motion.div className="flex flex-col gap-8 w-full max-w-4xl">
          {EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.company + exp.date}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center"
            >
              <div className="flex gap-1 items-end">
                <span className="text-accent text-nowrap">{exp.company}</span>
                <span className="text-dim text-nowrap">{exp.title}</span>
              </div>
              <div className="label">{exp.date}</div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
