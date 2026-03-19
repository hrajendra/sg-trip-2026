// weather.js — Singapore live weather via Open-Meteo (free, no API key)
// Used by: index.html (current conditions), full.html + gp-en.html + gp-te.html (daily forecast)

(function() {
  const LAT = 1.3521, LON = 103.8198;
  const API = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
    `&current=temperature_2m,relative_humidity_2m,weather_code,apparent_temperature` +
    `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code` +
    `&timezone=Asia%2FSingapore&forecast_days=16`;

  // Trip day → date mapping
  const TRIP_DATES = {
    d1: '2026-04-06', d2: '2026-04-07', d3: '2026-04-08',
    d4: '2026-04-09', d5: '2026-04-10'
  };

  // Typical April Singapore fallback (when date is outside 16-day forecast window)
  const APRIL_TYPICAL = { max: 32, min: 26, rain: 55 };

  // WMO code → emoji + short label
  function wmoLabel(code) {
    if (code === 0)            return ['☀️', 'Clear'];
    if (code <= 2)             return ['🌤', 'Mostly clear'];
    if (code === 3)            return ['☁️', 'Overcast'];
    if (code <= 48)            return ['🌫', 'Hazy'];
    if (code <= 55)            return ['🌦', 'Light showers'];
    if (code <= 65)            return ['🌧', 'Rain'];
    if (code <= 82)            return ['🌦', 'Showers'];
    if (code <= 99)            return ['⛈', 'Thunderstorm'];
    return ['🌡', 'Unknown'];
  }

  // ── Homepage: current conditions ──────────────────────────────────────────
  function renderCurrent(el, data) {
    const c = data.current;
    const [icon, label] = wmoLabel(c.weather_code);
    const rh = c.relative_humidity_2m;
    el.innerHTML =
      `<span style="font-size:18px;line-height:1;">${icon}</span>` +
      `<span>${Math.round(c.temperature_2m)}°C</span>` +
      `<span style="opacity:0.6;font-size:11px;">feels ${Math.round(c.apparent_temperature)}°C</span>` +
      `<span style="opacity:0.5;font-size:10px;">·</span>` +
      `<span style="opacity:0.7;font-size:11px;">${rh}% humidity</span>` +
      `<span style="opacity:0.5;font-size:10px;">·</span>` +
      `<span style="opacity:0.7;font-size:11px;">${label}</span>`;
  }

  // ── Day pages: per-day forecast bar ───────────────────────────────────────
  function renderDay(el, data, date) {
    const idx = data.daily.time.indexOf(date);
    let icon, label, max, min, rain;

    if (idx >= 0) {
      // Actual forecast available
      [icon, label] = wmoLabel(data.daily.weather_code[idx]);
      max  = Math.round(data.daily.temperature_2m_max[idx]);
      min  = Math.round(data.daily.temperature_2m_min[idx]);
      rain = Math.round(data.daily.precipitation_probability_max[idx]);
    } else {
      // Outside forecast window — show typical April Singapore
      icon = '🌤'; label = 'Typical April';
      max = APRIL_TYPICAL.max; min = APRIL_TYPICAL.min; rain = APRIL_TYPICAL.rain;
    }

    const rainColor = rain >= 70 ? '#c0392b' : rain >= 40 ? '#e67e22' : '#2e7a3a';
    el.innerHTML =
      `<span style="font-size:15px;">${icon}</span>` +
      `<span style="font-size:12px;font-weight:600;">${max}° / ${min}°</span>` +
      `<span style="font-size:11px;color:${rainColor};">☂ ${rain}%</span>` +
      `<span style="font-size:11px;opacity:0.6;">${label}</span>`;
  }

  // ── Shared fetch + dispatch ────────────────────────────────────────────────
  function initWeather() {
    const currentEl = document.getElementById('wx-current');
    const dayEls    = document.querySelectorAll('[data-wx-day]');

    if (!currentEl && !dayEls.length) return;

    fetch(API)
      .then(r => r.json())
      .then(data => {
        if (currentEl) renderCurrent(currentEl, data);
        dayEls.forEach(el => {
          const date = TRIP_DATES[el.dataset.wxDay];
          if (date) renderDay(el, data, date);
        });
      })
      .catch(() => {
        // Silent fail — show typical April conditions as fallback
        if (currentEl) currentEl.innerHTML =
          `<span style="font-size:18px;line-height:1;">🌤</span>` +
          `<span>32°C</span>` +
          `<span style="opacity:0.6;font-size:11px;">feels 36°C</span>` +
          `<span style="opacity:0.5;font-size:10px;">·</span>` +
          `<span style="opacity:0.7;font-size:11px;">85% humidity</span>` +
          `<span style="opacity:0.5;font-size:10px;">·</span>` +
          `<span style="opacity:0.7;font-size:11px;">Typical April</span>`;
        dayEls.forEach(el => {
          el.innerHTML =
            `<span style="font-size:15px;">🌤</span>` +
            `<span style="font-size:12px;font-weight:600;">32° / 26°</span>` +
            `<span style="font-size:11px;color:#e67e22;">☂ 55%</span>` +
            `<span style="font-size:11px;opacity:0.6;">Typical April</span>`;
        });
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWeather);
  } else {
    initWeather();
  }
})();
