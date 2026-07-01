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
      "Et samlet dashboard, der giver hurtigt overblik over omsætning, omkostninger, resultat og afvigelser. Projektet gør det lettere at følge virksomhedens udvikling og se, hvor resultaterne afviger fra budgettet.",
    bullets: [
      "Samler de vigtigste nøgletal ét sted",
      "Gør det nemt at filtrere på produkt, måned, region og kategori",
      "Viser både dashboard og automatisk rapport til månedlig opfølgning",
      "Gør afvigelser og trends lettere at opdage",
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
      "Et salgsdashboard, der gør det nemmere at analysere, hvilke produkter, sælgere og regioner der skaber mest omsætning og dækningsbidrag.",
    bullets: [
      "Skaber overblik over salgsperformance på tværs af produkter og sælgere",
      "Viser dækningsbidrag og dækningsgrad, så indtjening kan vurderes",
      "Gør det lettere at sammenligne regioner, kategorier og måneder",
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
    images: [
      {
        src: "/projects/project-03-sales-dashboard.png",
        alt: "Excel-dashboard med salgsanalyse, KPI’er, grafer og slicers for sælger, region, kategori og måned",
        label: "Salgsanalyse-dashboard",
        width: 1402,
        height: 715,
      },
    ],
  },
  {
    number: "06",
    title: "Budget vs faktisk",
    description:
      "Et budgetopfølgnings-dashboard, der sammenligner budget og faktiske tal, så afvigelser hurtigt kan opdages og forklares.",
    bullets: [
      "Viser samlet budget, faktisk resultat og afvigelse",
      "Fremhæver gode og dårlige afvigelser",
      "Gør månedlig budgetkontrol mere overskuelig",
      "Hjælper med at finde poster, hvor tallene afviger mest",
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
    images: [
      {
        src: "/projects/project-06-budget-dashboard.png",
        alt: "Excel-dashboard der sammenligner budget og faktisk med KPI’er, afvigelser og grafer",
        label: "Budget vs faktisk-dashboard",
        width: 918,
        height: 726,
      },
    ],
  },
  {
    number: "07",
    title: "Automatisk rapport",
    description:
      "En automatisk månedsrapport, der samler KPI’er, graf og tekstkonklusion i ét rapportark, så månedens resultat hurtigt kan opsummeres.",
    bullets: [
      "Dropdown gør det nemt at skifte måned",
      "KPI’er opdateres automatisk ud fra den valgte måned",
      "Tekstkonklusionen opsummerer resultatet uden manuel omskrivning",
      "Reducerer manuelt rapportarbejde",
    ],
    skills: [
      "Automatisk rapportering",
      "TEKST-formel",
      "HVIS",
      "Dropdown",
      "KPI’er",
    ],
    accent: "#a9b8ff",
    images: [
      {
        src: "/projects/project-07-monthly-report.png",
        alt: "Automatisk Excel-månedsrapport med månedsvalg, KPI’er, tekstkonklusion og graf",
        label: "Automatisk månedsrapport",
        width: 1128,
        height: 582,
      },
    ],
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
