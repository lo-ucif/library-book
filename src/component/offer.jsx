import { useEffect, useRef } from "react";
import Atitle from "./atitle";
import Acadre01 from "./acadre01";
import imgoffer01 from "../img/577345918928178bd97f900349d0b9274b62f552.jpg";
import imgoffer02 from "../img/56c253ef20465dccc409aa8980ae04fc31f573be.jpg";
import imgoffer03 from "../img/54d28e317feb4072c3154e4e833263d8c9e5198b.jpg";

export default function Offer() {
  const offerRef = useRef(null);

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

    if (offerRef.current) observer.observe(offerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center py-[112px] px-1 sm:px-5 gap-20 sm:gap-12 self-stretch">
      <Atitle
        text01="Explore"
        text02="What we offer"
        text03="Start your reading journey with us today"
      />

      <div ref={offerRef} className="flex mt-20 sm:mt-0 flex-wrap items-start gap-8 justify-center group">
        <div className="opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.1s]">
          <Acadre01
            photo={imgoffer01}
            text01="New arrivals"
            text02="Latest titles added weekly"
          />
        </div>
        <div className="opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.3s]">
          <Acadre01
            photo={imgoffer02}
            text01="Popular books"
            text02="Most borrowed selections"
          />
        </div>
        <div className="opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.5s]">
          <Acadre01
            photo={imgoffer03}
            text01="Upcoming events"
            text02="Readings & workshops"
          />
        </div>
      </div>
    </div>
  );
}
