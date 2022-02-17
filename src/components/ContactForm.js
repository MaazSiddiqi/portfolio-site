import React, { useEffect, useState } from "react"
import Input from "./Input"
import Button from "./Btn"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState({ done: false, request: null })

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const { status, text } = await emailjs.send(
        "service_97hw26l",
        "template_k9xgqwc",
        { firstName, lastName, email, subject, body },
        "user_YhJeMvcg993CmzxEeaUaQ"
      )
      setIsSubmitting(false)
      setSubmitted({ done: true, request: { status, text } })
      console.log("Email request details: ")
      console.log("status", { status, text })
    } catch (error) {
      console.log(error)
      const _request = { status: 404, text: "Did not send" }
      setSubmitted({
        done: true,
        request: _request,
      })
      setIsSubmitting(false)
      console.log("Email request details: ")
      console.log("status", _request)
    }
  }

  return (
    <div className="relative flex flex-col lg:max-w-[50%] grow overflow-hidden">
      <form className="space-y-3 m-8 md:m-12" onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
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
          submitted.done ? "translate-y-[-100%] opacity-100" : "opacity-0"
        } h-full w-full bg-white/80 backdrop-blur-sm transition-all ease-out duration-300 flex items-center justify-center`}
      >
        {submitted.request && submitted.request.status === 200 ? (
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
        ) : (
          <div className="flex flex-col space-y-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-600 text-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-center text-gray-500 font-semibold text-lg">
              Uh oh! Something went wrong...
            </h2>
            <p className="text-center text-gray-400 text-sm">
              Please try again later or email manually
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
