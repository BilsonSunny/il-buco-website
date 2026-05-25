# Il Buco Ristorante — Website v2

Built with [Astro](https://astro.build) · Authentic Italian cuisine · Downtown Barrie, Ontario

## 🚀 Quick Start

```bash
npm install
npm run dev
# → http://localhost:4321
```

## 📁 Project Structure

```
il-buco/
├── public/
│   └── il-buco-logo.jpg      ← Restaurant logo (already included)
├── src/
│   ├── data/
│   │   ├── menu.js            ← All menu items (edit to update prices/dishes)
│   │   └── specials.json      ← TODAY'S SPECIALS ← edit this daily
│   ├── layouts/
│   │   └── Layout.astro       ← Nav, footer, global styles & fonts
│   └── pages/
│       ├── index.astro        ← Homepage
│       ├── menu.astro         ← Full dinner, lunch & 3-course menu
│       └── specials.astro     ← Daily specials + staff add panel
├── astro.config.mjs
└── package.json
```

## ✏️ Daily Workflow: Updating Specials

### Option A — Edit the file directly
Open `src/data/specials.json` and replace the contents:

```json
[
  {
    "date": "2025-06-15",
    "title": "Osso Buco Milanese",
    "description": "Slow-braised veal shank with saffron risotto and gremolata.",
    "price": "$38.50",
    "category": "Entrée"
  }
]
```
Then redeploy (push to GitHub → Netlify auto-deploys).

### Option B — Use the Staff Panel (no code needed)
1. Go to `/specials` on the live site
2. Click **"+ Add Special"** at the bottom
3. Fill in the form — special appears instantly
4. Copy the generated JSON and paste into `specials.json` for the next deployment

## 🌐 Deploying

### Netlify (Free & Recommended)
1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click Deploy — done!

Every time you push changes to GitHub, Netlify rebuilds automatically.

### Vercel
```bash
npx vercel
```

## 🎨 Brand Colors

| Variable | Hex | Usage |
|---|---|---|
| `--crimson` | `#8B1A1A` | Primary brand color |
| `--crimson-dk` | `#6B1313` | Nav bar, dark backgrounds |
| `--crimson-xdk` | `#4A0D0D` | Footer |
| `--gold` | `#C8A96E` | Accents |
| `--gold-lt` | `#E2C99A` | Light gold text on crimson |
| `--cream` | `#FDF8F2` | Page background |

Colors are in `src/layouts/Layout.astro` under `:root { }`.

## 📞 Contact Info Changes

To update phone number or hours, edit `src/layouts/Layout.astro` (footer) and `src/pages/index.astro` (reservations section).
