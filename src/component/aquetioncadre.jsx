export default function Aquetioncadre(params) {
  return (
    <div className="rounded-brand-large border border-brand-dark/15 bg-[#f2f2f2]">
      <div className="flex p-5 px-6 items-center justify-between gap-6 self-stretch text-brand-dark">
        <div className="text-brand-dark text-text-medium font-bold leading-[150%]">
          {params.titleq}
        </div>
        <svg
          className="relative w-6 h-6 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17.5996 5.9248C17.7639 5.9248 17.8659 5.97331 17.9463 6.05371C18.0265 6.13402 18.0751 6.23551 18.0752 6.39941C18.0752 6.56362 18.0266 6.66571 17.9463 6.74609L12.6924 12L13.0459 12.3535L17.9463 17.2529C18.0267 17.3333 18.0752 17.4355 18.0752 17.5996C18.0752 17.7639 18.0267 17.8659 17.9463 17.9463C17.8659 18.0267 17.7639 18.0752 17.5996 18.0752C17.4355 18.0752 17.3333 18.0267 17.2529 17.9463L12.3535 13.0459L12 12.6924L6.74609 17.9463C6.66571 18.0266 6.56362 18.0752 6.39941 18.0752C6.23551 18.0751 6.13402 18.0265 6.05371 17.9463C5.97331 17.8659 5.9248 17.7639 5.9248 17.5996C5.92484 17.4355 5.97334 17.3333 6.05371 17.2529L11.3066 12L10.9531 11.6465L6.05371 6.74609C5.97331 6.66569 5.9248 6.56368 5.9248 6.39941C5.92488 6.23537 5.97337 6.13405 6.05371 6.05371C6.13405 5.97337 6.23537 5.92488 6.39941 5.9248C6.56368 5.9248 6.66569 5.97331 6.74609 6.05371L11.6465 10.9531L12 11.3066L17.2529 6.05371C17.3333 5.97334 17.4355 5.92484 17.5996 5.9248Z"
            fill="#050906"
            stroke="#050906"
          />
        </svg>
      </div>
      <div className="flex p-6 pt-0 items-start gap-4 self-stretch text-brand-dark text-text-regular font-normal leading-[150%]">
        {params.textq}
      </div>
    </div>
  );
}
