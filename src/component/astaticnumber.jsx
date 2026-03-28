import { useEffect, useState, useRef } from "react";

export default function Astaticnumber(props) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const match = props.num.match(/(\d+)/);
    if (!match) return;

    const target = parseInt(match[1], 10);

    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, props.num]);

  const suffix = props.num.replace(/\d+/, "");
  const displayNum = hasStarted ? `${count}${suffix}` : `0${suffix}`;

  return (
    <div ref={countRef} className="flex p-8 flex-col items-start gap-8 self-stretch rounded-brand-large border border-brand-dark/15 bg-[#f2f2f2] sm:self-center sm:w-full">
      <div className="text-brand-brown text-[80px] sm:text-[56px] font-bold leading-[130%]">
        {displayNum}
      </div>
      <div className="text-brand-dark font-sans text-[26px] sm:text-[18px] font-medium leading-[140%] tracking-[-0.26px] sm:tracking-[-0.18px]">
        {props.title}
      </div>
      <div className="text-brand-dark font-sans text-text-regular sm:text-sm font-normal leading-[150%] sm:leading-[21px]">
        {props.desc}
      </div>
    </div>
  );
}
