const ABOUT_INFO = [
  {
    topic: "Education",
    answer: "Bachelors of Science, Computer Science @ Western University",
  },
  {
    topic: "Location",
    answer: "Toronto, Ontario",
  },
  {
    topic: "Personal Interests",
    answer: "Hackathons, badminton, climbing, food, travelling",
  },
  {
    topic: "Learning",
    answer: "Low-level programming, distributed systems, infrastructure",
  },
  {
    topic: "Technologies",
    answer: "React, Typescript, Python, Ruby on Rails, Java, C++, Go, Rust",
  },
  {
    topic: "Previously Interned At",
    answer: "Shopify, Onova, RBC, PeerSupport.io, Opal LLC",
  },
]
export function About() {
  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-transparent overflow-hidden">
      <div className="relative z-10 flex flex-row gap-24 items-center bg-transparent p-8 rounded-lg">
        {/* Image section */}
        <img
          src="/images/pfp.jpg"
          alt="Profile"
          className="object-cover grayscale"
        />
        {/* Text section */}
        <div className="flex flex-col gap-4 min-w-[350px] text-left">
          {ABOUT_INFO.map(({ topic, answer }) => (
            <div key={topic} className="flex flex-col gap-3">
              <div className="label">{topic}</div>
              <div className="text-accent">{answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
