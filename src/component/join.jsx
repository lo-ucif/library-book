import { useEffect, useRef } from "react";
import Atitle from "./atitle";
import placholder6 from "../img/Placeholder Image6.png";

export default function Join() {
  const joinRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (joinRef.current) observer.observe(joinRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={joinRef} className="flex flex-col items-center py-[112px] px-16 sm:p-5 gap-20 self-stretch group opacity-0 group-[.animate]:animate-fadeUp">
      <div className="flex flex-col items-center gap-8 self-stretch opacity-0 group-[.animate]:animate-fadeUp">
        <Atitle
          text02="Join our reading community"
          text03="Get your library card today and unlock access to our full collection online and in person."
        />

        <div className="flex items-start gap-4">
          <button className="flex px-6 py-[10px] justify-center items-center gap-2 rounded-md border border-brand-brown bg-brand-brown text-white text-text-regular font-medium leading-[150%] hover:bg-transparent hover:text-brand-brown transition-all duration-500 hover:tracking-[3px] active:translate-y-[10px]">
            Register
          </button>
          <button className="flex px-6 py-[10px] justify-center items-center gap-2 rounded-md border border-brand-dark/15 bg-transparent text-brand-dark text-text-regular font-medium leading-[150%] hover:tracking-[3px] active:translate-y-[10px] transition-all duration-500">
            Learn more
          </button>
        </div>
      </div>

      <img className="max-w-full rounded-xl opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.3s]" src={placholder6} alt="Join" />
    </div>
  );
}
