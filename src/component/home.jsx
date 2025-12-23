import { useEffect, useRef } from "react";
import "./home-module.css";
import img01 from "../img/home page.jpg";

export default function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); // 👈 يعاود يخدم
        }
      },
      { threshold: 0.3 }
    );

    if (homeRef.current) observer.observe(homeRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={homeRef} className="home">
      <div className="homecadre">
        <img className="img01" src={img01} alt="" />

        <div className="cadretexthome">
          <div className="texthome01">Discover your next favorite book</div>
          <div className="texthome02">
            Explore thousands of books, events, and resources available for you.
          </div>
          <div className="buttoncadrehome">
            <button className="buttonhome01">Browse</button>
            <button className="buttonhome02">Learn</button>
          </div>
        </div>
      </div>
    </div>
  );
}
