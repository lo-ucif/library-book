import { useEffect, useRef, useState } from "react";
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
      title: "Story of the Wreck of the Titanic",
      desc: "The Story of the Wreck of the Titanic is a memorial edition that was published in 1922. This book is in good shape for its age. There are a few photos in the front pages.",
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
      title: "Historical Collections",
      desc: "A collection of significant historical documents and stories from across the globe, providing insights into various cultures and eras.",
    },
  ];

  const changeContent = (index) => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimate(false);
    }, 200);
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

    if (weekRef.current) observer.observe(weekRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={weekRef} className="flex flex-col items-center py-[112px] px-16 sm:p-5 gap-20 self-stretch group opacity-0 group-[.animate]:animate-fadeUp">
      <div className="flex flex-col items-center gap-10 sm:gap-8 opacity-0 group-[.animate]:animate-fadeUp">
        <Atitle
          text01="New"
          text02="Fresh titles this week"
          text03="We add new books to our shelves every week. Come back often to find what speaks to you."
        />
        <Adoublebutton buttext01="View" buttext02="Browse" />
      </div>

      <div className="w-full opacity-0 group-[.animate]:animate-fadeUp [animation-delay:0.3s]">
        <Bookcadre
          book={books[currentIndex]}
          dat01="First "
          dat02="Second "
          dat03="Third "
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
