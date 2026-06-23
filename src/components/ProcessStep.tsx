type ProcessStepProps = {
  number: number;
  text: string;
  isLast: boolean;
};

export function ProcessStep({ number, text, isLast }: ProcessStepProps) {
  return (
    <li className="relative grid grid-cols-[3.5rem_1fr] gap-5 pb-8 last:pb-0 sm:grid-cols-[4.5rem_1fr] sm:gap-7 sm:pb-10">
      {!isLast ? (
        <span className="absolute bottom-0 left-7 top-14 w-px bg-slate-200 sm:left-9" aria-hidden="true" />
      ) : null}
      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white font-mono text-sm font-semibold text-emerald-700 shadow-sm sm:h-[4.5rem] sm:w-[4.5rem]">
        {String(number).padStart(2, "0")}
      </span>
      <div className="flex min-h-14 items-center border-b border-slate-200 pb-8 sm:min-h-[4.5rem] sm:pb-10">
        <p className="max-w-xl text-lg font-medium leading-7 tracking-tight text-slate-800 sm:text-xl">
          {text}
        </p>
      </div>
    </li>
  );
}
