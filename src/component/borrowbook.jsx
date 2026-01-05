import { useEffect, useRef } from "react";
import "./borrowbook-module.css";
import Atitle from "./atitle";
import Adoublebutton from "./adoublebutton";
import Bookcadre from "./Bookcadre";
import { useState } from "react";
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
  // الدالة المسؤولة عن تغيير المحتوى مع animation
  const changeContent = (index) => {
    setAnimate(true); // بداية fade-out
    setTimeout(() => {
      setCurrentIndex(index); // تغيير المحتوى
      setAnimate(false); // fade-in
    }, 300); // مدة التلاشي
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
        // else {
        //   entry.target.classList.remove("animate"); // 🔁 reset
        // }
      },
      { threshold: 0.1 }
    );

    if (borrowRef.current) observer.observe(borrowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={borrowRef} className="borrowedbook">
      <Atitle
        text01="Loved"
        text02="Most borrowed books"
        text03="These are the books our readers keep coming back for. Trusted, tested, and treasured."
      />

      <Adoublebutton buttext01="View" buttext02="Browse" />
      <Bookcadre
        book={books[currentIndex]}
        dat01="This week"
        dat02="This month"
        dat03="This year"
        animate={animate}
        onWeek={() => changeContent(0)}
        onMonth={() => changeContent(1)}
        onYear={() => changeContent(2)}
      />
    </div>
  );
}
