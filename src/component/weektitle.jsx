import { useEffect, useRef, useState } from "react";
import "./weektitle-module.css";
import Atitle from "./atitle";
import Adoublebutton from "./adoublebutton";
import Bookcadre from "./Bookcadre";
import plac01 from "../img/Placeholder Image.png";
import plac02 from "../img/algoimg.jpg";
import plac03 from "../img/Story of the Wreck of the Titanic.jpg";

export default function Weektitle() {
  const weekRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const books = [
    {
      img: plac01,
      category: "History / Political Science",
      title: "MEIN KAMPE",
      desc: "Mein Kampf is Adolf Hitler’s autobiography, presenting his political ideas and ideology.",
    },
    {
      img: plac02,
      category: "Mathematical Treatise",
      title: "The Inventor of Algebra",
      desc: "Mathematician Musa Al-Khwarizmi wrote a book explaining in depth how to solve quadratic equations. He also goes into detail on how to solve algebraic problems. This is because the Islamic Society invented algebra and the concept of having letters represent unknown numbers",
    },
    {
      img: plac03,
      category: "World History",
      title: "Story of the Wreck of the Titanic",
      desc: "The Story of the Wreck of the Titanic is a memorial edition that was published in 1922. This book is in good shape for its age. There are a few photos in the front pages.",
    },
  ];

  // الدالة المسؤولة عن تغيير المحتوى مع animation
  const changeContent = (index) => {
    setAnimate(true); // بداية fade-out
    setTimeout(() => {
      setCurrentIndex(index); // تغيير المحتوى
      setAnimate(false); // fade-in
    }, 200); // مدة التلاشي
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.1 }
    );

    if (weekRef.current) observer.observe(weekRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={weekRef} className="weekcss">
      <div className="week-left">
        <Atitle
          text01="New"
          text02="Fresh titles this week"
          text03="We add new books to our shelves every week. Come back often to find what speaks to you."
        />
        <Adoublebutton buttext01="View" buttext02="Browse" />
      </div>

      <Bookcadre
        book={books[currentIndex]}
        dat01="First "
        dat02="Second "
        dat03="Third "
        animate={animate}
        onWeek={() => changeContent(0)}
        onMonth={() => changeContent(1)}
        onYear={() => changeContent(2)}
      />
    </div>
  );
}
