# László Sliz – Portfolio

Static personal site built with Vite, React, TypeScript and Tailwind CSS (v4). Inter is self-hosted via `@fontsource-variable/inter`.

## Requirements
Node 20+ (`nvm use` picks up `.nvmrc`).

## Run
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview
```bash
npm run build      # outputs static files to dist/
npm run preview    # serves dist/ at http://localhost:4173
```
`dist/` can be hosted on any static host (relative asset paths).

## Content
- Text for skills / experience: `src/data.ts`
- Hero photo: put your image at `public/avatar.png` (used by `<PhotoPlaceholder />` in `src/components/Hero.tsx`; without a `src` it falls back to the "LS" circle).
