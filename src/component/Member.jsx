import { useEffect, useRef, useState } from "react";
import Amember from "./amember";
import Atitle from "./atitle";

export default function Member() {
  const memberRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          entry.target.classList.add("animate");
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (memberRef.current) observer.observe(memberRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={memberRef} className="flex flex-col items-center py-[112px] px-16 sm:px-5 gap-20 self-stretch font-sans group opacity-0 group-[.animate]:animate-fadeUp">
      <Atitle
        text02="Member voices"
        text03="Hear what our readers have to say about their library experience."
      />

      <div className="flex items-start gap-8 self-stretch flex-wrap justify-between opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.2s]">
        <Amember
          metext="This library changed how I read. The staff knows books like no one else, and they always point me toward something I didn't know I needed."
          mename="Mohamed Marmoush"
          memember="Regular member"
        />
        <Amember
          metext="The events here bring people together in a way that matters. I've made friends and discovered authors I love through the book clubs."
          mename="Islem Slimani"
          memember="Book club participant"
        />
        <Amember
          metext="Free access to thousands of books and digital resources? It's the best deal in town. This library is essential to our community"
          mename="Rafik Saïfi"
          memember="Student"
        />
      </div>
    </div>
  );
}
