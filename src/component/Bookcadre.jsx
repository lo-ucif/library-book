import "./Bookcadre-module.css";
import Contentcadre from "./contentcadre";
import { useState } from "react";

export default function Bookcadre({
  book,
  dat01,
  dat02,
  dat03,
  onWeek,
  onMonth,
  onYear,
  animate,
}) {

  const [activeButton, setActiveButton] = useState(0);

  const handleWeek = () => {
    setActiveButton(0); 
    onWeek(); 
  };

  const handleMonth = () => {
    setActiveButton(1);
    onMonth();
  };

  const handleYear = () => {
    setActiveButton(2);
    onYear();
  };

  return (
    <div className="bookcadre">
      <div className="threebut">
        <button
          className={`but3three ${activeButton === 0 ? "onclicked" : ""}`}
          onClick={handleWeek}
        >
          {dat01}
        </button>
        <button
          className={`but3three ${activeButton === 1 ? "onclicked" : ""}`}
          onClick={handleMonth}
        >
          {dat02}
        </button>
        <button
          className={`but3three ${activeButton === 2 ? "onclicked" : ""}`}
          onClick={handleYear}
        >
          {dat03}
        </button>
      </div>

      <div className={`content-wrapper ${animate ? "fade-out" : "fade-in"}`}>
        <Contentcadre
          place01={book.img}
          inf01={book.category}
          inf02={book.title}
          inf03={book.desc}
        />
      </div>
    </div>
  );
}
