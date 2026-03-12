# 🇸🇬 Singapore Family Trip 2026 — PWA

A mobile-first Progressive Web App (PWA) for the grandparent itinerary.  
Grandparents can add it to their iPhone home screen and use it like a native app — even offline.

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **New repository**
3. Name it: `sg-trip-2026` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload these files
1. In your new repository, click **Add file → Upload files**
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to your repository **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Under **Branch**, select `main` and `/ (root)`
4. Click **Save**
5. Wait ~60 seconds, then your URL appears at the top: `https://yourusername.github.io/sg-trip-2026/`

---

## 📲 How grandparents add it to iPhone home screen

Send them the URL and these instructions:

1. Open the link in **Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (box with arrow pointing up) at the bottom
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **Add** in the top right
5. The app appears on their home screen with the Singapore flag icon

---

## ✏️ Making updates

Whenever you need to update the itinerary:

1. Open your repository on github.com
2. Click on `index.html`
3. Click the **pencil icon** (Edit) in the top right
4. Make your changes
5. Click **Commit changes**

The live site updates within ~60 seconds. Grandparents just need to pull-to-refresh in the app.

---

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app — all content and styling |
| `manifest.json` | PWA metadata (name, icon, colours) |
| `sw.js` | Service worker — enables offline use |
| `icon-192.png` | App icon (home screen, small) |
| `icon-512.png` | App icon (home screen, large) |

---

*Built with ❤️ for the family trip.*
