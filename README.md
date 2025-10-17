# Excel Reader · AEP

Web utility that reads the Controlo de Nomeações workbook used by the Associação dos Escoteiros de Portugal (AEP). The app normalises the spreadsheet, groups responsibilities by section, and offers quick copy shortcuts for every relevant name.

📍 Production deployment: https://excel-reader-aep.vercel.app/

## Highlights

- Upload `.xlsx` files entirely in the browser (no backend round-trip).
- Pick a group or núcleo through a themed `react-select` dropdown with keyboard search.
- See appointments grouped by section (Chefia de Grupo, Alcateia, Tribos, Clã, Chefia Regional, Núcleo) with live vote totals.
- Use single or bulk clipboard actions to copy formatted name lists instantly.
- Styled UI that mirrors the purple gradient across buttons, selects, and the file input for consistent branding.

## Excel Input Requirements

- Supported file: the official AEP Controlo de Nomeações workbook exported as `.xlsx`.
- Expected sheets: `All BO`, `Chefia Regional`, `Núcleos`, `Responsabilidades`, and `CF Regional` (matching the helper modules in `src/Components/handle-data`).
- Column headers should remain unchanged; the parser relies on exact labels set by AEP.
- Remove blank spacer columns/rows before upload if the template has been altered manually.
- The tool highlights any row that fails parsing directly in the browser console for quick debugging.

## Tech Stack

- React 19 + Vite 5
- CoreUI Pro layout components
- Sass (global tokens and BEM-style overrides)
- `read-excel-file` and `@ramonak/react-excel` for parsing and previewing data
- Vitest with Testing Library for unit and integration coverage

## Architecture Overview

```

  App.js                # Main shell that loads data and renders the layout
  Components/           # Reusable UI (copy buttons, loaders, select wrappers)
  View/                 # Top-level views (DefaultLayout, Result)
  helpers/              # Parsing helpers and list builders
  hooks/                # Custom hooks (useExcelData)
  scss/style.scss       # Global styling entry point
```

Parsing responsibilities live inside `src/Components/handle-data`, grouped by the section they serve. Clipboard helpers sit in `src/helpers`, while lists displayed in the UI are memoised in `useExcelData` to avoid unnecessary re-computation.

## Local Development

### Prerequisites

- Node.js 22 or newer (see `package.json` `engines`)
- Yarn 3 (`npm install -g yarn` if needed)

### Quick Start

```bash
git clone https://github.com/Drete457/ExcelReaderAep.git
cd ExcelReaderAep
yarn install
yarn dev
```

Visit http://localhost:5173 to load the development build.

### Available Scripts

- `yarn dev` – start the Vite dev server
- `yarn build` – emit the production bundle
- `yarn preview` – serve the production build locally
- `yarn test` / `yarn test:watch` – run the Vitest suite (once or watch mode)
- `yarn lint` / `yarn lint:fix` – run ESLint and optionally auto-fix issues
- `yarn format` / `yarn format:check` – enforce Prettier formatting in write/check mode

## Testing & Quality

Tests live in `src/__tests__` and cover both the parsing helpers and key UI flows. `useExcelData` skips artificial loading delays when `NODE_ENV=test`, so the suite remains fast. Run `yarn test` for a single pass or `yarn test:watch` while iterating. Pair with `yarn lint` before commits to keep quality gates green.

## Deployment Notes

The production build ships through Vercel. A successful `yarn build` produces the optimized output under `dist/`. Any static hosting service that serves SPA routes can deploy the same artifact.

## Contributing

1. Fork the repository and create a feature branch.
2. Run `yarn lint` and `yarn test` to ensure the change stays green.
3. Open a Pull Request describing the motivation and screenshots when relevant.

## License

Distributed under the [MIT License](LICENSE).
