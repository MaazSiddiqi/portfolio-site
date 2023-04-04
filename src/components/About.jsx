import React from "react"

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 p-16 z-[0]"
    >
      <div className="space-y-8">
        <div className="max-w-5xl space-y-8 text-slate-50">
          <h1 className=" font-bold text-3xl text-slate-100">About Me.</h1>
          <div className="text-lg space-y-6 font-light">
            <p>
              Hi! I'm Maaz Siddiqi, a passionate self-taught developer studying
              at Western University in London, Ontario. I'm enrolled in a
              Computer Science program, and planning to minor in Software
              Engineering. I've been programming for 4 years now, and I'm always
              looking for new opportunities to learn and grow. This year, I hope
              to diversify my skillset and explore machine learning in more
              detail!
            </p>
            <p>
              Fun fact, I've actually moved around 10 times in my life already!
              I was born in Karachi, Pakistan, and at the age of 7, my parents
              took a leap of faith to bring my siblings to Canada. We've had to
              move around numerous times since then, but each experience was
              unforgettable! I've met all kinds of people, picking up a variety
              of skills in the process.
            </p>
            <p className="font-light">
              <span className="!text-white mb-2 font-semibold text-transparent">
                Interests:
              </span>{" "}
              Machine learning and AI, Augmented Reality, Hackathons, Fitness,
              Badminton, Basketball, Cooking
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
