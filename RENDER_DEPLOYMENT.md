# Render Deployment Guide

This project deploys as **two separate Render Static Sites** — one for the landing page + legacy app, and one for the modern React app.

---

## Service 1 — Landing Page & Legacy App

| Setting | Value |
|---|---|
| **Service Type** | Static Site |
| **Repository** | `RocketDelivery2/uiux-modernization-demo` |
| **Branch** | `main` |
| **Root Directory** | _(leave blank — use repo root)_ |
| **Build Command** | _(leave blank — no build needed)_ |
| **Publish Directory** | `.` |
| **Auto-Deploy** | Yes |

### How it works

The root `index.html` (case study landing page) and `legacy-app/` are plain static files with no build step. Render serves the root directory directly.

### URLs produced

- `https://<your-service>.onrender.com/` → Landing page
- `https://<your-service>.onrender.com/legacy-app/index.html` → Legacy dashboard
- `https://<your-service>.onrender.com/legacy-app/customers.html` → Legacy customers
- etc.

### Recommended service name

`uiux-modernization-demo` (produces `uiux-modernization-demo.onrender.com`)

---

## Service 2 — Modern React App

| Setting | Value |
|---|---|
| **Service Type** | Static Site |
| **Repository** | `RocketDelivery2/uiux-modernization-demo` |
| **Branch** | `main` |
| **Root Directory** | `modern-app` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Auto-Deploy** | Yes |
| **Node Version** | `20` (set via environment variable) |

### Environment Variables

| Key | Value |
|---|---|
| `NODE_VERSION` | `20` |

### How it works

Render runs `npm install && npm run build` inside `modern-app/`, which:
1. Installs all dependencies
2. Runs TypeScript type checking
3. Builds via Vite → outputs to `modern-app/dist/`

Render then serves `dist/` as the static site root.

> **Note:** The `Publish Directory` should be `dist` (relative to the Root Directory `modern-app`), not `modern-app/dist`.

### SPA routing

Because this is a React SPA using client-side routing, you need Render to redirect all routes to `index.html`. Add a Render redirect rule:

| Source | Destination | Action |
|---|---|---|
| `/*` | `/index.html` | Rewrite |

In Render's dashboard: **Settings → Redirects/Rewrites → Add Rule**

### Recommended service name

`uiux-modern-app` (produces `uiux-modern-app.onrender.com`)

---

## After Deploying

1. Update the links in the root `index.html` landing page (the CTA buttons) with your actual Render URLs
2. Update the `README.md` badge links with your actual Render URLs
3. Update `--homepage` in this repo's GitHub settings with the landing page URL

### Update CTA links command

```bash
# Replace placeholder URLs in index.html with your actual Render domains
# Find these lines in index.html and update:
#   href="legacy-app/index.html"  → can stay relative (on same service)
#   href="modern-app/index.html"  → change to your modern app Render URL
```

---

## Render Free Tier Notes

- Static Sites are **always free** on Render (no sleep on free tier for static sites)
- Build time counts against your free monthly build minutes
- Builds typically take 30–60 seconds for this project
- Auto-deploy is triggered whenever `main` branch is pushed to GitHub

---

## Validation Checklist

Before considering the deployment complete:

- [ ] Landing page loads at root URL
- [ ] Legacy app loads at `/legacy-app/index.html`
- [ ] Legacy app navigation works between pages (no broken links)
- [ ] Modern app loads and shows the dashboard
- [ ] Modern app navigation (React Router) works — click through all 5 pages
- [ ] Modern app works on mobile viewport
- [ ] Landing page "View Legacy App" and "View Modern App" buttons point to correct URLs
