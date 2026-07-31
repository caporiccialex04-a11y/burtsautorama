# Bert Suyker Autorama — Website Rebuild

Modern rebuild of [bertsautorama.ca](https://bertsautorama.ca/) using **Next.js** and **Tailwind CSS**. Same business, same content, refreshed design.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Pages

| Route | Source |
| --- | --- |
| `/` | Home |
| `/about` | About Us / Our Team |
| `/inventory` | Our Inventory |
| `/inventory/[slug]` | Individual vehicle listings |
| `/services` | Service Maintenance and Repairs |
| `/contact` | Contact Us |

## Content & data

- Business copy, contact details, services, and team bios live under `src/data/`.
- Vehicle listings are **sample/demo data** in `src/data/inventory.ts` (scraped from the live site at rebuild time). Swap this file or connect a CMS/API when inventory changes.
- Images (dealership, team, vehicles) are in `public/images/` as WebP (+ original JPEG fallbacks where kept).

## Logo note

The live WordPress header uses a **text logo** (“Bert Suyker” / “Autorama”), not an image file. This rebuild provides:

- A matching wordmark component (`src/components/Logo.tsx`)
- SVG assets in `public/logo.svg`, `public/logo-dark.svg`, and `public/icon.svg` (favicon)

## Placeholders / follow-ups

- **Contact form backend** — form fields match the source site (Name, Email, Message) and currently open a `mailto:` to `info@bertsautorama.ca`. Wire to a form service or API when ready (`[WIRE FORM BACKEND]` note in `ContactForm.tsx`).
- **Inventory** — treat listings as demo data; status/prices will drift from the live lot.
- **Founding year** — Services page states “Since 1962”; About page says Bert started Berts Autorama in **1981**. Both appear as published; no reconciliation invented.
