import React, { useRef, useState } from "react"
import Input from "./Input"
import Button from "./Btn"

export default function ContactForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const sendEmail = (first, last, _email, _subject, _body, e) => {
    e.preventDefault()
    console.log(first, last, _email, _subject, _body)
    setIsSubmitting(true)
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="relative flex flex-col lg:max-w-[50%] grow overflow-hidden">
      <form
        className="space-y-3 m-8 md:m-12"
        onSubmit={(e) =>
          sendEmail(firstName, lastName, email, subject, body, e)
        }
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <Input
            label="First-Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            required
          />
          <Input
            label="Last-Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            required
          />
        </div>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="johndoe@example.com"
          required
        />
        <Input
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Maaz, your story has touched the depths of my soul..."
          required
        />
        <div className="flex flex-col shrink">
          <label
            htmlFor="contact-body"
            className="font-extralight text-xs py-[0.125rem] px-1 text-fuchsia-500 "
          >
            Body
          </label>
          <textarea
            name="contact-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="p-3 border rounded-md text-sm font-light text-gray-500 min-h-[50px] h-fit focus-within:ring-2 focus-within:ring-fuchsia-500 focus-within:ring-offset-2 transition-all"
            required
          />
        </div>
        <Button
          text={isSubmitting ? "Sending..." : "Submit"}
          type="Submit"
          className="w-full"
          bg="bg-fuchsia-500"
        />
      </form>
      <div
        className={`absolute top-full ${
          submitted ? "translate-y-[-100%] opacity-100" : "opacity-0"
        } h-full w-full bg-white/80 backdrop-blur-sm transition-all ease-out duration-300 flex items-center justify-center`}
      >
        <div className="space-y-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600 text-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-center text-gray-500 font-semibold text-lg">
            Sent!
          </h2>
        </div>
      </div>
    </div>
  )
}
