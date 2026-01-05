import { useEffect, useRef } from "react";
import "./atitle-style.css";

export default function Atitle(props) {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); // 👈 reset animation
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={titleRef} className="atitle">
      <div className="text01title">{props.text01}</div>
      <div className="text02title">{props.text02}</div>
      <div className="text03title">{props.text03}</div>
    </div>
  );
}
