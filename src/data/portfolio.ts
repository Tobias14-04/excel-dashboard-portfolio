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
      "Et samlet virksomheds-dashboard, der giver et hurtigt overblik over omsætning, omkostninger, resultat og afvigelser. Projektet viser, hvordan ledelsen kan følge udviklingen på tværs af måned, produkt, region og kategori — og få en automatisk rapport med konklusion.",
    bullets: [
      "Samler centrale nøgletal, så omsætning, resultat og afvigelser kan vurderes hurtigt",
      "Gør det lettere at se trends i salg, månedligt resultat og budgetafvigelser",
      "Filtre for produkt, måned, region og kategori gør analysen mere fleksibel",
      "Automatisk rapportark reducerer manuelt arbejde og formulerer en kort tekstkonklusion",
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
      "Et salgsdashboard, der gør det nemmere at vurdere salgsperformance på produkter, sælgere, regioner og kategorier. Fokus er på at skabe overblik over nettoomsætning, dækningsbidrag og dækningsgrad, så man hurtigere kan se, hvor indtjeningen kommer fra.",
    bullets: [
      "Viser hvilke produkter og kategorier der bidrager mest til omsætning og indtjening",
      "Sammenligner sælgere og regioner, så forskelle i performance bliver tydelige",
      "Kombinerer salgstal, rabatter og vareforbrug til mere brugbare nøgletal",
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
      "Et budgetkontrol-dashboard, der hjælper med at følge op på budgettet måned for måned. Dashboardet gør afvigelser synlige, så det bliver lettere at opdage problemer tidligt og vurdere, hvilke poster der kræver handling.",
    bullets: [
      "Giver hurtigt overblik over samlet budget, faktiske tal og afvigelser",
      "Viser afvigelser i kroner og procent, så budgetopfølgningen bliver mere konkret",
      "Statuslogik hjælper med at skelne mellem positive og negative afvigelser",
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
      "En automatisk månedsrapport, der gør rapportering hurtigere og mere ensartet. Ved at vælge en måned opdateres KPI’er, graf og tekstkonklusion automatisk, så resultatet kan forklares uden at skrive rapporten manuelt hver gang.",
    bullets: [
      "Dropdown gør det nemt at skifte måned og genbruge samme rapportstruktur",
      "Automatisk tekstkonklusion forklarer resultat og budgetafvigelse klart",
      "Grafen sammenligner budget og faktisk resultat, så udviklingen kan vurderes hurtigt",
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
