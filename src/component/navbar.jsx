import logo from "../img/Boo__k library.svg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-[10px]">
      <nav className="flex items-center justify-between px-4 py-2 animate-navDown">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <button
            className="lg:hidden p-2 border-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                d="M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z"
                fill="#050906"
              />
            </svg>
          </button>
          <img className="w-[126px] h-[53px] animate-logoPop opacity-0" src={logo} alt="Logo" />
        </div>

        <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 z-50`}>
          <ul className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:mx-auto">
            <li>
              <a className="text-brand-brown font-sans no-underline text-text-regular font-normal" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="text-brand-dark hover:text-brand-brown font-sans no-underline text-text-regular font-normal transition-colors" href="#offer">
                Offer
              </a>
            </li>
            <li>
              <a className="text-brand-dark hover:text-brand-brown font-sans no-underline text-text-regular font-normal transition-colors" href="#event">
                Events
              </a>
            </li>
            <li>
              <a className="text-brand-dark hover:text-brand-brown font-sans no-underline text-text-regular font-normal transition-colors" href="#statistics">
                Statistics
              </a>
            </li>
            <li>
              <a className="text-brand-dark hover:text-brand-brown font-sans no-underline text-text-regular font-normal transition-colors" href="#question">
                Question
              </a>
            </li>
            <li>
              <a className="text-brand-dark hover:text-brand-brown font-sans no-underline text-text-regular font-normal transition-colors" href="#member">
                voices
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center">
          <button className="flex px-5 py-2 justify-center items-center rounded-md border border-brand-brown bg-brand-brown text-white font-sans text-text-regular font-medium hover:bg-transparent hover:text-brand-brown transition-all duration-500 hover:tracking-[3px] active:translate-y-[10px] active:duration-100">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}
