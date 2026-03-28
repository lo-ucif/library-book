import { useEffect, useRef } from "react";

export default function Atitle(props) {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={titleRef} className="flex flex-col items-center group">
      <div className="text-brand-dark text-center font-sans text-base font-semibold leading-[150%] opacity-0 group-[.animate]:animate-fadeUp">
        {props.text01}
      </div>
      <div className="text-brand-brown text-center mt-4 font-sans text-[60px] sm:text-[40px] font-medium leading-[120%] tracking-[-0.6px] opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.2s]">
        {props.text02}
      </div>
      <div className="text-brand-dark text-center mt-6 font-sans text-text-medium sm:text-base font-normal leading-[150%] opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.4s]">
        {props.text03}
      </div>
    </div>
  );
}
