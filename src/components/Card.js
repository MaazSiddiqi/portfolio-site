export default function Card({ title, img, grow, children }) {
  return (
    <div
      className={`relative ${
        grow ? "flex-grow" : ""
      } bg-slate-50 rounded-xl p-6 drop-shadow-md hover:scale-105 transition-all duration-200 mx-2`}
    >
      <h1 className="text-gray-700 font-bold text-xl">{title}</h1>
      {children}
    </div>
  );
}
