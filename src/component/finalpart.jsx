import logo from "../img/Boo__k library.svg";
import { useEffect, useRef } from "react";

export default function Finalpart() {
  const finalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.1 }
    );

    if (finalRef.current) {
      observer.observe(finalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center py-20 px-16 sm:px-5 gap-20 self-stretch opacity-0 translate-y-[60px] transition-all duration-[0.8s] [&.show]:opacity-100 [&.show]:translate-y-0" ref={finalRef}>
      <div className="flex flex-col items-center gap-8 justify-center self-stretch">
        <img className="w-[126px] h-[53px]" src={logo} alt="Logo" />
        <div className="w-[89px] h-[5px] bg-brand-brown"></div>
        <div className="flex justify-center items-start gap-8 self-stretch flex-wrap">
          <div className="text-brand-dark text-base font-semibold leading-[150%]">About</div>
          <div className="text-brand-dark text-base font-semibold leading-[150%]">Catalog</div>
          <div className="text-brand-dark text-base font-semibold leading-[150%]">Events</div>
          <div className="text-brand-dark text-base font-semibold leading-[150%]">Contact</div>
          <div className="text-brand-dark text-base font-semibold leading-[150%]">Privacy</div>
        </div>
      </div>

      <div className="flex justify-between items-start self-stretch flex-wrap gap-5 sm:flex-wrap-reverse">
        <div className="text-brand-dark text-base leading-[150%]">© 2025 Generic Book Library Platform. All rights reserved.</div>
        <div className="flex flex-wrap gap-6 items-start">
          <a href="#" className="text-brand-dark text-base font-normal leading-[150%] underline underline-offset-auto">
            Privacy Policy
          </a>
          <a href="#" className="text-brand-dark text-base font-normal leading-[150%] underline underline-offset-auto">
            Terms of service
          </a>
          <a href="#" className="text-brand-dark text-base font-normal leading-[150%] underline underline-offset-auto">
            Cookie settings
          </a>
        </div>
      </div>
    </div>
  );
}
