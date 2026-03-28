export default function Contentcadre(props) {
  return (
    <div className="flex flex-wrap items-start shrink-0 self-stretch rounded-brand-large border border-brand-dark/15 bg-[#f2f2f2] sm:flex-col sm:gap-4 sm:p-4">
      <img
        className="h-[640px] w-[600px] sm:w-full sm:h-[320px] object-cover filter brightness-80 rounded-brand-large sm:self-center"
        src={props.img}
        alt={props.title}
      />
      <div className="flex p-12 sm:p-4 flex-col justify-center items-start font-sans gap-8 sm:gap-4 flex-1 shrink-0 self-stretch sm:items-center sm:text-center">
        <div className="text-brand-dark font-semibold text-base leading-[150%] sm:text-sm sm:leading-5">
          {props.category}
        </div>
        <div className="text-brand-dark text-[48px] sm:text-[32px] font-medium leading-[120%] tracking-[-0.48px] sm:tracking-[-0.3px]">
          {props.title}
        </div>
        <div className="text-brand-dark text-text-regular sm:text-base font-normal leading-[150%] sm:leading-6">
          {props.desc}
        </div>
      </div>
    </div>
  );
}
