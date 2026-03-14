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

**Establish a div-balancing check earlier.** The most frustrating bugs in the whole project were unbalanced HTML divs — a missing `</div>` that caused an entire day's content to leak across all tabs. Running a balance check (`div.count('<div') - div.count('</div>')`) after every structural edit would have caught these instantly. It became standard practice by Phase 5, but should have been from the start.

**One canonical HTML structure, not three.** The three guide pages ended up with slightly different HTML patterns — `gp-en.html` uses `data-day` attributes while `full.html` uses `data-t`, for instance. This created friction whenever something needed to be applied across all pages. A shared base structure defined up front would have kept everything consistent.

**Version the CSS variables earlier.** All three pages have their own CSS blocks. When a colour or spacing value needed changing, it required three edits. A shared `style.css` would have helped — though it would have complicated the "editable on GitHub" goal slightly.

**Be explicit about what's private.** Early on, confirmation numbers and personal details started appearing in the app code — which lives in a public GitHub repository. Catching this before commit rather than after would have been cleaner. The rule "nothing private in the app" should be established on day one.

---

## 🚀 Build your own

### What you need

- A [Claude.ai](https://claude.ai) account (free tier works; Pro gives more message volume for long sessions)
- A [GitHub](https://github.com) account (free)
- A trip you're planning

That's it. No code editor, no terminal, no prior experience.

### The starting prompt

Paste something like this into Claude:

> I'm planning a family trip to [destination] from [start date] to [end date]. Our group is [describe — e.g. 2 parents, 2 young children aged 1 and 4, and 4 grandparents who speak Telugu]. Here's our rough itinerary:
>
> [paste your itinerary]
>
> I want a mobile PWA trip guide with:
> - A landing page with a countdown timer
> - A full detailed guide for me and my partner
> - A simpler guide for the grandparents
> - Food lists with dietary notes for the kids
>
> Build it as plain HTML/CSS/JS with no framework — I want to be able to edit files directly on GitHub.

### Getting it onto GitHub Pages

1. Create a new repo at [github.com/new](https://github.com/new)
2. Upload the files Claude gives you (or paste them one by one)
3. Go to **Settings → Pages**, set source to `main`, folder to `/`
4. Your site is live at `https://yourusername.github.io/your-repo-name/`

### Key prompts to have ready

| You want to... | Say to Claude... |
|---|---|
| Add a new day | "Add a Day 6 tab. Here's the schedule: [paste]" |
| Fix broken navigation | "Clicking any tab does nothing on gp-en.html. Here's the HTML: [paste section]" |
| Add dietary tags | "Tag all dishes with 🌿 veg / 🍗 non-veg / 👶 kid-safe. Flag anything with added sugar for the toddler." |
| Update a venue | "We've changed the dinner on Day 3 from X to Y. Update all references." |
| Add a language | "Add a Hindi grandparent guide. Mirror the structure of gp-en.html." |
| Change the colour scheme | "Change the primary colour from orange #E05C2A to deep blue #1A4A6B throughout." |
| Generate an icon | "Create a custom app icon using a [motif] in [colour]. Generate at 192×192 and 512×512 PNG." |
| Check for bugs | "Run a div balance check on all sections in full.html and report any imbalances." |

### Tips

- **Share the actual code** when debugging. "The nav is broken" + pasted HTML gets a fix in one message. "The nav is broken" alone takes three.
- **Deploy between changes.** Test each change before requesting the next one.
- **Name your versions.** Ask Claude to track versions (v1, v2...) so you can roll back if something goes wrong.
- **Use one source of truth for repeated data.** If you have food lists, ask Claude to put them in a shared JS file from the start.
- **Tell Claude your constraints upfront.** "No frameworks, no build steps, editable on GitHub" shapes every decision.

---

*This app was built with [Claude](https://claude.ai). The conversations that produced it are the documentation.*
