import sampleImg from "../images/sample.svg";

export default function Section({
  img = sampleImg,
  title = "Sample Title",
  children,
  layout,
  bg = 'bg-white'
}) {
  switch (layout) {
    case 1:
      return (
        <section className={`flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] ${bg} shadow-inner drop-shadow-xl relative bottom-2 p-14`}>
          <img
            src={img}
            alt=""
            className="aspect-video max-h-[12rem] lg:max-h-[18rem]"
          />
          <div className="max-w-lg">
            <h1 className="pb-2 font-semibold text-3xl">{title}</h1>
            <p className="pt-2 text-lg text-gray-500">{children}</p>
          </div>
        </section>
      );
      break;
    case 2:
      return (
        <section className={`flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] ${bg} shadow-inner drop-shadow-xl relative bottom-2 p-14`}>
          <div className="max-w-lg">
            <h1 className="pb-2 font-semibold text-3xl">Main Title</h1>
            <p className="pb-2 text-lg text-gray-500">{children}</p>
          </div>
          <img
            src={img}
            alt=""
            className="aspect-video max-h-[12rem] lg:max-h-[18rem]"
          />
        </section>
      );
      break;
    default:
        <section className={`flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] ${bg} shadow-inner drop-shadow-xl relative bottom-2 p-14`}>{children}</section>
      break;
  }
}
