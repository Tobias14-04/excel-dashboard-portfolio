import type { CSSProperties } from "react";

type DashboardPlaceholderProps = {
  accent: string;
  projectNumber: string;
  featured?: boolean;
};

const barHeights = [38, 62, 47, 78, 58, 88, 70];

export function DashboardPlaceholder({
  accent,
  projectNumber,
  featured = false,
}: DashboardPlaceholderProps) {
  const style = { "--project-accent": accent } as CSSProperties;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#111b2d] p-4 shadow-2xl shadow-slate-950/20 ${
        featured ? "min-h-[300px] sm:min-h-[390px]" : "min-h-[260px]"
      }`}
      style={style}
      aria-label="Pladsholder til skærmbillede af dashboard"
    >
      <div className="pointer-events-none absolute inset-0 dashboard-grid opacity-40" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-300/70" />
          <span className="h-2 w-2 rounded-full bg-amber-300/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
        </div>
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">
          Excel / Projekt {projectNumber}
        </span>
      </div>

      <div className="relative mt-4 flex items-end justify-between gap-3">
        <div>
          <div className="h-2 w-20 rounded-full bg-white/15" />
          <div className="mt-2 h-3 w-32 rounded-full bg-white/75" />
        </div>
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-slate-400">
          Alle måneder
        </span>
      </div>

      <div className="relative mt-4 grid grid-cols-3 gap-2">
        {["Omsætning", "Resultat", "Afvigelse"].map((label, index) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="truncate text-[8px] uppercase tracking-wider text-slate-500">
              {label}
            </p>
            <div
              className={`mt-2 h-2 rounded-full ${index === 0 ? "w-12" : "w-9"}`}
              style={{ backgroundColor: index === 1 ? accent : "#ffffff" }}
            />
            <div className="mt-2 h-1 w-7 rounded-full bg-white/10" />
          </div>
        ))}
      </div>

      <div className="relative mt-3 grid grid-cols-[1.35fr_0.65fr] gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-3 h-1.5 w-16 rounded-full bg-white/15" />
          <div className="flex h-16 items-end gap-1.5 sm:h-20">
            {barHeights.map((height, index) => (
              <span
                key={height}
                className="flex-1 rounded-t-[3px] bg-[var(--project-accent)] opacity-75"
                style={{ height: `${height}%`, opacity: 0.4 + index * 0.07 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="h-1.5 w-10 rounded-full bg-white/15" />
          <div className="mx-auto h-12 w-12 rounded-full border-[7px] border-white/10 border-t-[var(--project-accent)] sm:h-14 sm:w-14" />
          <div className="mx-auto h-1 w-8 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-[#111b2d] via-[#111b2d]/90 to-transparent pb-4 pt-10">
        <span className="rounded-full border border-white/10 bg-[#111b2d]/90 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-slate-400 backdrop-blur">
          Skærmbillede kommer snart
        </span>
      </div>
    </div>
  );
}
