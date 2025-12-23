import { useEffect, useRef } from "react";
import "./loop-module.css";

export default function Loop() {
  const loopRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target); // 🔒 مرة واحدة فقط
        }
      },
      { threshold: 0.3 }
    );

    if (loopRef.current) observer.observe(loopRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={loopRef} className="loop">
      <div className="stayloop">
        <div className="titleloop">
          <div className="txtloop">Stay in the loop</div>
          <div className="txt2loop">
            Get updates on new arrivals, events, and library news delivered to
            your inbox.
          </div>
        </div>

        <div className="loop2">
          <div className="loop3">
            <input className="txtemail" type="email" placeholder="Your email" />
            <button className="butsub">Subscribe</button>
          </div>

          <div className="txt3loop">
            By subscribing you agree to receive updates and promotional content
            from us.
          </div>
        </div>
      </div>
    </div>
  );
}
