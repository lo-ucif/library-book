import { useEffect, useRef } from "react";
import Atitle from "./atitle";
import Aevntcard from "./aevntcard";

import eventphoto01 from "../img/Placeholder Image3.png";
import eventphoto02 from "../img/Placeholder Image4.png";
import eventphoto03 from "../img/Placeholder Image5.png";

export default function Event() {
  const eventRef = useRef(null);

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

    if (eventRef.current) observer.observe(eventRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={eventRef} className="flex flex-col items-center max-w-[1280px] gap-20 py-20 px-5 lg:gap-12 lg:py-12 self-stretch group opacity-0 group-[.animate]:animate-fadeUp">
      <div className="opacity-0 group-[.animate]:animate-fadeUp">
        <Atitle
          text01="Upcoming"
          text02="Events"
          text03="Join us for readings, workshops, and conversations about books."
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:flex-col sm:items-start sm:gap-12 sm:self-stretch opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.2s]">
        <Aevntcard
          feb01="Sat"
          feb02="20"
          feb03="Dec 2025"
          eventimg={eventphoto01}
          eventt1="Reading"
          eventt2="Author talk"
          eventt3="Meet the author of this year's most talked about novel."
        />
        <Aevntcard
          feb01="Sun"
          feb02="21"
          feb03="Dec 2025"
          eventimg={eventphoto02}
          eventt1="Workshop"
          eventt2="Writing workshop"
          eventt3="Learn the craft of writing from experienced instructors."
        />
        <Aevntcard
          feb01="Mon"
          feb02="22"
          feb03="Dec 2025"
          eventimg={eventphoto03}
          eventt1="Club"
          eventt2="Book club"
          eventt3="Discuss this month's selection with fellow readers."
        />
      </div>

      <button className="flex px-6 py-[10px] justify-center items-center gap-2 rounded-md border border-brand-dark/15 bg-transparent text-brand-dark font-sans text-text-regular font-medium hover:tracking-[3px] active:translate-y-[10px] transition-all duration-500 opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.4s] sm:w-[60%] sm:text-sm sm:px-4 sm:py-2 lg:px-5 lg:py-2 lg:text-base">
        View all
      </button>
    </div>
  );
}
