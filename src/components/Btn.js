export default function Btn( { text, onClick } ) {
  return (
    <button onClick={onClick} className="font-medium bg-indigo-600 text-white py-1 px-3 rounded-full hover:bg-white hover:text-black hover:drop-shadow-lg hover:scale-105 active:scale-95 active:bg-indigo-50 transition-all duration-300 ">
      {text}
    </button>
  );
}
