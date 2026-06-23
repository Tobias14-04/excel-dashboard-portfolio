# Tobias Nielsen â€” portfolio

En responsiv one-page portfolio for Tobias Nielsen med fokus pÃ¥ Excel-dashboards, Ã¸konomi og dataanalyse.

## Lokal udvikling

```bash
npm install
npm run dev
```

Ã…bn derefter [http://localhost:3000](http://localhost:3000).

## Kommandoer

```bash
npm run dev     # lokal udviklingsserver
npm run lint    # ESLint-kontrol
npm run build   # produktionsbuild
```

## Indhold

- Projektdata, kompetencer og procestrin: `src/data/portfolio.ts`
- Genbrugelige komponenter: `src/components/`
- Sidens layout og sektioner: `src/app/page.tsx`
- Globale styles og designtokens: `src/app/globals.css`

Siden er bygget med Next.js App Router, React, TypeScript og Tailwind CSS. Den er statisk og krÃ¦ver ingen backend.