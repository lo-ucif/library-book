export default function Aevntcard(props) {
  return (
    <div className="flex flex-col items-start flex-1 shrink-0 h-[557px] rounded-brand-large border border-brand-dark/15 bg-[#f2f2f2] sm:w-full">
      <div className="relative self-stretch aspect-[405/270] rounded-brand-large">
        <img className="w-full h-full object-cover rounded-brand-large" src={props.eventimg} alt="" />
        <div className="absolute top-4 left-4 flex w-28 p-3 flex-col justify-center items-center rounded-brand-large bg-white">
          <div className="text-brand-dark text-center font-sans text-base font-normal leading-[150%]">
            {props.feb01}
          </div>
          <div className="text-brand-dark text-center font-sans text-[40px] font-medium leading-[130%] tracking-[-0.4px]">
            {props.feb02}
          </div>
          <div className="text-brand-dark text-center font-sans text-base font-normal leading-[150%]">
            {props.feb03}
          </div>
        </div>
      </div>
      <div className="flex p-6 flex-col items-start gap-4 self-stretch font-sans">
        <div className="flex px-[10px] py-1 items-start rounded-[4px] border border-brand-dark/15 bg-brand-dark/5">
          {props.eventt1}
        </div>
        <div className="text-brand-dark font-sans text-[32px] font-medium leading-[130%] tracking-[-0.32px]">
          {props.eventt2}
        </div>
        <div className="text-brand-dark font-sans text-text-regular font-normal leading-[150%]">
          {props.eventt3}
        </div>
        <button className="flex justify-center items-center gap-2 rounded-md bg-transparent hover:text-brand-brown transition-all duration-500 hover:tracking-[3px] active:translate-y-[10px]">
          <div>Learn more</div>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.38708 6.67285C9.48791 6.67285 9.56488 6.70326 9.64294 6.78125L14.5873 11.7256C14.6412 11.7795 14.6663 11.8215 14.6781 11.8496V11.8506C14.6929 11.8861 14.7015 11.9259 14.7015 11.9746C14.7015 12.0233 14.6929 12.0631 14.6781 12.0986V12.0996C14.6663 12.1277 14.6412 12.1697 14.5873 12.2236L9.61853 17.1924C9.54076 17.2702 9.47362 17.292 9.39294 17.2891C9.29892 17.2856 9.21805 17.2537 9.1322 17.168C9.05408 17.0898 9.02283 17.013 9.02283 16.9121C9.02283 16.8112 9.05408 16.7344 9.1322 16.6562L13.8138 11.9746L9.10681 7.26758C9.02915 7.18988 9.0072 7.12357 9.01013 7.04297C9.01358 6.9487 9.04615 6.86731 9.1322 6.78125C9.21013 6.70344 9.28649 6.67293 9.38708 6.67285Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
