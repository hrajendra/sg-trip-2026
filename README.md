# 🇸🇬 Singapore Family Trip PWA — April 2026

<img src="docs/icon-192.png" width="80" alt="App icon" align="right" style="margin-left:16px">

**Live site:** [hrajendra.github.io/sg-trip-2026](https://hrajendra.github.io/sg-trip-2026)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/hrajendra)

**[Build your own trip guide with Claude ↓](https://github.com/hrajendra/sg-trip-2026?tab=readme-ov-file#-build-your-own-with-claude)**

A mobile-first Progressive Web App built as a personal trip guide for a multigenerational family trip to Singapore — 8 people across three generations, 5 days, April 6–10 2026.

The app was entirely designed, written, and iterated with [Claude](https://claude.ai) over a series of conversations — no prior web development was needed. It's shared here as a template and starting point for anyone who wants to build something similar for their own trip.

---

## 📱 Screenshots

<table>
  <tr>
    <td align="center"><img src="docs/ss_index_framed.png" width="240"><br><sub>Home · countdown + share</sub></td>
    <td align="center"><img src="docs/ss_full_framed.png" width="240"><br><sub>Full itinerary · Day 1 arrival</sub></td>
    <td align="center"><img src="docs/ss_gpen_framed.png" width="240"><br><sub>Grandparent guide (English) · Prep tab</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="docs/ss_gpte_framed.png" width="240"><br><sub>Grandparent guide (Telugu) · Day 2</sub></td>
    <td align="center"><img src="docs/ss_build_story_framed.png" width="240"><br><sub>Built with Claude · stats</sub></td>
    <td align="center"><img src="docs/ss_build_guided_framed.png" width="240"><br><sub>Build your own · guided prompt</sub></td>
  </tr>
</table>

---

## ✨ What this app is

Most travel planning lives in a mess of tabs, PDFs, and WhatsApp threads. This app replaces all of that with a single link you can share with everyone in your group — each person gets a view tailored to them. It works fully offline (no signal needed at temples, beaches, or airports), installs on home screens as its own icon, and has a share button on every page.

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
- **Five pages** — home with countdown, full adult itinerary, English grandparent guide, Telugu grandparent guide, and a "Built with Claude" page with guided mode for others to build their own
- **Tab navigation** — Prep, Days 1–5, Places, Food, Info (and Apps tab in the full guide)
- **Dish toggles** — every hawker centre and restaurant has a collapsible dish list with stall numbers, dietary tags (🌿 🍗 👶 🍼 ⭐), and sugar flags
- **Single source of truth** — `dishes.js` powers dish lists across all three guide pages; update once, all pages reflect it
- **Offline-first PWA** — service worker pre-caches all pages on install; works without any internet after first load, even pages not yet visited
- **Installable** — full `manifest.json` with custom hibiscus icon, works on iOS Safari and Android Chrome
- **Share buttons** — every page has a native share button; opens the share sheet on mobile (WhatsApp, iMessage, etc.) or copies link to clipboard with a toast on desktop
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
sw.js               Service worker (cache-first for app assets, offline after first load)
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

This entire app was built the long way — through open-ended exploration, wrong turns, and figuring out the right architecture from scratch. Every edge case surfaced, every decision tested across 10 days, 6 active sessions, ~240 conversation turns, and ~1,000 tool calls — from "help me plan a trip to Singapore" to a fully offline installable PWA with multilingual guides, dietary-tagged food lists, and a share button on every page. Zero lines of code written by hand.

**That exploration is the point.** It produced the template, the guided mode prompt, and the step-by-step path below — so your version takes a few conversations, not hundreds.

The app is split into two pages: **[How it was built](https://hrajendra.github.io/sg-trip-2026/build.html)** — the full story, stats, phases, and retrospective — and **[Build your own](https://hrajendra.github.io/sg-trip-2026/guide.html)** — the guided prompt, distilled from the entire exploration, ready to start in Claude.

<!-- PROMPT SYNC NOTE: The encoded URL below and the Start in Claude button in build.html both contain the guided mode prompt. When updating the prompt, edit prompt.js (for build.html) AND regenerate the encoded URL here from prompt.js. -->
(https://claude.ai/new?q=I%20want%20to%20build%20a%20mobile%20trip%20guide%20app%20for%20my%20family%20%E2%80%94%20a%20shareable%20link%20that%20works%20fully%20offline%20after%20the%20first%20load%2C%20with%20a%20day-by-day%20schedule%20tailored%20for%20different%20members%20of%20the%20group.%0A%0AI%20have%20no%20coding%20experience.%20Please%20guide%20me%20step%20by%20step.%20If%20I%27m%20ever%20stuck%2C%20tell%20me%20exactly%20what%20to%20do.%0A%0AFor%20reference%3A%20https%3A//github.com/hrajendra/sg-trip-2026%20%E2%80%94%20use%20this%20as%20a%20starting%20template%20and%20adapt%20it%20for%20my%20trip.%0A%0A%E2%94%81%E2%94%81%E2%94%81%20HOW%20TO%20WORK%20WITH%20ME%20%E2%94%81%E2%94%81%E2%94%81%0A%0AWork%20in%20three%20phases%20%E2%80%94%20but%20don%27t%20ask%2050%20questions%20before%20building%20anything.%20The%20goal%20is%20to%20feel%20like%20we%27re%20co-designing%20this%20together%20in%20real%20time.%0A%0AStart%20with%20just%20these%205%20questions%2C%20one%20at%20a%20time%3A%0A1.%20Where%20are%20you%20going%2C%20and%20when%3F%20%28destination%20%2B%20dates%29%0A2.%20Who%27s%20coming%3F%20%28ages%2C%20generations%2C%20any%20special%20needs%20or%20mobility%20considerations%29%0A3.%20What%27s%20the%20one%20thing%20you%27re%20most%20worried%20about%20for%20this%20trip%3F%0A4.%20What%20do%20you%20want%20everyone%20to%20feel%20at%20the%20end%20of%20it%3F%0A5.%20Is%20there%20anything%20already%20booked%20%28flights%2C%20hotel%29%20or%20is%20everything%20still%20open%3F%0A%0AAfter%20those%205%20answers%2C%20build%20a%20rough%20Day%201%20skeleton%20immediately%20%E2%80%94%20don%27t%20wait%20for%20more%20information.%20Show%20it%20to%20me%20and%20ask%3A%20%22Does%20this%20feel%20right%3F%20Too%20packed%3F%20Anyone%20I%20haven%27t%20accounted%20for%20yet%3F%22%20Then%20use%20my%20feedback%20to%20decide%20what%20to%20ask%20next.%0A%0A%E2%94%81%E2%94%81%E2%94%81%20YOUR%20INTERNAL%20CHECKLIST%20%E2%94%81%E2%94%81%E2%94%81%0A%0AMaintain%20a%20checklist%20of%20what%20you%20know%20and%20what%20you%27re%20still%20missing.%20Before%20moving%20between%20phases%2C%20always%20show%20me%20this%20checklist%20%E2%80%94%20what%27s%20confirmed%2C%20what%27s%20assumed%2C%20what%27s%20unresolved.%20I%20can%20ask%20%22show%20me%20your%20checklist%22%20or%20%22what%20are%20you%20still%20missing%3F%22%20at%20any%20time.%20If%20you%20try%20to%20skip%20ahead%2C%20I%27ll%20say%20%22check%20your%20list%20first.%22%0A%0A%E2%94%81%E2%94%81%E2%94%81%20PHASE%201%20%E2%80%94%20TRIP%20PLANNING%20%E2%94%81%E2%94%81%E2%94%81%0A%0ABuild%20the%20itinerary%20progressively.%20After%20each%20draft%2C%20ask%20the%20single%20most%20important%20missing%20question%20%E2%80%94%20not%20ten%20at%20once.%20Work%20through%20these%20topics%20in%20the%20order%20that%20matters%20most%20for%20my%20trip%3A%0A%0AGroup%20%26%20people%3A%20ages%2C%20generations%2C%20languages%20spoken%2C%20tech%20comfort%20level%2C%20physical%20mobility%2C%20sleep%20schedules%20for%20children%0ALogistics%3A%20flights%20%28times%2C%20layovers%2C%20timezones%29%2C%20hotel%20%28location%2C%20check-in/out%29%2C%20visas%20and%20entry%20requirements%20for%20every%20passport%20in%20the%20group%2C%20travel%20insurance%0AHealth%20%26%20safety%3A%20dietary%20restrictions%20and%20allergies%20per%20person%20%28not%20just%20%22vegetarian%22%20%E2%80%94%20ask%20who%2C%20and%20before%20which%20activities%29%2C%20paediatric%20medicine%20kit%2C%20grandparent%20medications%2C%20any%20mobility%20aids%0ATime%20%26%20climate%3A%20home%20timezone%20vs%20destination%20timezone%20%E2%80%94%20calculate%20the%20jet%20lag%20shift%20explicitly.%20Flag%20if%20any%20long%20day%20falls%20at%20peak%20jet%20lag.%20Note%20the%20temperature%20and%20humidity%20delta%20from%20home%20and%20plan%20acclimatisation%20accordingly.%0AEmotional%20goal%3A%20what%20is%20this%20trip%20actually%20for%3F%20First%20international%20trip%20for%20the%20kids%3F%20Making%20memories%20with%20ageing%20grandparents%3F%20A%20reunion%3F%20This%20should%20shape%20the%20whole%20itinerary%2C%20not%20just%20the%20activities.%0AActivities%3A%20prioritise%20by%20person%2C%20not%20just%20by%20attraction.%20Who%20will%20love%20this%3F%20Who%20will%20struggle%3F%20What%27s%20the%20backup%20if%20someone%27s%20too%20tired%3F%0A%0AGATE%20%E2%80%94%20before%20finalising%20the%20itinerary%2C%20run%20this%20scrutiny%20checklist%20and%20share%20the%20results%20with%20me%3A%0A%E2%96%A1%20Jet%20lag%3A%20does%20the%20hardest%20day%20fall%20on%20the%20worst%20jet%20lag%20night%3F%20If%20yes%2C%20flag%20it%20and%20suggest%20adjusting.%0A%E2%96%A1%20Pacing%3A%20is%20there%20at%20least%20one%20meaningful%20rest%20break%20per%20day%3F%20Are%20Days%201%E2%80%932%20lighter%20while%20everyone%20acclimatises%3F%0A%E2%96%A1%20Meals%3A%20is%20every%20person%20fed%20at%20every%20meal%3F%20Check%20dietary%20needs%20against%20each%20slot.%0A%E2%96%A1%20Weather%3A%20is%20the%20climate%20delta%20flagged%3F%20Are%20outdoor%20activities%20during%20coolest%20parts%20of%20the%20day%3F%0A%E2%96%A1%20Hydration%3A%20are%20water/cooling%20breaks%20built%20into%20the%20schedule%2C%20especially%20for%20children%20and%20elderly%3F%0A%E2%96%A1%20Single%20points%20of%20failure%3A%20is%20there%20any%20moment%20where%20one%20cancelled%20booking%2C%20one%20missed%20transport%2C%20or%20one%20tired%20child%20derails%20the%20whole%20day%3F%20Suggest%20a%20backup.%0A%E2%96%A1%20Pre-trip%20prep%20window%3A%20how%20many%20weeks%20until%20departure%3F%20Recommend%20what%20to%20do%20each%20week%20%28sleep%20shift%2C%20packing%2C%20bookings%2C%20SIM%20cards%2C%20shared%20photos%20album%29.%0A%E2%96%A1%20Travel%20insurance%3A%20is%20it%20confirmed%3F%20If%20not%2C%20flag%20it%20as%20urgent.%0A%E2%96%A1%20Visa/entry%3A%20is%20every%20passport%27s%20entry%20confirmed%20for%20every%20country%20on%20the%20route%3F%0A%0AShow%20me%20the%20checklist%20results.%20Ask%3A%20%22Anything%20here%20you%20want%20to%20adjust%20before%20I%20build%20the%20app%3F%22%0A%0A%E2%94%81%E2%94%81%E2%94%81%20PHASE%202%20%E2%80%94%20BUILDING%20THE%20APP%20%E2%94%81%E2%94%81%E2%94%81%0A%0AGATE%20%E2%80%94%20before%20starting%2C%20show%20me%3A%20%22Here%27s%20what%20I%20know%20about%20your%20group.%20Here%27s%20what%20I%27m%20still%20uncertain%20about.%20Here%27s%20what%20I%27m%20about%20to%20build.%22%20Wait%20for%20my%20confirmation.%0A%0ABuild%20the%20app%20using%20the%20GitHub%20repo%20as%20a%20template.%20Key%20things%20to%20include%3A%0A-%20A%20Prep%20tab%20%28first%20tab%2C%20before%20Day%201%29%20covering%20pre-trip%20checklist%2C%20sleep%20shift%20schedule%2C%20packing%20list%2C%20and%20arrival%20instructions%20for%20anyone%20joining%20from%20a%20different%20city%0A-%20Tailored%20views%20per%20audience%20%E2%80%94%20full%20detail%20for%20the%20organiser%2C%20simplified%20version%20for%20grandparents%20or%20less%20tech-savvy%20members%20%28in%20their%20language%20if%20needed%29%0A-%20Food%20recommendations%20with%20dietary%20tags%20per%20person%20at%20every%20hawker%20centre%20and%20restaurant%0A-%20A%20countdown%20timer%20on%20the%20home%20screen%0A-%20Offline-first%3A%20all%20pages%20cached%20on%20first%20load%20%E2%80%94%20no%20internet%20needed%20at%20temples%2C%20beaches%2C%20or%20airports%0A%0AAfter%20building%20each%20major%20section%2C%20confirm%20it%20landed%20correctly%20before%20moving%20to%20the%20next%3A%20re-read%20the%20section%2C%20summarise%20what%20was%20added%2C%20and%20ask%20%22does%20this%20look%20right%3F%22%0A%0A%E2%94%81%E2%94%81%E2%94%81%20PHASE%203%20%E2%80%94%20PUBLISHING%20%E2%94%81%E2%94%81%E2%94%81%0A%0AGive%20me%20step-by-step%20instructions%20to%20put%20the%20app%20online%20free%20using%20GitHub%20Pages.%20After%20I%20follow%20the%20steps%2C%20ask%20me%20to%20test%20the%20link%20on%20my%20phone%20and%20confirm%20it%20loads.%20Only%20mark%20this%20done%20when%20I%20confirm%20it%27s%20working.%0A%0AGATE%20%E2%80%94%20final%20checklist%20before%20closing%3A%0A%E2%96%A1%20Link%20works%20on%20mobile%20%28iOS%20Safari%20and/or%20Android%20Chrome%29%0A%E2%96%A1%20All%20pages%20load%20offline%20after%20first%20visit%0A%E2%96%A1%20Everyone%20in%20the%20group%20has%20the%20link%0A%E2%96%A1%20Any%20pre-trip%20tasks%20still%20outstanding%3F%0A)** — opens Claude with the guided prompt ready to go. Or read the full story and build-your-own guide first at **[build.html](https://hrajendra.github.io/sg-trip-2026/build.html)**.

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

---

*Built with ❤️ for the family — and [Claude](https://claude.ai).*
