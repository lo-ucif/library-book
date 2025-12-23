import { useEffect, useRef } from "react";
import Atitle from "./atitle";
import placholder6 from "../img/Placeholder Image6.png";
import "./join-module.css";

export default function Join() {
  const joinRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // ⛔ مرة واحدة فقط
        }
      },
      { threshold: 0.3 }
    );

    if (joinRef.current) observer.observe(joinRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={joinRef} className="join">
      <div className="joininf">
        <Atitle
          text02="Join our reading community"
          text03="Get your library card today and unlock access to our full collection online and in person."
        />

        <div className="buttonjoin">
          <button className="butj01">Register</button>
          <button className="butj02">Learn more</button>
        </div>
      </div>

      <img className="joinimg" src={placholder6} alt="Join" />
    </div>
  );
}
