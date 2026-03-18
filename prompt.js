// Single source of truth for the guided mode prompt.
// Imported by build.html — copyPrompt() and Start in Claude URL both read from here.
// To update the prompt: edit this file only. Everything else auto-syncs.

window.TRIP_PROMPT = `I want to build a mobile trip guide app for my family — a shareable link that works fully offline after the first load, with a day-by-day schedule tailored for different members of the group.

I have no coding experience. Please guide me step by step. If I'm ever stuck, tell me exactly what to do.

For reference: https://github.com/your-username/your-trip-repo — use this as a starting template and adapt it for my trip.

━━━ HOW TO WORK WITH ME ━━━

Work in three phases — but don't ask 50 questions before building anything. The goal is to feel like we're co-designing this together in real time.

Start with just these 5 questions, one at a time:
1. Where are you going, and when? (destination + dates)
2. Who's coming? (ages, generations, any special needs or mobility considerations)
3. What's the one thing you're most worried about for this trip?
4. What do you want everyone to feel at the end of it?
5. Is there anything already booked (flights, hotel) or is everything still open?

After those 5 answers, build a rough Day 1 skeleton immediately — don't wait for more information. Show it to me and ask: "Does this feel right? Too packed? Anyone I haven't accounted for yet?" Then use my feedback to decide what to ask next.

━━━ YOUR INTERNAL CHECKLIST ━━━

Maintain a checklist of what you know and what you're still missing. Before moving between phases, always show me this checklist — what's confirmed, what's assumed, what's unresolved. I can ask "show me your checklist" or "what are you still missing?" at any time. If you try to skip ahead, I'll say "check your list first."

━━━ PHASE 1 — TRIP PLANNING ━━━

Build the itinerary progressively. After each draft, ask the single most important missing question — not ten at once. Work through these topics in the order that matters most for my trip:

Group & people: ages, generations, languages spoken, tech comfort level, physical mobility, sleep schedules for children
Logistics: flights (times, layovers, timezones), hotel (location, check-in/out), visas and entry requirements for every passport in the group, travel insurance
Health & safety: dietary restrictions and allergies per person (not just "vegetarian" — ask who, and before which activities), paediatric medicine kit, grandparent medications, any mobility aids
Time & climate: home timezone vs destination timezone — calculate the jet lag shift explicitly. Flag if any long day falls at peak jet lag. Note the temperature and humidity delta from home and plan acclimatisation accordingly.
Emotional goal: what is this trip actually for? First international trip for the kids? Making memories with ageing grandparents? A reunion? This should shape the whole itinerary, not just the activities.
Activities: prioritise by person, not just by attraction. Who will love this? Who will struggle? What's the backup if someone's too tired?

When building the day schedule, always account for realistic transport time between locations — not just activity duration. Include travel time between slots, factor in loading/unloading with children or elderly, and flag when two activities are geographically far apart. A day that looks reasonable on paper can become exhausting when you add 45 minutes of transit between each slot.

GATE — before finalising the itinerary, run this stress-test and share the results with me:
□ Jet lag: does the hardest day fall on the worst jet lag night? If yes, flag it and suggest adjusting.
□ Pacing: is there at least one meaningful rest break per day? Are Days 1–2 lighter while everyone acclimatises?
□ Meals: is every person fed at every meal? Check dietary needs against each slot.
□ Weather: is the climate delta flagged? Are outdoor activities during cooler parts of the day?
□ Weather contingency: if a key outdoor activity is rained out or too hot, is there a backup plan?
□ Hydration: are water and cooling breaks built into the schedule, especially for children and elderly?
□ Mobility reality check: does each day's physical load genuinely match each person's capacity — not just noted in intake but actually reflected in the schedule?
□ Age-appropriate activities: are all activities suitable for the specific ages present? Flag anything that doesn't work for the youngest or oldest in the group.
□ Cultural requirements: are dress codes, prayer time closures, and site-specific behaviour rules baked into the day slots — not just mentioned in notes?
□ Single points of failure: is there any moment where one cancelled booking, one missed transport, or one tired child derails the whole day? Suggest a backup.
□ Flight delay cascade: if the first flight is delayed, what breaks downstream? Flag the worst single delay that creates a domino effect and whether there is enough buffer.
□ Emergency medical plan: which hospital is nearest the hotel? Does travel insurance cover emergency evacuation? Flag any pre-existing conditions that could flare.
□ Pre-trip prep window: how many weeks until departure? Recommend what to do each week (sleep shift, packing, bookings, SIM cards, shared photos album).
□ Travel insurance: is it confirmed? If not, flag it as urgent.
□ Visa/entry: is every passport's entry confirmed for every country on the route?
□ Budget reality: does the daily spend estimate match the stated budget when hidden costs are included — airport taxes, resort fees, tipping norms, activity entry fees, local transport?
□ Memory moments: are the once-in-a-lifetime gatherings and photo moments explicitly flagged in the schedule so no one misses them?

Show me the stress-test results. Ask: "Anything here you want to adjust before I build the app?"

━━━ PHASE 2 — BUILDING THE APP ━━━

GATE — before starting, show me: "Here's what I know about your group. Here's what I'm still uncertain about. Here's what I'm about to build." Wait for my confirmation.

Build the app using the GitHub repo as a template. Key things to include:
- A Prep tab (first tab, before Day 1) covering pre-trip checklist, sleep shift schedule, packing list, and arrival instructions for anyone joining from a different city
- Tailored views per audience — full detail for the organiser, simplified version for grandparents or less tech-savvy members (in their language if needed)
- Food recommendations with dietary tags per person at every hawker centre and restaurant
- A countdown timer on the home screen
- Offline-first: all pages cached on first load — no internet needed at temples, beaches, or airports

After building each major section, confirm it landed correctly before moving to the next: re-read the section, summarise what was added, and ask "does this look right?"

━━━ PHASE 3 — PUBLISHING ━━━

Give me step-by-step instructions to put the app online free using GitHub Pages. After I follow the steps, ask me to test the link on my phone and confirm it loads. Only mark this done when I confirm it's working.

GATE — final checklist before closing:
□ Link works on mobile (iOS Safari and/or Android Chrome)
□ All pages load offline after first visit
□ Everyone in the group has the link
□ Any pre-trip tasks still outstanding?
`;
