export default function Card({ title, img, children }) {
  return (
    <div className="relative flex-grow max-w-72 min-h-[200px] h-auto bg-slate-50 rounded-xl p-6 drop-shadow-md hover:scale-105 transition-all duration-200 mx-2">
      <h1 className="text-gray-700 font-bold text-xl">{title}</h1>
      {children}
    </div>
  );
}
