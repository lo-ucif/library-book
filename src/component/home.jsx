import { useEffect, useRef } from "react";
import img01 from "../img/home page.jpg";

export default function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      },
      { threshold: 0.3 }
    );

    if (homeRef.current) observer.observe(homeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={homeRef} className="flex flex-col justify-center items-center py-[112px] px-[64px] gap-20 self-stretch rounded-brand-large pt-[10px] sm:p-5 lg:px-10 lg:py-20 group">
      <div className="relative flex h-[640px] px-16 flex-col justify-center items-center gap-2 self-stretch rounded-brand-large sm:p-0">
        <img
          className="h-[640px] w-full lg:w-[1280px] object-cover brightness-50 rounded-brand-large opacity-0 group-[.animate]:animate-heroImage"
          src={img01}
          alt=""
        />

        <div className="absolute flex max-w-[768px] flex-col items-center justify-center gap-8 text-center sm:max-w-[80%] sm:gap-6">
          <div className="text-white text-center font-sans text-[84px] sm:text-[48px] lg:text-[56px] font-medium leading-[110%] tracking-[-0.84px] opacity-0 group-[.animate]:animate-titleAnim">
            Discover your next favorite book
          </div>
          <div className="text-white text-center font-sans text-text-medium sm:text-[12px] sm:w-[80%] lg:text-[18px] lg:w-[70%] font-normal leading-[150%] opacity-0 group-[.animate]:animate-textFade">
            Explore thousands of books, events, and resources available for you.
          </div>
          <div className="flex gap-4 sm:gap-3 items-center">
            <button className="flex px-6 py-[10px] sm:px-5 sm:py-2 justify-center items-center gap-2 rounded-md border border-white bg-white text-brand-dark font-sans text-text-regular sm:text-[12px] font-medium leading-[150%] opacity-0 group-[.animate]:animate-buttonUp01 hover:bg-transparent hover:text-white transition-all duration-500 hover:tracking-[3px] active:translate-y-[10px]">
              Browse
            </button>
            <button className="flex px-6 py-[10px] sm:px-5 sm:py-2 justify-center items-center gap-2 rounded-md border border-white/20 bg-transparent text-white font-sans text-text-regular sm:text-[12px] font-medium leading-[150%] opacity-0 group-[.animate]:animate-buttonUp02 hover:border-white transition-all duration-500 hover:tracking-[3px] active:translate-y-[10px]">
              Learn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
