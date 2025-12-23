import { useEffect, useRef, useState } from "react";
import "./astaticnumber-module.css";

export default function Astaticnumber({ target, label, desc }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1500;
          const increment = target / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="conelement021">
      <div className="stanumb01">{count.toLocaleString()}+</div>
      <div>
        <div className="stanumb02">{label}</div>
        <div className="stanumb03">{desc}</div>
      </div>
    </div>
  );
}
