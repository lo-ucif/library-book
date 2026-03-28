import Aetwal from "./Aetwal";

export default function Amember(params) {
  return (
    <div className="flex flex-col items-start gap-6 flex-1 shrink-0 h-[335px] sm:h-fit p-8 rounded-brand-large border border-brand-dark/15 bg-[#f2f2f2]">
      <div className="flex items-start gap-1">
        <Aetwal />
        <Aetwal />
        <Aetwal />
        <Aetwal />
        <Aetwal />
      </div>
      <div className="text-brand-dark text-text-medium font-normal leading-[150%]">
        {params.metext}
      </div>
      <div className="flex items-center gap-4 self-stretch">
        <div className="w-12 h-12 aspect-square rounded-full bg-[#c6c6c6]"></div>
        <div className="flex flex-col">
          <div className="text-brand-dark text-text-regular font-semibold leading-[150%]">
            {params.mename}
          </div>
          <div className="text-brand-dark text-text-regular font-normal leading-[150%]">
            {params.memember}
          </div>
        </div>
      </div>
    </div>
  );
}
