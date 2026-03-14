# 🇸🇬 Singapore Family Trip PWA — April 2026

<img src="docs/icon-192.png" width="80" alt="App icon" align="right" style="margin-left:16px">

**Live site:** [hrajendra.github.io/sg-trip-2026](https://hrajendra.github.io/sg-trip-2026)

A mobile-first Progressive Web App built as a personal trip guide for a multigenerational family trip to Singapore — 8 people across three generations, 5 days, April 6–10 2026.

The app was entirely designed, written, and iterated with [Claude](https://claude.ai) over a series of conversations — no prior web development was needed. It's shared here as a template and starting point for anyone who wants to build something similar for their own trip.

---

## 📱 Screenshots

<table>
  <tr>
    <td align="center"><img src="docs/screenshot_index_framed.png" width="180"><br><sub>Home · countdown timer</sub></td>
    <td align="center"><img src="docs/screenshot_full_framed.png" width="180"><br><sub>Full itinerary · Day 1</sub></td>
    <td align="center"><img src="docs/screenshot_gpen_framed.png" width="180"><br><sub>Grandparent guide (English)</sub></td>
    <td align="center"><img src="docs/screenshot_gpte_framed.png" width="180"><br><sub>Grandparent guide (Telugu)</sub></td>
  </tr>
</table>

---

## ✨ What this app is

Most travel planning lives in a mess of tabs, PDFs, and WhatsApp threads. This app replaces all of that with a single offline-capable link you can share with everyone in your group — each person gets a view tailored to them.

The specific problem it solves: **multigenerational travel** where different members of the group have very different needs. Parents want every detail. Grandparents want to know where to be and when, in language they can read. Young children have dietary restrictions. Everyone needs the same trip, but communicated differently.

**What makes it different from a shared Google Doc:**
- Works fully offline after first load — no signal needed at temples, beaches, or airports
- Installable on iPhone and Android home screens as its own app icon
- Tailored views per audience — grandparents never see the detailed logistics, parents never lose them in a simplified guide
- Food and drinks are curated by dietary needs (vegetarian, toddler-safe, added sugar flags) with specific stall numbers at hawker centres
- Countdown timer on the home screen — the grandparents love watching it tick down

---

## 📋 Features

- **Countdown timer** — live days/hours/mins countdown to arrival, switches to hours/mins/secs under 24 hrs, disappears once the trip begins
- **Four tailored guides** — landing page, full adult itinerary, English grandparent guide, Telugu grandparent guide
- **Tab navigation** — Days 1–5, Places, Food, Info (and Apps tab in the full guide)
- **Dish toggles** — every hawker centre and restaurant has a collapsible dish list with stall numbers, dietary tags (🌿 🍗 👶 🍼 ⭐), and sugar flags
- **Single source of truth** — `dishes.js` powers dish lists across all three guide pages; update once, all pages reflect it
- **Offline-first PWA** — service worker caches all assets on first load; works without internet
- **Installable** — full `manifest.json` with custom hibiscus icon, works on iOS Safari and Android Chrome
- **Cultural dietary rules** — vegetarian-only flags before temple visits baked into the schedule notes
- **Places & Food tabs** — separate reference tabs for all venues (with opening hours) and all food/drink recommendations
- **Telugu guide** — full translation with English subtitles for non-Telugu readers in the group

---

## 📲 Usage

### Adding to your home screen (iPhone)
1. Open the guide link in **Safari** (not Chrome)
2. Tap the **Share** button (box with arrow)
3. Tap **Add to Home Screen**
4. Each guide installs as its own icon

### Adding to your home screen (Android)
1. Open the link in **Chrome**
2. Tap the three-dot menu
3. Tap **Add to Home Screen** or **Install App**

### Updating content while travelling
The site is hosted on GitHub Pages. To make a quick change:
1. Open the repo on github.com on any device
2. Tap the file you want to edit
3. Tap the **pencil icon**
4. Edit and tap **Commit changes**

The live site updates in ~60 seconds. Everyone just pulls to refresh.

---

## 🛠 For developers

### Architecture

The app is intentionally simple — no framework, no build step, no dependencies. Just HTML, CSS, and vanilla JavaScript, hosted on GitHub Pages.

```
index.html          Landing page + countdown timer
full.html           Full adult itinerary
gp-en.html          English grandparent guide
gp-te.html          Telugu grandparent guide
dishes.js           Shared dish/drink data (single source of truth)
manifest.json       PWA config (name, icon, theme colour, start URL)
sw.js               Service worker (network-first, offline fallback)
icon-192.png        Home screen icon — 192×192
icon-512.png        Home screen icon — 512×512
docs/               README assets (screenshots, icon)
```

### Key design decisions

**`dishes.js` as shared data layer** — Every dish list across all three HTML pages is driven by a single JavaScript file. Each stall/restaurant has a key (e.g. `chinatown_complex`), and pages declare `data-dishes="chinatown_complex"` on any slot element. The script injects the rendered toggle + list at `DOMContentLoaded`. To update a dish or add a stall number, you edit one file and all three pages update.

**No framework** — The tab navigation, section toggling, and dish toggles are ~20 lines of vanilla JS each. This makes the files easy to edit directly on GitHub without a local environment, which matters when you're making last-minute updates from your phone at the airport.

**Separate pages per audience** — Rather than one page with a toggle, each audience gets a fully self-contained HTML file. This means each guide can be bookmarked, installed, and shared independently. Grandparents never need to see a "switch view" option.

**CSS custom properties** — Colours, spacing, and type are set via CSS variables at the top of each file, making it straightforward to retheme for a different trip.

### Running locally

No server needed for most editing — just open the HTML files in a browser directly. For service worker testing, use a simple local server:

```bash
cd sg-trip-2026
python3 -m http.server 8000
# Open http://localhost:8000
```

### GitHub Pages deployment

1. Push to the `main` branch
2. Go to repo **Settings → Pages**
3. Set source to `main` branch, root folder `/`
4. The site is live at `https://<username>.github.io/<repo-name>/`

The `manifest.json` uses `"start_url": "./index.html"` and `"scope": "./"` — this is required for PWA installability on GitHub Pages since the app lives in a subdirectory, not the root.

---

## 🤖 Build your own with Claude

This entire app was built through conversation with Claude — no code was written by hand. The full story, stats, retrospective, and a step-by-step guide for building your own version is in **[BUILDING.md](BUILDING.md)**, and also available as a page inside the app at [build.html](https://hrajendra.github.io/sg-trip-2026/build.html).

---

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page with countdown timer |
| `full.html` | Full adult itinerary — all days, info, places, food, apps |
| `gp-en.html` | English grandparent guide |
| `gp-te.html` | Telugu grandparent guide |
| `build.html` | How this was built + guide for building your own |
| `dishes.js` | Shared data layer — all dish/drink/stall lists |
| `manifest.json` | PWA config |
| `sw.js` | Service worker — offline support |
| `icon-192.png` | App icon 192×192 |
| `icon-512.png` | App icon 512×512 |
| `docs/` | README screenshots and assets |
| `BUILDING.md` | Full build story, stats, retrospective, and how-to guide |

---

*Built with ❤️ for the family — and [Claude](https://claude.ai).*
