import { ProcessStep } from "@/components/ProcessStep";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillGroup } from "@/components/SkillGroup";
import { processSteps, projects, skillGroups } from "@/data/portfolio";

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? <path d="M5 13 13 5M6 5h7v7" /> : <path d="M3 9h12M11 5l4 4-4 4" />}
    </svg>
  );
}

function HeroDashboard() {
  const bars = [42, 58, 52, 72, 63, 84, 75, 92, 80, 96, 87, 100];

  return (
    <div className="relative mx-auto w-full max-w-[590px]" aria-hidden="true">
      <div className="absolute -inset-12 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="relative rotate-[1.5deg] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#17243a] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.4)] sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300 text-sm font-black text-slate-950">
              X
            </span>
            <div>
              <div className="h-2 w-24 rounded-full bg-white/80" />
              <div className="mt-1.5 h-1.5 w-16 rounded-full bg-white/15" />
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-widest text-slate-400">
            2026 / Alle måneder
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            ["Omsætning", "2,48 mio.", "+12,4%"],
            ["Resultat", "426.800", "+8,7%"],
            ["Afvigelse", "+34.200", "Over budget"],
          ].map(([label, value, delta], index) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.045] p-3 sm:p-4">
              <p className="truncate text-[8px] uppercase tracking-[0.12em] text-slate-500 sm:text-[9px]">
                {label}
              </p>
              <p className="mt-2 truncate font-mono text-sm font-semibold text-white sm:text-lg">{value}</p>
              <p className={`mt-1 text-[8px] font-medium sm:text-[9px] ${index === 2 ? "text-lime-300" : "text-emerald-300"}`}>
                {delta}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-[1.4fr_0.6fr] gap-2.5">
          <div className="rounded-xl border border-white/10 bg-white/[0.045] p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.12em] text-slate-500 sm:text-[9px]">Resultat pr. måned</p>
                <p className="mt-1 text-[9px] font-medium text-slate-300">Budget / Faktisk</p>
              </div>
              <div className="flex gap-2 text-[7px] text-slate-500">
                <span>● Budget</span>
                <span className="text-lime-300">● Faktisk</span>
              </div>
            </div>
            <div className="mt-5 flex h-24 items-end gap-1.5 border-b border-white/10 sm:h-32">
              {bars.map((bar, index) => (
                <div key={`${bar}-${index}`} className="relative flex h-full flex-1 items-end">
                  <span className="absolute bottom-0 left-0 h-[65%] w-full rounded-t-[2px] bg-white/10" />
                  <span
                    className="relative z-10 w-full rounded-t-[2px] bg-lime-300"
                    style={{ height: `${bar}%`, opacity: 0.55 + index * 0.03 }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.045] p-3 sm:p-4">
            <p className="text-[8px] uppercase tracking-[0.12em] text-slate-500 sm:text-[9px]">Omsætning</p>
            <div className="mt-5 space-y-3">
              {[78, 62, 48, 35].map((width, index) => (
                <div key={width}>
                  <div className="mb-1 flex justify-between text-[7px] text-slate-500">
                    <span>Produkt {String.fromCharCode(65 + index)}</span>
                    <span>{width}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-emerald-300/80" style={{ width: `${width}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/15 bg-white p-3.5 shadow-2xl sm:-left-8 sm:p-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <svg viewBox="0 0 20 20" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7">
            <path d="m4 10 4 4 8-9" />
          </svg>
        </span>
        <div>
          <p className="font-mono text-[8px] font-medium uppercase tracking-widest text-slate-400">Automatisk status</p>
          <p className="mt-0.5 text-xs font-semibold text-slate-900">Resultat over budget</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f8f4]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1322]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Gå til toppen">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-300 text-sm font-black tracking-tight text-slate-950">
              TN
            </span>
            <span className="hidden text-sm font-semibold text-white sm:inline">Tobias Nielsen</span>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-medium text-slate-300 md:flex" aria-label="Primær navigation">
            <a className="transition-colors hover:text-white" href="#projekter">Projekter</a>
            <a className="transition-colors hover:text-white" href="#kompetencer">Kompetencer</a>
            <a className="transition-colors hover:text-white" href="#proces">Proces</a>
            <a className="transition-colors hover:text-white" href="#om">Om mig</a>
          </nav>

          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-lime-300/60 hover:bg-lime-300 hover:text-slate-950"
          >
            Kontakt
            <ArrowIcon diagonal />
          </a>
        </div>
      </header>

      <section id="top" className="relative bg-[#0b1322] pb-24 pt-36 text-white sm:pb-28 sm:pt-40 lg:min-h-[800px] lg:pb-32">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute left-[8%] top-32 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.8)]" />
              HHX · Excel · Dataanalyse
            </div>
            <h1 className="max-w-3xl text-balance text-[2.15rem] font-semibold leading-[1.06] tracking-[-0.055em] text-white min-[420px]:text-[2.65rem] min-[420px]:leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
              Jeg bygger Excel-dashboards til <span className="text-lime-300">økonomi, salg</span>, budgetopfølgning og rapportering.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Jeg hedder Tobias Nielsen, går på HHX og arbejder målrettet med Excel, dashboards og dataanalyse. Jeg har gennemført et praktisk Excel-forløb med 8 projekter, hvor jeg har arbejdet med alt fra Power Query og pivottabeller til KPI’er, regnskabsanalyse og automatiske rapporter.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projekter"
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-lime-200"
              >
                Se projekter
                <ArrowIcon />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Kontakt
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="font-mono text-2xl font-semibold text-white">08</p>
                <p className="mt-1 text-xs text-slate-500">Praktiske projekter</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-mono text-2xl font-semibold text-white">100%</p>
                <p className="mt-1 text-xs text-slate-500">Fokus på Excel</p>
              </div>
            </div>
          </div>

          <HeroDashboard />
        </div>
      </section>

      <section id="projekter" className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Udvalgt arbejde"
              title="Fra rå data til brugbart overblik."
              description="Fire projekter, der viser forskellige sider af mit arbejde med Excel — fra salg og budgetkontrol til samlet virksomhedsrapportering."
            />
            <p className="max-w-xs border-l-2 border-lime-400 pl-4 text-sm leading-6 text-slate-500">
              Alle cases er bygget som praktiske opgaver med fokus på, at tallene skal være nemme at forstå og bruge.
            </p>
          </div>

          <div className="mt-14">
            <ProjectCard project={projects[0]} />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(1).map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="kompetencer" className="relative bg-[#0d1728] py-24 sm:py-28 lg:py-32">
        <div className="dashboard-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Værktøjskasse"
                title="Kompetencer, jeg bruger i praksis."
                description="Jeg kombinerer struktur, formler og visuel formidling for at bygge regneark, der giver mening for den person, der skal bruge dem."
                light
              />
              <div className="mt-10 hidden lg:block">
                <div className="h-px w-full bg-gradient-to-r from-lime-300/60 to-transparent" />
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                  Excel / Analyse / Rapportering
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <SkillGroup key={group.number} group={group} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proces" className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Min proces"
              title="Sådan arbejder jeg med et dashboard"
              description="Et godt dashboard starter ikke med farver og grafer. Det starter med at forstå problemet og skabe en datastruktur, man kan stole på."
            />
          </div>
          <ol>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step}
                number={index + 1}
                text={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </ol>
        </div>
      </section>

      <section id="om" className="pb-24 sm:pb-28 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-10 lg:p-14">
            <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-lime-200/50 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
              <div className="flex aspect-square max-w-[280px] flex-col justify-between rounded-[1.75rem] bg-[#0d1728] p-7 text-white sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">Profil</span>
                </div>
                <div>
                  <p className="text-6xl font-semibold tracking-[-0.06em] text-lime-300">TN</p>
                  <p className="mt-3 text-sm text-slate-400">HHX-studerende<br />med blik for data.</p>
                </div>
              </div>

              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Om mig</p>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                  Nysgerrig på tallene. Seriøs omkring håndværket.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  Jeg hedder Tobias Nielsen og går på HHX. Jeg arbejder målrettet med Excel, økonomi og dashboards, fordi jeg gerne vil kunne bruge det praktisk til analyse, rapportering og senere mindre kundeopgaver. Jeg er ikke færdigudlært ekspert endnu, men jeg har bygget en solid base gennem 8 praktiske Excel-projekter.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {['Struktureret', 'Praktisk orienteret', 'Læringsdrevet'].map((quality) => (
                    <span key={quality} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                      {quality}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-5 pb-5 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-lime-300 px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[70px] border-slate-950/5" />
          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-900">Kontakt</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Skal dine tal være lettere at forstå?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-800 sm:text-lg">
                Har du brug for et simpelt Excel-dashboard, en budgetmodel eller bedre overblik over dine tal?
              </p>
            </div>
            <a
              href="mailto:tobias.nielsen@example.com"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Send mail
              <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b1322] px-5 py-8 text-slate-400 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tobias Nielsen. Bygget med fokus på Excel og data.</p>
          <a href="#top" className="inline-flex items-center gap-2 font-medium text-slate-300 transition hover:text-white">
            Til toppen
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
