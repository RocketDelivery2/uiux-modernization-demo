# Render Deployment Guide

This project deploys as **two separate Render Static Sites**.

A `render.yaml` file at the repo root defines both services. Render can auto-detect it when you connect the repository, or you can create the services manually using the exact settings below.

---

## Deployment Order

Deploy in this order to ensure the landing page CTA links are live and correct from the first publish:

1. **Deploy Service 2 — Modern App** → copy the live URL (e.g. `https://uiux-modern-app.onrender.com`)
2. **Update `index.html`** → replace every `YOUR_MODERN_APP_URL` placeholder with the real subdomain
3. **Commit and push** the change to `main`
4. **Create/deploy Service 1 — Root + Legacy** → auto-deploy triggers on push, or create manually

---

## Service 1 — Landing Page & Legacy App

> **Deploy second** (after updating `index.html` with the modern-app URL).

| Setting | Value |
|---|---|
| **Service Type** | Static Site |
| **Service Name** | `uiux-modernization-demo` |
| **Repository** | `RocketDelivery2/uiux-modernization-demo` |
| **Branch** | `main` |
| **Root Directory** | _(leave blank — use repo root)_ |
| **Build Command** | _(leave blank — no build needed)_ |
| **Publish Directory** | `.` |
| **Auto-Deploy** | Yes |
| **Environment Variables** | None |
| **Redirect/Rewrite Rules** | None |

### How it works

Render serves the repo root as plain static files — no build step needed.

The landing page (`index.html`) and the legacy app (`legacy-app/`) share the same service, so relative links between them work natively:

| Live URL path | File served |
|---|---|
| `/` | `index.html` (case study landing page) |
| `/landing.css` | `landing.css` |
| `/legacy-app/` | `legacy-app/index.html` (legacy dashboard) |
| `/legacy-app/customers.html` | `legacy-app/customers.html` |
| `/legacy-app/orders.html` | `legacy-app/orders.html` |
| `/legacy-app/reports.html` | `legacy-app/reports.html` |
| `/legacy-app/settings.html` | `legacy-app/settings.html` |

### No SPA rewrite needed

This is a traditional multi-page site. Real files exist at every path — no redirect rules are required.

---

## Service 2 — Modern React App

> **Deploy first** so you have the live URL to paste into `index.html`.

| Setting | Value |
|---|---|
| **Service Type** | Static Site |
| **Service Name** | `uiux-modern-app` |
| **Repository** | `RocketDelivery2/uiux-modernization-demo` |
| **Branch** | `main` |
| **Root Directory** | `modern-app` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Auto-Deploy** | Yes |
| **Environment Variables** | `NODE_VERSION=20` |

### Environment variable

In the Render dashboard, under **Advanced → Environment Variables**:

| Key | Value |
|---|---|
| `NODE_VERSION` | `20` |

### What the build does

Render runs `npm install && npm run build` inside `modern-app/`, which:
1. Installs all dependencies from the lock file
2. Runs TypeScript type checking via `tsc`
3. Builds with Vite 8 → outputs to `modern-app/dist/`

Render then serves the `dist/` directory as the site root.

> **Important:** The `Publish Directory` field is `dist` — relative to the Root Directory `modern-app`. Do **not** enter `modern-app/dist`.

### SPA routing (required)

This is a React single-page application with client-side routing. All paths must rewrite to `/index.html` so React Router can handle navigation.

The `render.yaml` file includes this rule automatically. If configuring manually in the dashboard:

**Settings → Redirects/Rewrites → Add Rule**

| Source | Destination | Action |
|---|---|---|
| `/*` | `/index.html` | Rewrite |

---

## Post-Deploy: Update Landing Page Links

After Service 2 is live, replace the placeholder URLs in `index.html`.

### What to find

Search `index.html` for:
```
YOUR_MODERN_APP_URL
```

It appears in 3 places (nav CTA, hero button, bottom CTA button).

### PowerShell (Windows)

```powershell
# Run from repo root — replace uiux-modern-app with your actual Render subdomain if different
(Get-Content index.html) -replace 'YOUR_MODERN_APP_URL', 'uiux-modern-app' | Set-Content index.html
```

### bash (Linux/macOS/CI)

```bash
sed -i 's|YOUR_MODERN_APP_URL|uiux-modern-app|g' index.html
```

### Then commit and push

```bash
git add index.html
git commit -m "Update modern-app URL to live Render deployment"
git push origin main
```

Service 1 auto-deploys on push and will immediately serve the updated landing page.

---

## Live URLs (fill in after deploying)

| Service | URL |
|---|---|
| Landing page + Legacy app | `https://uiux-modernization-demo.onrender.com` _(confirm after deploy)_ |
| Modern app | `https://uiux-modern-app.onrender.com` _(confirm after deploy)_ |

---

## Step-by-Step Dashboard Instructions

### Step 1 — Create Service 2 (Modern App)

1. Go to [render.com](https://render.com) → **New → Static Site**
2. Connect your GitHub account → select `RocketDelivery2/uiux-modernization-demo`
3. Fill in:
   - **Name**: `uiux-modern-app`
   - **Branch**: `main`
   - **Root Directory**: `modern-app`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Click **Advanced** → **Add Environment Variable**:
   - `NODE_VERSION` = `20`
5. Click **Create Static Site** and wait for the build (~60–90 s)
6. Copy the live URL from the top of the dashboard page

### Step 2 — Add SPA Routing to Service 2

7. In the service dashboard → **Settings → Redirects/Rewrites → Add Rule**
   - Source: `/*`
   - Destination: `/index.html`
   - Action: **Rewrite**
8. Click **Save**

### Step 3 — Update index.html with the live URL

9. In your local repo (PowerShell):
   ```powershell
   (Get-Content index.html) -replace 'YOUR_MODERN_APP_URL', 'uiux-modern-app' | Set-Content index.html
   ```
10. Commit and push:
    ```powershell
    git add index.html
    git commit -m "Update modern-app URL to live Render deployment"
    git push origin main
    ```

### Step 4 — Create Service 1 (Root + Legacy App)

11. Go to [render.com](https://render.com) → **New → Static Site**
12. Select the same repo: `RocketDelivery2/uiux-modernization-demo`
13. Fill in:
    - **Name**: `uiux-modernization-demo`
    - **Branch**: `main`
    - **Root Directory**: _(leave blank)_
    - **Build Command**: _(leave blank)_
    - **Publish Directory**: `.`
14. No environment variables or redirect rules needed
15. Click **Create Static Site**
16. Once live, open the URL and verify the landing page loads with working links

---

## Render Free Tier Notes

- Static Sites are **always free** on Render (no sleep, no usage caps for static hosting)
- Build time for the modern app is typically 60–90 seconds on first deploy
- Subsequent builds are faster due to npm cache
- Auto-deploy is triggered on every push to `main`
- Both services share the same repo — pushes to `main` trigger both services to redeploy

---

## Validation Checklist

After deployment, confirm:

- [ ] `https://uiux-modernization-demo.onrender.com/` → landing page loads correctly
- [ ] `https://uiux-modernization-demo.onrender.com/legacy-app/` → legacy dashboard loads
- [ ] Legacy app internal navigation works (Customers, Orders, Reports, Settings)
- [ ] Landing page "View Modern App" button opens the correct Render URL
- [ ] `https://uiux-modern-app.onrender.com/` → React app loads and shows the dashboard
- [ ] Navigating to a deep route (e.g. `/customers`) then hard refreshing the page still works (SPA rewrite rule)
- [ ] All 5 pages work in the modern app (Dashboard, Customers, Orders, Reports, Settings)
- [ ] Modern app is responsive on mobile viewport
