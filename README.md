# AfriGold Hub

AfriGold Hub is a multilingual Next.js website for an artisanal gold investment platform. The site presents the company story, operating locations, value chain, investment tiers, compliance messaging, contact flows, and legal pages.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Material UI
- next-i18next / i18next
- Framer Motion
- Three.js, React Three Fiber, and React Globe GL

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` - start the Next.js development server.
- `npm run build` - create a production build.
- `npm run start` - start the production server using `PORT` or port `3000`.
- `npm run typecheck` - run TypeScript checks without emitting files.
- `npm run clean` - remove the `.next` build directory.
- `npm run toc` - generate i18next resource table-of-contents typings.
- `npm run merge` - merge English locale resources into a generated JSON resource file.
- `npm run interface` - generate TypeScript interfaces for translation resources.
- `npm run nuke:install` - remove `node_modules` and `package-lock.json`.

## Project Structure

```text
.
+-- @types/                  # Generated and custom TypeScript resource types
+-- public/
|   +-- img/                 # Logos, flags, and earth textures
|   +-- locales/             # Translation files for en, de, and sw
|   +-- media/               # Site images and video assets
+-- src/
|   +-- components/          # Shared UI, sections, animations, and widgets
|   +-- config/              # Navigation and locale configuration
|   +-- hooks/               # Reusable React hooks
|   +-- layouts/             # Landing page shell, navbar, footer, scroll helpers
|   +-- pages/               # Next.js pages and route-level data loading
|   +-- styles/              # Global styles
|   +-- theme/               # Material UI theme
|   +-- types/               # Next.js layout type helpers
+-- next-i18next.config.js   # Locale and translation configuration
+-- next.config.js           # Next.js configuration
+-- tailwind.config.ts       # Tailwind theme configuration
+-- tsconfig.json            # TypeScript configuration
```

## Pages

The app uses the Next.js Pages Router. Main routes include:

- `/` - homepage
- `/about` - company story, governance, team, and principles
- `/operations` - operational process and compliance details
- `/locations` - operating regions and mining locations
- `/value-chain` - extraction-to-distribution value chain
- `/invest` - investment tiers and investor process
- `/contact` - contact information, form, and FAQs
- `/privacy-policy` - privacy policy
- `/risk-disclaimer` - risk disclaimer

## Internationalization

Translations are handled with `next-i18next`.

Supported locales:

- `en` - English
- `de` - German
- `sw` - Swahili

Locale files live in `public/locales/<locale>/common.json`. Add or update translated copy there, then run the relevant i18next resource script if generated types need to be refreshed.

## Styling and UI

The project combines Tailwind utility classes with Material UI components. Global styling is defined in `src/styles/globals.css`, Tailwind fonts are configured in `tailwind.config.ts`, and the MUI theme lives in `src/theme/theme.ts`.

The default app shell is applied in `src/pages/_app.tsx` through `src/layouts/LandingPage/Layout.tsx`.

## Assets

Static assets are stored under `public/` and can be referenced from the app with root-relative paths, for example:

```tsx
<Image src="/img/logo.svg" alt="AfriGold Hub" width={32} height={32} />
```

Images, videos, logos, flags, and earth textures are already organized under `public/img` and `public/media`.

## Deployment

The project includes a `vercel.json`, so it is ready for Vercel-style deployment. For production:

```bash
npm run build
npm run start
```

Make sure all required locale files and public media assets are committed before deploying.
