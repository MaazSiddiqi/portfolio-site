import Card from "./Card";
export default function Project({ title, stack, date, img, detail }) {
  return (
    <div className="flex flex-col items-center">
      <Card grow img={img}>
        <div className="space-y-4 bg-[./images/RandomCode.jpeg] max-w-4xl">
          <div>
            <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
            <h2 className="italic font-normal">
              Tech Stack:{" "}
              <span className="sm:gradient-text text-indigo-500 font-light">
                {stack}
              </span>
            </h2>
            <h2 className="font-extralight">{date}</h2>
          </div>
          <p className="font-light">{detail}</p>
        </div>
      </Card>
    </div>
  );
}
