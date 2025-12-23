import { useEffect, useRef } from "react";
import "./event-module.css";
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
          observer.unobserve(entry.target); // 🔒 يعمل مرة واحدة فقط
        }
      },
      { threshold: 0.3 }
    );

    if (eventRef.current) observer.observe(eventRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={eventRef} className="eventcss">
      <Atitle
        text01="Upcoming"
        text02="Events"
        text03="Join us for readings, workshops, and conversations about books."
      />

      <div className="eventcardflex">
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

      <button className="butviewall">View all</button>
    </div>
  );
}
