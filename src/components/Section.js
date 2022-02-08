import sampleImg from "../images/sample.svg";

export default function Section({ layout = 1, children }) {
  switch (layout) {
    case 1:
      return (
        <section className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-white shadow-inner drop-shadow-xl relative bottom-2 p-14 pt-2 text-lg text-gray-500">
          {children}
        </section>
      );

    case 2:
      return (
        <section className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-white shadow-inner drop-shadow-xl relative bottom-2 p-14">
          {children}
        </section>
      );
    default:
      return (
        <section className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-14 min-h-[25rem]"></section>
      );
  }
}
