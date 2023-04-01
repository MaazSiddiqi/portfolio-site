import Card from "./Card"
export default function Project({ title, stack, date, img, detail }) {
  return (
    <div className="flex flex-col items-center">
      <Card grow img={img}>
        <div className="space-y-4 max-w-4xl">
          <div>
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
              <h2 className="font-light">{date}</h2>
            </div>
            <h2 className="italic font-normal">
              Tech Stack:{" "}
              <span className="sm:gradient-text text-fuchsia-600 font-light">
                {stack}
              </span>
            </h2>
          </div>
          <p className="font-light">{detail}</p>
        </div>
      </Card>
    </div>
  )
}
