export type Project = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  skills: string[];
  featured?: boolean;
  accent: string;
  images?: Array<{
    src: string;
    alt: string;
    label: string;
    width: number;
    height: number;
  }>;
};

export type SkillGroupData = {
  number: string;
  title: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    number: "08",
    title: "Virksomheds-dashboard",
    description:
      "Et samlet virksomhedsprojekt med et dashboard til analyse af omsætning, omkostninger, resultat og afvigelser samt en automatisk rapport med måneds-dropdown og tekstkonklusion.",
    bullets: [
      "KPI’er for faktisk omsætning, faktisk resultat og resultatafvigelse",
      "Grafer for omsætning pr. produkt, resultat pr. måned og afvigelser",
      "Slicers for produkt, måned, region og kategori",
      "Rapport-ark med dropdown og automatisk tekstkonklusion",
    ],
    skills: [
      "Excel-tabeller",
      "SUM.HVISER",
      "HVIS",
      "KPI’er",
      "Slicers",
      "Dashboard-design",
      "Budget vs faktisk",
      "Automatisk rapportering",
    ],
    featured: true,
    accent: "#b8f34a",
    images: [
      {
        src: "/projects/project-08-dashboard.png",
        alt: "Excel-dashboard med KPI’er, grafer og slicers for produkt, måned, region og kategori",
        label: "Virksomheds-dashboard",
        width: 1293,
        height: 728,
      },
      {
        src: "/projects/project-08-report.png",
        alt: "Automatisk Excel-rapport med månedsvalg, KPI’er, status og tekstkonklusion",
        label: "Automatisk virksomhedsrapport",
        width: 1108,
        height: 414,
      },
    ],
  },
  {
    number: "03",
    title: "Salgsanalyse",
    description:
      "Et dynamisk salgsdashboard med analyse af nettoomsætning, rabat, vareforbrug, dækningsbidrag og dækningsgrad.",
    bullets: [
      "KPI’er for salg og indtjening",
      "Grafer og slicers for sælger, region, kategori og måned",
      "Beregning af bruttoomsætning, nettoomsætning og dækningsgrad",
    ],
    skills: [
      "Salgsanalyse",
      "Dækningsbidrag",
      "Dækningsgrad",
      "Pivottabeller",
      "Slicers",
      "KPI’er",
    ],
    accent: "#8ee6d1",
  },
  {
    number: "06",
    title: "Budget vs faktisk",
    description:
      "Et budgetkontrol-dashboard, der sammenligner budget og faktiske tal og viser afvigelser måned for måned.",
    bullets: [
      "Samlet budget, faktisk og afvigelse",
      "Afvigelse i kroner og procent",
      "Statuslogik, der vurderer indtægter og omkostninger forskelligt",
    ],
    skills: [
      "Budgetopfølgning",
      "Afvigelsesanalyse",
      "HVIS-formler",
      "ABS",
      "KPI’er",
      "Dashboard-design",
    ],
    accent: "#f5c86b",
  },
  {
    number: "07",
    title: "Automatisk rapport",
    description:
      "En automatisk månedsrapport med dropdown, KPI’er og tekstkonklusion, hvor Excel selv vurderer om resultatet er over eller under budget.",
    bullets: [
      "Dropdown til måned",
      "Automatisk tekstkonklusion",
      "Graf for resultat budget vs faktisk",
    ],
    skills: [
      "Automatisk rapportering",
      "TEKST-formel",
      "HVIS",
      "Dropdown",
      "KPI’er",
    ],
    accent: "#a9b8ff",
  },
];

export const skillGroups: SkillGroupData[] = [
  {
    number: "01",
    title: "Data og struktur",
    skills: [
      "Excel-tabeller",
      "Datavalidering",
      "Power Query",
      "Datarensning",
      "Datatyper",
    ],
  },
  {
    number: "02",
    title: "Analyse",
    skills: [
      "Budget vs faktisk",
      "Salgsanalyse",
      "Lagerstyring",
      "Regnskabsanalyse",
      "KPI’er",
    ],
  },
  {
    number: "03",
    title: "Formler",
    skills: ["XOPSLAG", "SUM.HVISER", "HVIS", "TEKST", "ABS"],
  },
  {
    number: "04",
    title: "Dashboard-design",
    skills: [
      "Pivottabeller",
      "Pivotdiagrammer",
      "Slicers",
      "Rapportforbindelser",
      "KPI-bokse",
      "Grafer",
    ],
  },
];

export const processSteps = [
  "Forstår problemet og hvilke tal der betyder noget",
  "Strukturerer og renser data",
  "Bygger beregninger, KPI’er og nøgletal",
  "Designer dashboardet visuelt",
  "Gør det nemt at filtrere og bruge",
];
