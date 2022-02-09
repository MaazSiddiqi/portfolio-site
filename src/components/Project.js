import Card from "./Card";
export default function Project({ title, stack, date, img, detail }) {
  return (
    <div className="flex flex-col items-center">
      <Card grow img={img}>
        <div className="space-y-4 bg-[./images/RandomCode.jpeg] max-w-4xl">
          <div>
            <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
            <h2 className="italic font-medium">
              <span className="text-indigo-500">Tech Stack:</span> {stack}
            </h2>
            <h2 className="font-extralight">{date}</h2>
          </div>
          <p className="font-light">{detail}</p>
        </div>
      </Card>
    </div>
  );
}
