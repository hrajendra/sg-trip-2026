# 🤖 Building a Trip Guide PWA with Claude

This is the story of how this app was built — and a guide for building your own.

**The short version:** two parents planning a multigenerational trip to Singapore asked Claude to help build a mobile app for the family. No web development experience was required. The whole thing — itinerary planning, app architecture, code, debugging, icons, and content — happened through conversation.

---

## 📊 By the numbers

| Stat | Count |
|------|-------|
| Conversations | ~3 sessions over 2 days |
| User messages | ~120 across all sessions |
| Code executions (bash, file edits) | 300+ |
| PWA versions shipped | 7 (v1 → v7) |
| Word doc versions | 9 (v1 → v9) |
| HTML files maintained in parallel | 4 |
| Nav bugs debugged | 3 |
| Div balance checks run | 21+ |
| Hotel name updated everywhere | 14 replacements in one pass |
| Languages in the app | 2 (English + Telugu) |
| Dishes with stall numbers added | 30+ |

The most striking number: **the user never wrote a single line of code**. Every file was written, edited, and debugged through conversation.

---

## 🗺️ How it unfolded

### Phase 1 — Trip planning (not even the app yet)

It started with flights. The conversation opened with "help me plan a family trip to Singapore" and covered flight options, visa requirements for Indian passport holders, hotel shortlisting, and a day-by-day itinerary. The app didn't exist yet — this was just travel planning.

The key insight that shaped the whole project: the group had wildly different needs. Two parents wanted every detail. Four grandparents (who speak Telugu) just needed to know where to be and when. Two young children had dietary restrictions. A single shared document wasn't going to work.

### Phase 2 — First app (one page, basic)

"Can you turn this itinerary into a mobile web app?"

Claude generated a single HTML file with a tabbed day-by-day view. It was functional but basic — no separate views, no dietary tags, no food details.

### Phase 3 — Multi-page architecture

"The grandparents need their own simpler guide. One in English, one in Telugu."

This was the moment the architecture expanded from one page to four. Claude proposed the structure: `index.html` as a landing page, `full.html` for the adults, `gp-en.html` and `gp-te.html` for the grandparents. The grandparent pages became progressively simpler — fewer slots, larger text, no logistics the grandparents didn't need to see.

### Phase 4 — PWA and installability

"Can this be installed as an app on their phones?"

This introduced `manifest.json` and `sw.js`. The first attempt had a subtle bug: `"start_url": "/"` pointed to the GitHub Pages root, not the app's subdirectory — so the home screen install silently failed. The fix was `"start_url": "./index.html"` with `"scope": "./"`.

The grandparent guides were also installing via Apple's fallback mechanism (the `apple-mobile-web-app-*` meta tags) without a proper manifest link — meaning they installed but didn't use the custom icon. Both were fixed in the same pass.

### Phase 5 — Food as a feature

"Can we add dish lists to the hawker centre slots with dietary tags for the toddler and the 4-year-old?"

This is where the app got genuinely useful. The dietary tagging system (🌿 🍗 👶 🍼 ⭐) was designed around the family's actual constraints: the toddler needs no added sugar and soft textures; the 4-year-old follows low sugar with vacation flexibility; the family eats vegetarian before temple visits.

Initially each page had its own dish lists — so updating one meant updating three files. Claude proposed the `dishes.js` architecture: a single JavaScript file with all dish data keyed by venue, and HTML pages that just declare `data-dishes="maxwell_breakfast"`. Update one file, all three pages reflect it.

### Phase 6 — Iteration and polish

The last phase was a long series of smaller changes that made the app genuinely good:

- Nav was broken on `gp-en.html` after a section reorder — tracked down to orphaned closing divs that cut sections short
- The countdown timer: days/hours/mins, switches to hours/mins/secs under 24 hours, disappears when the trip begins
- Shortened the hero banner which was taking up too much screen real estate
- Split "Places & Food" into two separate tabs
- Added stall numbers and addresses to every hawker centre
- Added the Serangoon Road snack list and kopitiam drinks list as new dish keys
- Custom hibiscus icon generated in PIL (no external tools — the sandbox has no network)
- Hotel updated from the originally researched option to the one actually booked, across 14 references in one pass

---

## 🪞 Retrospective — what we'd do differently

### What worked really well

**Plain English is enough.** "The nav is broken on the grandparent guide" produced a working fix faster than any Stack Overflow search. Describing the problem in human terms — "clicking Day 2 does nothing" — was more useful than trying to describe the bug technically.

**Small changes, deploy often.** The best sessions were ones where changes were tested in the browser between each request. When three things were changed at once and something broke, it was harder to isolate. The discipline of "change one thing, check it, move on" kept the app stable throughout.

**`dishes.js` was the right call.** Having a single source of truth for food data meant that when stall numbers were added, or a dish was moved from one venue to another, it happened in one file and appeared everywhere. The data-attribute pattern (`data-dishes="key"`) is clean, readable, and easy to extend.

**Keeping the HTML files editable on GitHub.** Deliberately avoiding frameworks and build steps meant that last-minute itinerary changes could be made from a phone at the airport. This constraint made the project more useful.

### What we'd do differently

**Start with `dishes.js` from the beginning.** The dish lists were originally copy-pasted into each HTML file individually. The shared architecture only came after all three pages existed and were diverging. Starting with a shared data layer from day one would have saved several rounds of syncing.

**Check the structure after every major edit.** The most frustrating bugs in the whole project were small structural mistakes in the HTML — a single missing closing tag that caused an entire day's content to bleed across all tabs. Asking Claude to verify the structure after each change would have caught these instantly. It became standard practice later in the project, but should have been from the start.

**One canonical HTML structure, not three.** The three guide pages ended up with slightly different HTML patterns — `gp-en.html` uses `data-day` attributes while `full.html` uses `data-t`, for instance. This created friction whenever something needed to be applied across all pages. A shared base structure defined up front would have kept everything consistent.

**Version the CSS variables earlier.** All three pages have their own CSS blocks. When a colour or spacing value needed changing, it required three edits. A shared `style.css` would have helped — though it would have complicated the "editable on GitHub" goal slightly.

**Be explicit about what's private.** Early on, confirmation numbers and personal details started appearing in the app code — which lives in a public GitHub repository. Catching this before commit rather than after would have been cleaner. The rule "nothing private in the app" should be established on day one.

---

## 🚀 Build your own

### Option A — Start from scratch

1. **Create two free accounts.** One at [claude.ai](https://claude.ai) and one at [github.com](https://github.com). No credit card needed for either.

2. **Tell Claude about your trip.** Paste your itinerary and describe your group in plain English — who's coming, what languages the grandparents speak, any food restrictions, anything that makes your group unique.

3. **Ask Claude to build the app.** Say something like: *"Turn this into a mobile app guide that works on phones, with a simpler version for the grandparents. I want to be able to share a link with everyone."* Claude handles all the code.

4. **Put it online.** Claude will give you files to download. Go to [github.com/new](https://github.com/new), create a free repository (think of it as a folder on the internet), upload the files Claude gave you, then go to Settings → Pages and turn it on. Your app is live at a free shareable link within a minute.

5. **Keep improving it.** Open the link on your phone, notice what you'd like to change, describe it to Claude in plain English, get updated files, upload. That's the whole loop — no technical knowledge needed at any point.

### Option B — Start from this app

1. **Get the source files.** Go to the [GitHub repo](https://github.com/hrajendra/sg-trip-2026), click the green Code button, and choose Download ZIP.

2. **Put your copy online.** Go to [github.com/new](https://github.com/new), create a free folder, upload the files from the ZIP, then turn on GitHub Pages in Settings. Your own copy is live at a free link within a minute.

3. **Share the files with Claude.** Open Claude, upload the HTML files, and say: *"I've downloaded this Singapore trip app. I want to adapt it for my trip to [destination] from [dates] with [describe your group]. Here's my itinerary: [paste]."*

4. **Let Claude rewrite the content.** Claude will replace the Singapore-specific details — dates, hotel, restaurants, itinerary — keeping all the features intact: countdown timer, dish toggles, dietary tags, offline use.

5. **Personalise.** Ask Claude to change the colour scheme, swap the icon, add or remove tabs, translate guides into your grandparents' language. Upload the updated files and you're done.

### Things to ask Claude

| When you want to… | Say this |
|---|---|
| Get a guided walkthrough | "I want to build a trip guide app like the Singapore one. Can you ask me everything you need to know — my destination, group, dates, itinerary, dietary needs — and build it step by step as I answer?" |
| Add another day | "Add a Day 6 to the app. Here's what we're doing that day: [describe]" |
| Add a guide in another language | "Add a grandparent guide in Hindi. Keep it simple — just where to be and when." |
| Something isn't working | "When I tap on Day 2 nothing happens. Can you fix it?" |
| Change how the app looks | "Change the colours to feel more like Japan — cherry blossom pinks and deep indigo." |
| Add food recommendations | "Add a food guide for Day 3 and flag anything with nuts or dairy." |
| Update a booking | "We changed our Day 3 dinner from X to Y. Update everywhere it's mentioned." |
| Make a new icon | "Make a home screen icon using a cherry blossom. Pink and white, simple and clean." |
| Make it work offline | "Make sure the app works without internet so the family can use it without roaming data." |

---

*This app was built with [Claude](https://claude.ai). The conversations that produced it are the documentation.*
