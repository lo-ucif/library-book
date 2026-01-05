import "./finalpart-module.css";
import logo from "../img/Boo__k library.svg";
import { useEffect, useRef } from "react";

export default function Finalpart() {
  const finalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.1 }
    );

    if (finalRef.current) {
      observer.observe(finalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="finalpart" ref={finalRef}>
      <div className="logofinlacadre">
        <img style={{ width: "126px", height: "53px" }} src={logo} alt="" />
        <div className="line"></div>
        <div className="titleflex">
          <div className="titlefletxt">About</div>
          <div className="titlefletxt">Catalog</div>
          <div className="titlefletxt">Events</div>
          <div className="titlefletxt">Contact</div>
          <div className="titlefletxt">Privacy</div>
        </div>
      </div>

      <div className="droit">
        <div>© 2025 Generic Book Library Platform. All rights reserved.</div>
        <div className="finallline">
          <a href="#" className="titlefletxt2">
            Privacy Policy
          </a>
          <a href="#" className="titlefletxt2">
            Terms of service
          </a>
          <a href="#" className="titlefletxt2">
            Cookie settings
          </a>
        </div>
      </div>
    </div>
  );
}
