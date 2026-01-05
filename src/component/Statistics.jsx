import { useEffect, useRef } from "react";
import "./Statistics-module.css";
import Atitle from "./atitle";
import Adoublebutton from "./adoublebutton";
import Astaticnumber from "./astaticnumber";

export default function Statistics() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // ✅ مرة واحدة فقط
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} className="Statisticscss">
      <Atitle
        text01="Upcoming"
        text02="Statistics"
        text03="Our library stands as a gathering place for readers and learners."
      />

      <div className="containersta">
        <div className="conelement01">
          <div className="impactsta1">Impact</div>
          <div className="impactsta2">By the numbers we serve</div>
          <div className="impactsta3">
            These figures show the breadth of our community.
          </div>
          <Adoublebutton buttext01="Join" buttext02="Explore" />
        </div>

        <div className="conelement02">
          <Astaticnumber
            target={50000}
            label="Books in collection"
            desc="Spanning every genre and interest imaginable"
          />
          <Astaticnumber
            target={12500}
            label="Active members"
            desc="A community of readers growing every month"
          />
        </div>
      </div>
    </div>
  );
}
