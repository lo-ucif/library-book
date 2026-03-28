import { useEffect, useRef } from "react";

export default function Loop() {
  const loopRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (loopRef.current) observer.observe(loopRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={loopRef} className="flex flex-col items-center py-[112px] pt-[50px] px-16 sm:px-5 sm:gap-10 gap-20 self-stretch font-sans group opacity-0 group-[.animate]:animate-fadeUp">
      <div className="flex flex-col items-center gap-8 self-stretch opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.2s]">
        <div className="flex flex-col items-center gap-6 self-stretch">
          <div className="text-brand-brown text-center text-[60px] sm:text-[36px] font-medium leading-[120%] sm:leading-[44px] tracking-[-0.6px]">
            Stay in the loop
          </div>
          <div className="text-brand-dark text-center text-text-medium sm:text-base font-normal leading-[150%] sm:leading-6">
            Get updates on new arrivals, events, and library news delivered to your inbox.
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-3">
          <div className="flex items-center gap-4 sm:flex-col sm:items-stretch sm:w-full">
            <input
              className="flex w-[362px] sm:w-full p-2 px-3 items-center gap-2 rounded-md border border-brand-dark/15 bg-brand-dark/5 text-brand-dark/60 text-text-regular sm:text-base font-normal leading-[150%]"
              type="email"
              placeholder="Your email"
            />
            <button className="flex px-6 py-[10px] sm:py-[10px] justify-center items-center gap-2 rounded-md border border-brand-brown bg-brand-brown text-white text-text-regular sm:text-base font-medium leading-[150%] hover:bg-transparent hover:text-brand-brown transition-all duration-500 hover:tracking-[3px] active:translate-y-[10px]">
              Subscribe
            </button>
          </div>

          <div className="text-brand-dark text-center text-[12px] font-normal leading-[150%] sm:leading-[18px]">
            By subscribing you agree to receive updates and promotional content from us.
          </div>
        </div>
      </div>
    </div>
  );
}
