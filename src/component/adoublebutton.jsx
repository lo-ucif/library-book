export default function Adoublebutton(props) {
  return (
    <div className="flex px-6 py-[10px] justify-center items-center gap-6 font-sans group opacity-0 group-[.animate]:animate-fadeUp">
      <button className="flex px-6 py-[10px] justify-center items-center gap-2 rounded-md border border-brand-dark bg-transparent opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.1s] hover:bg-brand-dark hover:text-white transition-all duration-500 hover:tracking-[3px] active:translate-y-[10px]">
        {props.buttext01}
      </button>
      <button className="flex justify-center items-center gap-2 rounded-md border-0 bg-transparent opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.3s] hover:text-brand-brown transition-all duration-500 hover:tracking-[3px] active:translate-y-[10px]">
        {props.buttext02}
      </button>
    </div>
  );
}
