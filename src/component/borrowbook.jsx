import { useEffect, useRef, useState } from "react";
import Atitle from "./atitle";
import Adoublebutton from "./adoublebutton";
import Bookcadre from "./Bookcadre";
import plac01 from "../img/001001.jpg";
import plac02 from "../img/2.jpg";
import plac03 from "../img/image.png";

export default function Borrowbook() {
  const borrowRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const books = [
    {
      img: plac01,
      category: "Islamic Books",
      title: "Diseas And Cure",
      desc: "An Islamic book that explains the diseases of the heart and their cures through faith, prayer, and good deeds.",
    },
    {
      img: plac02,
      category: "Islamic Books",
      title: "I missed a prayer",
      desc: "I Missed a Prayer: Why do some people maintain their prayers while many abandon them? Discover the secrets of those who rarely miss a prayer.",
    },
    {
      img: plac03,
      category: "Educational / Self-Developmen",
      title: "How To English",
      desc: "How To English: 31 Days to be an independent learner (English Edition).",
    },
  ];

  const changeContent = (index) => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimate(false);
    }, 300);
  };

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

    if (borrowRef.current) observer.observe(borrowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={borrowRef} className="flex flex-col items-center py-[112px] px-16 sm:p-5 gap-20 self-stretch group opacity-0 group-[.animate]:animate-fadeUp">
      <div className="opacity-0 group-[.animate]:animate-fadeUp">
        <Atitle
          text01="Loved"
          text02="Most borrowed books"
          text03="These are the books our readers keep coming back for. Trusted, tested, and treasured."
        />
      </div>

      <div className="opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.2s]">
        <Adoublebutton buttext01="View" buttext02="Browse" />
      </div>

      <div className="w-full opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.4s]">
        <Bookcadre
          book={books[currentIndex]}
          dat01="This week"
          dat02="This month"
          dat03="This year"
          animate={animate}
          active={currentIndex}
          onWeek={() => changeContent(0)}
          onMonth={() => changeContent(1)}
          onYear={() => changeContent(2)}
        />
      </div>
    </div>
  );
}
