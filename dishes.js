// ─────────────────────────────────────────────────────────────
//  dishes.js — single source of truth for all dish lists
//  Edit here; full.html / gp-en.html / gp-te.html read from this.
//
//  Each item: { n, d?, t, star?, sugar?, note?, sep? }
//    n     = dish name
//    d     = English description (for non-Indian dishes)
//    t     = tag emojis  e.g. "🌿 👶 🍼"
//    star  = true → ⭐ prefix (must-try)
//    sugar = true → "(skip for toddler — added sugar)" note
//    note  = free-form note in parens
//    sep   = true → render a divider line (used inside hawker_chan)
// ─────────────────────────────────────────────────────────────

const DISHES = {

  // ── Day 2 ──────────────────────────────────────────────────

  tekka_breakfast: [
    { n: "Idli",          t: "🌿 👶 🍼" },
    { n: "Dosa",          t: "🌿 👶" },
    { n: "Pongal",        t: "🌿 👶 🍼" },
    { n: "Vada",          t: "🌿 👶" },
    { n: "Filter coffee", t: "🌿" },
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
      d: "toasted bread with coconut-pandan jam + half-set eggs",  t: "🌿 👶" },
    { n: "Soft-boiled eggs (plain)",
      d: "half-set eggs in bowl — white pepper + soy sauce",       t: "🌿 🍼" },
    { n: "Congee",   d: "smooth rice porridge",                    t: "🌿 👶 🍼" },
    { n: "Roti prata (plain)", d: "crispy flaky flatbread, served with dhal", t: "🌿 👶 🍼" },
    { n: "Milo Dinosaur",
      d: "iced chocolate malt drink with undissolved powder on top", t: "👶", sugar: true },
  ],

  hawker_chan: [
    { star: true, n: "Soy sauce chicken rice",
      d: "braised soy-glazed chicken over rice — Michelin starred",  t: "🍗 👶" },
    { n: "Soy sauce chicken noodles",
      d: "braised soy-glazed chicken over noodles",                  t: "🍗" },
    { n: "Char siu", d: "Cantonese BBQ pork — sweet, lacquered",     t: "🍗 👶" },
    { sep: true },
    { star: true, n: "Poached Hainanese chicken rice",
      d: "tender poached chicken over fragrant rice",
      t: "🍗 👶 🍼", note: "soft — easy to pull apart" },
  ],

  chinatown_complex: [
    { n: "Char kway teow",
      d: "stir-fried flat rice noodles with egg, bean sprouts",        t: "🍗" },
    { star: true, n: "Claypot rice — Lian He Ben Ji",                  t: "🍗 👶" },
    { n: "Braised duck rice",
      d: "duck slow-braised in soy sauce over rice",                   t: "🍗 👶" },
    { n: "Popiah (fresh spring roll)",
      d: "soft spring roll with jicama, egg, bean sprouts",            t: "🌿 👶" },
    { n: "Economic rice (veg options)",
      d: "mix-and-match rice with choice of sides",                    t: "🌿 👶 🍼" },
    { n: "Chendol",
      d: "shaved ice with coconut milk, green rice jelly, palm sugar", t: "🌿 👶", sugar: true },
    { n: "Ice kachang",
      d: "shaved ice with red bean, corn, jelly, rainbow syrup",       t: "🌿 👶", sugar: true },
    { n: "Ice cream sandwich",
      d: "scoop of ice cream in a bread roll or wafer",                t: "🌿 👶", sugar: true },
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
      d: "spicy coconut curry noodle soup",                       t: "🍗 👶" },
    { n: "Nasi lemak",
      d: "rice cooked in coconut milk with sambal, anchovies, egg", t: "🍗 👶" },
    { n: "Char kway teow",
      d: "stir-fried flat rice noodles with egg, bean sprouts",   t: "🍗 👶" },
    { n: "Roti canai",
      d: "flaky layered flatbread with curry dip",                t: "🌿 👶 🍼" },
  ],

  food_republic_vivo: [
    { n: "Economic rice (veg options)",
      d: "mix-and-match rice with choice of sides",               t: "🌿 👶 🍼" },
    { n: "Chicken rice",
      d: "Hainanese-style steamed chicken over fragrant rice",    t: "🍗 👶" },
    { n: "Noodles",
      d: "choice of wonton, fish ball, or dry-tossed egg noodles", t: "🍗 👶" },
    { n: "Laksa",
      d: "spicy coconut curry noodle soup",                       t: "🍗 👶" },
  ],

  // ── Day 5 ──────────────────────────────────────────────────

  satay_bay: [
    { star: true, n: "Chicken satay",
      d: "grilled chicken skewers with peanut sauce",             t: "🍗 👶" },
    { n: "Mutton satay",
      d: "grilled mutton skewers with peanut sauce",              t: "🍗" },
    { n: "Tofu/veg satay",
      d: "grilled tofu skewers with peanut sauce",                t: "🌿 👶" },
    { n: "Lontong",
      d: "compressed rice cake in coconut vegetable curry",       t: "🌿 👶 🍼" },
    { n: "Peanut sauce",
      d: "rich ground peanut dipping sauce",                      t: "🌿 👶", sugar: true },
  ],

  ya_kun: [
    { star: true, n: "Kaya toast + soft-boiled eggs",
      d: "toasted bread with coconut-pandan jam + half-set eggs", t: "🌿 👶" },
    { n: "Kopi-O",
      d: "black coffee with sugar, old-school Singapore style",   t: "🌿" },
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
    html += ' ' + item.t;
    if (item.sugar) html += ' <em>(skip for toddler — added sugar)</em>';
    if (item.note) html += ' <em>(' + item.note + ')</em>';
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
