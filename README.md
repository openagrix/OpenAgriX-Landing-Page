# OpenAgriX landing page

Bilingual marketing site for [OpenAgriX](https://app.openagrix.com/), a Solana application for recording and exploring agricultural evidence. The site introduces the product, explains the evidence types, and sends people to the live app. It does not collect form data, connect wallets, or write blockchain records.

**OpenAgriX** connects farms and buyers through harvest, soil, carbon, biodiversity, honey, and produce records. The current application runs on **Solana Devnet**, a test network. A blockchain record checks the integrity of stored data; it does not, by itself, prove physical quality or replace specialist certification.

## Stack

| Piece | Version / choice |
| --- | --- |
| Runtime | Node.js 20.9 or newer |
| Framework | Next.js 16 App Router (`next`) |
| UI | React 19, TypeScript 5.9, strict mode |
| Styling | Global CSS in `src/app/globals.css` |
| Icons | `lucide-react` |
| Font | Plus Jakarta Sans via `@fontsource/plus-jakarta-sans` (Latin and Vietnamese subsets, self-hosted) |
| Lint | ESLint 9 with `eslint-config-next` |

There is no database, API route, or backend in this repository. Pages are statically generated.

## Routes and language

English is the default language.

| URL | Language | HTML `lang` |
| --- | --- | --- |
| `/` | Redirects to `/en` (temporary, not permanent) | — |
| `/en` | English | `en` |
| `/vi` | Vietnamese | `vi` |

`x-default` is `/en`. The header language switch keeps the current URL hash, so a visitor stays on the same in-page section when they change language.

Document titles:

- English: `OpenAgriX — From the farm. Built on trust.`
- Vietnamese: `OpenAgriX — Từ nông trại đến niềm tin.`

## Page sections

The landing page is one page per locale. In-page anchors:

| Anchor | Section |
| --- | --- |
| `#platform` | Three platform features: preserve evidence, public lookup, and a connected farm journey |
| `#evidence` | Six evidence types |
| `#how-it-works` | Three steps: create a farm profile, record evidence, share it for review |
| `#faq` | Four questions, first item open |
| `#sponsors` | Sponsors / communities |
| `#top` | Header, used by the back-to-top control |

Other regions, in order:

1. **Hero** — headline, primary link to the Explorer, secondary link to how it works, Devnet note, and an illustrative farm card labeled as sample data.
2. **Trust strip** — Solana, Vietnamese agriculture, public evidence, farms and buyers.
3. **Closing panel** — register a farm, or visit the Explorer.
4. **Sponsors / communities** — Solana, Colosseum, and SuperteamVN, in that order, on a lime band below the closing panel.
5. **Footer** — product links, guides, contact, GitHub, X, and the Devnet notice.
6. **Back to top** — lime circular arrow, fixed at the bottom right, shown after the page has been scrolled.

The hero farm profile (“An Lành Farm” / “Nông trại An Lành”) is an interface illustration. It is not a real farm record or transaction.

Evidence types: harvest, soil health, carbon data, biodiversity, honey quality, and produce quality. Carbon copy states that a data record is not a certified carbon credit.

## Product links

Defined in `src/lib/links.ts`. Primary actions open the existing app; they do not simulate a transaction on this site.

| Action | Destination |
| --- | --- |
| App home | https://app.openagrix.com/ |
| Explorer | https://app.openagrix.com/explore |
| Farm registration | https://app.openagrix.com/farm/register |
| Evidence guide | https://app.openagrix.com/guides/evidence |
| GitHub | https://github.com/openagrix/OpenAgri-Living-Matrix |
| X | https://x.com/OpenAgriX |
| Email | hello@openagrix.com |

Community logos link out to https://solana.com, https://colosseum.org, and https://vn.superteam.fun. The logos identify those organizations. The page does not state a partnership, endorsement, user count, or certification.

## Run locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. The dev server binds to `127.0.0.1`.

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

`npm start` also binds to `127.0.0.1` and serves the production build.

## Project layout

```text
src/app/globals.css          Visual system, layout, responsive rules
src/app/icon.png             App icon generated into metadata
src/app/apple-icon.png       Apple touch icon
src/app/favicon.ico          Favicon
src/app/[locale]/layout.tsx  HTML language, fonts, and metadata
src/app/[locale]/page.tsx    Landing page composition
src/components/brand.tsx     Color wordmark
src/components/header.tsx    Navigation, language switch, mobile menu
src/components/back-to-top.tsx
src/lib/content.ts           English and Vietnamese copy
src/lib/links.ts             App URLs and community logos
public/logo.png              Color wordmark used in the header and footer
public/logo-dark.png         White wordmark (asset; not used in the current layout)
public/logo-icon.png         Symbol used on the sample record card
public/favicon.svg           Favicon
public/images/farm-landscape.jpg
public/partner/              Logos used on the page: Solana, Colosseum, SuperteamVN
public/partner/cooperatives/ Cooperative photos; present in the repo, not shown on the page
public/images/openagri-symbol-final.png
                           Earlier symbol file; not used by the current layout
next.config.ts               Redirect `/` to `/en`, image qualities, no `X-Powered-By`
```

`brand/`, `prize/`, `skills/`, and `conversations/` hold supporting brand, campaign, and design material. They are not imported by the Next.js app.

## Editing

- **Copy:** `src/lib/content.ts`. Both `en` and `vi` must stay in the same `Content` shape. Proper nouns such as Solana, Devnet, OpenAgriX, CITES, HMF, and Brix stay as written.
- **Destinations:** `src/lib/links.ts`.
- **Layout:** `src/app/[locale]/page.tsx`.
- **Look:** `src/app/globals.css`. Tokens live on `:root`.
- **Metadata:** `src/app/[locale]/layout.tsx`.

Vietnamese copy is allowed to run longer than English. Cards are not locked to English line counts.

## Visual identity

| Token | Value | Use |
| --- | --- | --- |
| Forest | `#004C3F` | Wordmark, headings, header button, closing panel |
| Forest deep | `#0B2B1E` | Primary button text |
| Green | `#159447` | Accent in the wordmark and links |
| Lime | `#C4EC96` | Hero accent, primary buttons, sponsors band, back to top |
| Paper | `#F8FAF6` | Evidence section background |
| Ink | `#18372A` | Body text |

The header and footer use the supplied color wordmark (`public/logo.png`) at its original proportions. The sample record uses `public/logo-icon.png`. Do not stretch, recolor, or redraw the logo.

The hero photograph is an illustrative agricultural landscape stored at `public/images/farm-landscape.jpg`. Source: [Unsplash](https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85). It does not depict a named Vietnamese farm.

Plus Jakarta Sans is bundled with the app. The site does not request Google Fonts at runtime.

## Behavior

- Desktop navigation uses in-page anchors. Below 1100px, those links move into a mobile menu. Escape closes the menu and returns focus to the toggle.
- FAQ items are native `<details>` elements sharing the name `openagrix-faq`.
- The back-to-top control appears after 420px of scroll, is hidden from keyboard focus until then, and scrolls to `#top`. Reduced-motion users get an instant scroll.
- Focus rings stay visible. Hover motion is removed when `prefers-reduced-motion: reduce` is set.
- Images use `next/image`. Allowed qualities are 75 and 90.

## Deploy

Build with `npm run build` and serve with `npm start`, or deploy the Next.js app to a Node host such as Vercel. This repository does not publish the site by itself.

After a production domain exists, set `metadataBase` and canonical URLs in `src/app/[locale]/layout.tsx`. They are not set today.

## Scope

This site explains the product and links to it. It does not:

- register farms or record evidence
- connect a wallet or show a successful transaction
- store contact details
- treat Devnet data as production records
- present carbon entries as certified credits
- add unverified adoption numbers, testimonials, or partner claims
