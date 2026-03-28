import { useEffect, useRef } from "react";
import Astaticnumber from "./astaticnumber";
import Atitle from "./atitle";
import Adoublebutton from "./adoublebutton";

export default function Statistics() {
  const statsRef = useRef(null);

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

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} className="flex flex-col items-center py-[112px] px-16 sm:px-5 sm:py-16 gap-20 sm:gap-12 self-stretch font-sans group opacity-0 group-[.animate]:animate-fadeUp">
      <div className="flex flex-col items-center gap-10 sm:gap-8 opacity-0 group-[.animate]:animate-fadeUp">
        <Atitle
          text01="Impact"
          text02="The heart of our community"
          text03="We are more than just books. We are a place for discovery, learning, and growth."
        />
        <Adoublebutton buttext01="View" buttext02="Browse" />
      </div>

      <div className="flex items-center gap-20 flex-wrap self-stretch sm:flex-col sm:gap-12 w-full">
        <div className="flex flex-col items-start gap-8 flex-1 sm:self-stretch opacity-0 group-[.animate]:animate-fadeUp">
          <div className="text-brand-dark font-semibold text-base leading-[150%]">
            Our impact
          </div>
          <div className="text-brand-dark text-[60px] sm:text-[40px] font-medium leading-[120%] tracking-[-0.6px]">
            The heart of our community
          </div>
          <div className="text-brand-dark text-text-medium sm:text-base font-normal leading-[150%]">
            We are more than just books. We are a place for discovery, learning, and growth.
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 flex-1 sm:self-stretch sm:items-center sm:w-[295px] opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.2s]">
          <Astaticnumber
            num="10k+"
            title="Books"
            desc="Explore our vast collection across all genres and interests."
          />
          <Astaticnumber
            num="5k+"
            title="Members"
            desc="Join a growing community of readers and learners."
          />
        </div>
      </div>
    </div>
  );
}
