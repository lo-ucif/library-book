import Contentcadre from "./contentcadre";

export default function Bookcadre(props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-16 shrink-0">
      <div className="flex justify-center items-center gap-6 font-sans">
        <button
          onClick={props.onWeek}
          className={`h-[45px] px-0 py-2 border-0 bg-transparent border-b-2 transition-colors ${
            props.active === 0 ? "text-brand-brown border-brand-brown" : "border-transparent text-brand-dark"
          }`}
        >
          {props.dat01}
        </button>
        <button
          onClick={props.onMonth}
          className={`h-[45px] px-0 py-2 border-0 bg-transparent border-b-2 transition-colors ${
            props.active === 1 ? "text-brand-brown border-brand-brown" : "border-transparent text-brand-dark"
          }`}
        >
          {props.dat02}
        </button>
        <button
          onClick={props.onYear}
          className={`h-[45px] px-0 py-2 border-0 bg-transparent border-b-2 transition-colors ${
            props.active === 2 ? "text-brand-brown border-brand-brown" : "border-transparent text-brand-dark"
          }`}
        >
          {props.dat03}
        </button>
      </div>

      <div
        className={`transition-all duration-300 ${
          props.animate ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        }`}
      >
        <Contentcadre
          img={props.book.img}
          category={props.book.category}
          title={props.book.title}
          desc={props.book.desc}
        />
      </div>
    </div>
  );
}
