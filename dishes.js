// ─────────────────────────────────────────────────────────────
//  dishes.js — single source of truth for all dish lists
//  Edit here; full.html / gp-en.html / gp-te.html read from this.
//
//  Each item: { n, d?, t, star?, sugar?, note?, stall?, sep? }
//    n     = dish name
//    d     = English description (for non-Indian dishes)
//    t     = tag emojis  e.g. "🌿 👶 🍼"
//    star  = true → ⭐ prefix (must-try)
//    sugar = true → "(skip for toddler — added sugar)" note
//    note  = free-form note in parens
//    stall = stall name/number shown in smaller text
//    sep   = true → render a divider line
// ─────────────────────────────────────────────────────────────

const DISHES = {

  // ── Day 2 ──────────────────────────────────────────────────

  tekka_breakfast: [
    { n: "Idli",          t: "🌿 👶 🍼", stall: "South Indian stalls, Level 1 food centre" },
    { n: "Dosa",          t: "🌿 👶",    stall: "South Indian stalls, Level 1 food centre" },
    { n: "Pongal",        t: "🌿 👶 🍼", stall: "South Indian stalls, Level 1 food centre" },
    { n: "Vada",          t: "🌿 👶",    stall: "South Indian stalls, Level 1 food centre" },
    { n: "Filter coffee", t: "🌿",       stall: "Coffee stall near the entrance" },
  ],

  kopitiam_drinks: [
    { star: true, n: "Teh halia",
      d: "ginger milk tea — warming, aromatic",                    t: "🌿 👶" },
    { n: "Kopi-O",
      d: "black coffee with sugar — strong Singapore style",       t: "🌿" },
    { n: "Kopi-C",
      d: "coffee with evaporated milk — less sweet than Kopi",    t: "🌿" },
    { n: "Teh tarik",
      d: "pulled milk tea — frothy and rich",                     t: "🌿 👶" },
    { n: "Teh-O",
      d: "black tea with sugar, no milk",                         t: "🌿" },
    { n: "Milo Dinosaur",
      d: "iced Milo with a pile of undissolved powder on top",    t: "👶", sugar: true },
    { n: "Bandung",
      d: "rose syrup milk — sweet pink drink, served cold",       t: "👶", sugar: true },
    { n: "Barley water",
      d: "mild, slightly sweet cooling drink",                    t: "🌿 👶 🍼" },
    { sep: true },
    { n: "Order tip", d: "kosong = no sugar · siu dai = less sweet · gah dai = extra sweet", t: "ℹ️" },
  ],

  serangoon_snacks: [
    { star: true, n: "Murukku",
      d: "crispy fried rice flour spirals — salty, addictive",
      t: "🌿 👶",    stall: "Any Indian provision shop on Serangoon Rd" },
    { star: true, n: "Sugarcane juice",
      d: "pressed fresh to order — ice cold, grassy-sweet",
      t: "🌿 👶",    stall: "Juice stalls along Serangoon Rd / Little India Arcade", sugar: true },
    { n: "Vadai",
      d: "fried lentil fritters — crispy outside, soft inside",
      t: "🌿 👶",    stall: "Sri Murugan Sweets, 78 Serangoon Rd" },
    { n: "Curry puff",
      d: "flaky pastry stuffed with spiced potato or chicken",
      t: "🌿 👶",    stall: "Old Chang Kee, outlets along Serangoon Rd" },
    { n: "Chakli / ribbon murukku",
      d: "thin crispy savoury spirals, lighter than murukku",
      t: "🌿 👶",    stall: "Indian provision shops, Little India Arcade" },
    { n: "Banana chips",
      d: "thin-sliced fried banana crisps — sweet or salted",
      t: "🌿 👶 🍼", stall: "Indian provision shops, Little India Arcade" },
    { n: "Jalebi",
      d: "deep-fried batter soaked in sugar syrup — orange spirals",
      t: "🌿 👶",    stall: "Sri Murugan Sweets, 78 Serangoon Rd", sugar: true },
    { n: "Coconut water",
      d: "fresh from the husk, chilled",
      t: "🌿 👶 🍼", stall: "Fruit stalls along Serangoon Rd" },
  ],

  zam_zam: [
    { n: "Murtabak",    d: "stuffed pancake — meat or egg, folded and pan-fried", t: "🍗 👶" },
    { n: "Biryani",     d: "fragrant spiced rice with meat",                       t: "🍗 👶" },
    { n: "Prata",       d: "crispy flaky flatbread with curry dip",                t: "🌿 👶 🍼" },
    { n: "Nasi padang", d: "rice with choice of Malay sides",                      t: "🍗 👶" },
  ],

  banana_leaf: [
    { star: true, n: "Banana leaf thali", t: "🌿 👶 🍼" },
    { n: "Rasam",           t: "🌿 🍼" },
    { n: "Papad",           t: "🌿 👶 🍼" },
    { n: "Fish head curry", t: "🍗" },
    { n: "Mutton chops",    t: "🍗" },
  ],

  // ── Day 3 ──────────────────────────────────────────────────

  maxwell_breakfast: [
    { star: true, n: "Kaya toast + soft-boiled eggs",
      d: "toasted bread with coconut-pandan jam + half-set eggs",  t: "🌿 👶",
      stall: "Tong Ah Eating House — stall near the entrance" },
    { n: "Soft-boiled eggs (plain)",
      d: "half-set eggs in bowl — white pepper + soy sauce",       t: "🌿 🍼",
      stall: "Same kopitiam stall as above" },
    { n: "Congee",   d: "smooth rice porridge",                    t: "🌿 👶 🍼",
      stall: "Zhen Zhen Porridge — #01-95 (queue early, very popular)" },
    { n: "Roti prata (plain)", d: "crispy flaky flatbread, served with dhal", t: "🌿 👶 🍼",
      stall: "Prata stall, south side of the centre" },
    { n: "Milo Dinosaur",
      d: "iced chocolate malt drink with undissolved powder on top", t: "👶", sugar: true,
      stall: "Any drinks stall" },
  ],

  hawker_chan: [
    { star: true, n: "Soy sauce chicken rice",
      d: "braised soy-glazed chicken over rice — Michelin starred",  t: "🍗 👶",
      stall: "Hawker Chan — #02-126, 335 Smith St" },
    { n: "Soy sauce chicken noodles",
      d: "braised soy-glazed chicken over noodles",                  t: "🍗",
      stall: "Hawker Chan — #02-126, 335 Smith St" },
    { n: "Char siu", d: "Cantonese BBQ pork — sweet, lacquered",     t: "🍗 👶",
      stall: "Hawker Chan — #02-126, 335 Smith St" },
    { sep: true },
    { star: true, n: "Poached Hainanese chicken rice",
      d: "tender poached chicken over fragrant rice",
      t: "🍗 👶 🍼", note: "soft — easy to pull apart",
      stall: "Tian Tian — #01-10/11, Maxwell Food Centre" },
  ],

  chinatown_complex: [
    { n: "Char kway teow",
      d: "stir-fried flat rice noodles with egg, bean sprouts",        t: "🍗",
      stall: "Look for the wok smoke — busy stalls on Level 2" },
    { star: true, n: "Claypot rice",
      d: "rice slow-cooked in clay pot with chicken, sausage, dark soy", t: "🍗 👶",
      stall: "Lian He Ben Ji — #02-198/199 (arrive by 11:30, queue fills fast)" },
    { n: "Braised duck rice",
      d: "duck slow-braised in soy sauce over rice",                   t: "🍗 👶",
      stall: "Lao Hong Teochew Braised Duck — #02-083" },
    { n: "Popiah (fresh spring roll)",
      d: "soft spring roll with jicama, egg, bean sprouts",            t: "🌿 👶",
      stall: "Popiah stall, Level 2 near centre aisle" },
    { n: "Economic rice (veg options)",
      d: "mix-and-match rice with choice of sides",                    t: "🌿 👶 🍼",
      stall: "Any economic rice stall — pick the one with the longest queue" },
    { sep: true },
    { star: true, n: "Chendol",
      d: "shaved ice with coconut milk, green rice jelly, palm sugar", t: "🌿 👶", sugar: true,
      stall: "No. 1 Chendol — #02-056" },
    { n: "Ice kachang",
      d: "shaved ice with red bean, corn, jelly, rainbow syrup",       t: "🌿 👶", sugar: true,
      stall: "No. 1 Chendol — #02-056" },
    { n: "Ice cream sandwich",
      d: "scoop of ice cream in a bread roll or wafer",                t: "🌿 👶", sugar: true,
      stall: "Ice cream cart outside the complex on Smith St" },
  ],

  rang_mahal: [
    { star: true, n: "Dal makhani",       t: "🌿 👶 🍼" },
    { n: "Paneer butter masala",           t: "🌿 👶 🍼" },
    { n: "Garlic naan",                    t: "🌿 👶" },
    { n: "Biryani",                        t: "🍗 👶" },
    { n: "Lassi",                          t: "🌿 👶", sugar: true },
  ],

  // ── Day 4 ──────────────────────────────────────────────────

  serangoon_bfast: [
    { n: "Idli",          t: "🌿 👶 🍼" },
    { n: "Parotta",       t: "🌿 👶" },
    { n: "Dhal",          t: "🌿 👶 🍼" },
    { n: "Filter coffee", t: "🌿" },
  ],

  malaysian_food_street: [
    { star: true, n: "Laksa",
      d: "spicy coconut curry noodle soup",                        t: "🍗 👶",
      stall: "Laksa stall — look for the orange coconut broth" },
    { n: "Nasi lemak",
      d: "rice cooked in coconut milk with sambal, anchovies, egg", t: "🍗 👶",
      stall: "Nasi Lemak stall, centre row" },
    { n: "Char kway teow",
      d: "stir-fried flat rice noodles with egg, bean sprouts",    t: "🍗 👶",
      stall: "Wok stall — look for the open flame" },
    { n: "Roti canai",
      d: "flaky layered flatbread with curry dip",                 t: "🌿 👶 🍼",
      stall: "Mamak stall near the entrance" },
  ],

  food_republic_vivo: [
    { n: "Economic rice (veg options)",
      d: "mix-and-match rice with choice of sides",                t: "🌿 👶 🍼" },
    { n: "Chicken rice",
      d: "Hainanese-style steamed chicken over fragrant rice",     t: "🍗 👶" },
    { n: "Noodles",
      d: "choice of wonton, fish ball, or dry-tossed egg noodles", t: "🍗 👶" },
    { n: "Laksa",
      d: "spicy coconut curry noodle soup",                        t: "🍗 👶" },
  ],

  // ── Day 5 ──────────────────────────────────────────────────

  satay_bay: [
    { star: true, n: "Chicken satay",
      d: "grilled chicken skewers with peanut sauce",              t: "🍗 👶",
      stall: "Stalls 1–8 along the open-air row facing the bay" },
    { n: "Mutton satay",
      d: "grilled mutton skewers with peanut sauce",               t: "🍗",
      stall: "Same row — order minimum 10 sticks per stall" },
    { n: "Tofu/veg satay",
      d: "grilled tofu skewers with peanut sauce",                 t: "🌿 👶",
      stall: "Ask any stall — most have a tofu option" },
    { n: "Lontong",
      d: "compressed rice cake in coconut vegetable curry",        t: "🌿 👶 🍼",
      stall: "Nasi lemak / lontong stall at the back row" },
    { n: "Peanut sauce",
      d: "rich ground peanut dipping sauce",                       t: "🌿 👶", sugar: true },
  ],

  ya_kun: [
    { star: true, n: "Kaya toast + soft-boiled eggs",
      d: "toasted bread with coconut-pandan jam + half-set eggs",  t: "🌿 👶" },
    { n: "Kopi-O",
      d: "black coffee with sugar, old-school Singapore style",    t: "🌿" },
  ],

};

// ─────────────────────────────────────────────────────────────
//  Renderer
// ─────────────────────────────────────────────────────────────

function buildDishes(key) {
  var items = DISHES[key];
  if (!items) return '';

  var rows = items.map(function(item) {
    if (item.sep) return '<p class="dish-sep">—</p>';
    var html = '<p>';
    if (item.star) html += '⭐ ';
    html += item.n;
    if (item.d) html += ' <em class="dish-desc">' + item.d + '</em>';
    if (item.t) html += ' ' + item.t;
    if (item.sugar) html += ' <em>(skip for toddler — added sugar)</em>';
    if (item.note) html += ' <em>(' + item.note + ')</em>';
    if (item.stall) html += '<br><span class="dish-stall">📍 ' + item.stall + '</span>';
    html += '</p>';
    return html;
  }).join('');

  return '<span class="dish-toggle" onclick="toggleDishes(this)">🍽 Dishes ▾</span>'
       + '<div class="dish-list">' + rows + '</div>';
}

// ─────────────────────────────────────────────────────────────
//  Init
// ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-dishes]').forEach(function(el) {
    el.insertAdjacentHTML('beforeend', buildDishes(el.dataset.dishes));
  });
});
