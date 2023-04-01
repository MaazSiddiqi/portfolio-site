import Card from "./Card"
export default function Project({ title, subtitle, stack, date, img, detail }) {
  return (
    <div className="flex flex-col items-center">
      <Card grow img={img}>
        <div className="space-y-4 max-w-4xl">
          <div>
            <div className="flex items-end space-x-2">
              <h1 className="text-xl font-bold text-gray-700">{title}</h1>
              <h2 className="text-l font-semibold text-gray-500">{subtitle}</h2>
            </div>
            <h2 className="italic font-normal">
              Tech Stack:{" "}
              <span className="sm:gradient-text text-fuchsia-600 font-light">
                {stack}
              </span>
            </h2>
            <h2 className="font-extralight">{date}</h2>
          </div>
          <p className="font-light">{detail}</p>
        </div>
      </Card>
    </div>
  )
}
