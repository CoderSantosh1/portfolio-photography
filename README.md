# Elena Rostova — Photography Portfolio (Next.js)

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Styling is Tailwind utility classes only.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero slider, curated collections, about, latest frames, CTA |
| `/portfolio` | Full gallery with category filters + fullscreen lightbox |
| `/portfolio/[portraits\|landscapes\|architecture\|nature]` | One page per collection |
| `/gear` | Cameras, lenses and kit |
| `/about` | Artist story + creative philosophy |
| `/services` | Pricing cards + process |
| `/booking` | Enquiry form → `POST /api/booking` |

## Where to edit

- **All copy, photos, prices, gear:** `lib/data.ts`
- **Colours, fonts, animations:** `app/globals.css` (Tailwind `@theme` tokens, e.g. `bg-paper`, `text-rust`, `font-serif`)
- **Shared class presets (buttons, kicker, sections):** `lib/ui.ts`
- **Your own photos:** drop files in the matching `public/<section>/` folder (e.g. `public/about/`) and reference them as `/about/your-file.jpg` in `data/category.json`
- **Booking emails:** `app/api/booking/route.ts` (currently validates and logs; plug in Resend/Nodemailer there)
