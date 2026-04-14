# UI/UX Modernization Demo

A portfolio case study demonstrating a complete modernization of a legacy Vanilla HTML/CSS/JS admin dashboard into a component-driven React application.

**Live demos → [Landing Page](#) · [Legacy App](#) · [Modern App](#)**

> Replace `#` links above with your Render deployment URLs after deploying.

---

## What This Is

This project shows a real-world, side-by-side comparison of the same admin dashboard built two ways:

| | Legacy App | Modern App |
|---|---|---|
| **Stack** | Vanilla HTML/CSS/JS | React 18 + TypeScript + Tailwind CSS |
| **Layout** | Nested `<table>` elements | CSS Grid + Flexbox |
| **Styles** | Inline attributes, deprecated `<font>` tags | Tailwind utility classes |
| **JavaScript** | Global functions, `alert()`, no types | React hooks, typed components |
| **Routing** | Full page reloads | SPA with React Router |
| **Responsive** | No | Yes |
| **Build** | None (plain files) | Vite (1.4s build, 61 kB gzip) |

---

## Repository Structure

```
uiux-modernization-demo/
├── index.html              # Landing page (case study overview)
├── landing.css             # Landing page styles
├── legacy-app/             # Vanilla HTML/CSS/JS implementation
│   ├── index.html          # Dashboard
│   ├── customers.html
│   ├── orders.html
│   ├── reports.html
│   ├── settings.html
│   ├── style.css
│   └── app.js
└── modern-app/             # React + TypeScript + Tailwind
    ├── src/
    │   ├── App.tsx
    │   ├── components/     # Shell, StatCard, StatusBadge, PageHeader
    │   └── pages/          # Dashboard, Customers, Orders, Reports, Settings
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.js
    └── tsconfig.json
```

---

## Local Setup

### Prerequisites

- [Node.js 18+](https://nodejs.org/) (for modern-app only)
- Any modern browser (for legacy-app and landing page)

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/uiux-modernization-demo.git
cd uiux-modernization-demo
```

### 2. Run the landing page

Open `index.html` directly in your browser — no server required.

### 3. Run the legacy app

Open `legacy-app/index.html` directly in your browser — no server required.

### 4. Run the modern app

```bash
cd modern-app
npm install
npm run dev        # development server → http://localhost:5173
```

To preview the production build:

```bash
npm run build      # builds to modern-app/dist/
npm run preview    # → http://localhost:4173
```

---

## Deployment on Render

See [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) for exact deployment settings for all three parts of this project.

**Quick summary:**

| Service | Type | Root Dir | Build Command | Publish Dir |
|---|---|---|---|---|
| Landing + Legacy | Static Site | `.` | _(none)_ | `.` |
| Modern App | Static Site | `modern-app` | `npm install && npm run build` | `modern-app/dist` |

---

## Tech Stack

### Modern App
- [React 18](https://react.dev/) — component model and hooks
- [TypeScript 5](https://www.typescriptlang.org/) — strict typing
- [Vite 5](https://vitejs.dev/) — fast builds and HMR
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- [React Router 6](https://reactrouter.com/) — client-side routing

### Legacy App (intentionally outdated)
- HTML 4-era markup patterns (table layouts, `<font>` tags)
- Non-responsive CSS with inline `bgcolor` and `style` attributes
- Unstructured JavaScript with global functions

---

## Recommended GitHub Topics

`ui-ux` `frontend` `modernization` `legacy-modernization` `vanilla-js` `react` `typescript` `tailwind` `render` `portfolio` `vite` `admin-dashboard`

---

## Security

See [SECURITY.md](./SECURITY.md) for the vulnerability disclosure policy.

This is a portfolio/demo project. The legacy app intentionally preserves outdated code patterns for demonstration purposes — these are **not** security vulnerabilities, they are intentional examples of what gets replaced during modernization.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). This is primarily a personal portfolio project, but feedback and suggestions are welcome via issues.

---

## License

[MIT](./LICENSE)
