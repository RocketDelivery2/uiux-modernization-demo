# Enterprise UI/UX Modernization Prototype

Legacy Component Catalog Modernized from Vanilla HTML/CSS/JS to React + TypeScript + Tailwind CSS

**Live demos → [Landing Page](#) · [Legacy Reference Implementation](#) · [Modern Component Architecture](#)** (Todo deploy) 

**Style Modernization Prototype (See Video):** https://www.loom.com/share/d6ac73fae37d4976bc9cee5ef1f64f34

> Replace `#` links above with your Render deployment URLs after deploying.

---

## What This Is

This project demonstrates a real-world modernization of a legacy enterprise UI system into a scalable, component-driven frontend architecture.

It showcases how outdated HTML/CSS/JavaScript patterns can be transformed into a modern React + TypeScript + Tailwind CSS application using reusable components, accessibility-first design, responsive layouts, and maintainable frontend architecture.

The goal is not visual redesign alone, but engineering modernization: improving scalability, developer velocity, accessibility compliance, and long-term maintainability.

This project provides a side-by-side comparison of the same component catalog built two ways:

| | Legacy Reference Implementation | Modern Component Architecture |
|---|---|---|
| **Stack** | Vanilla HTML/CSS/JS | React 18 + TypeScript + Tailwind CSS |
| **Layout** | Nested `<table>` elements | CSS Grid + Flexbox |
| **Styles** | Inline attributes, deprecated `<font>` tags | Tailwind utility classes |
| **JavaScript** | Global functions, `alert()`, no types | React hooks, typed components |
| **Routing** | Full page reloads | SPA with React Router |
| **Responsive** | No | Yes |
| **Build** | None (plain files) | Vite build |

---

## Business Impact

- Reduced frontend development effort through reusable component architecture
- Standardized design patterns across the platform
- Improved accessibility compliance with WCAG 2.2 AAA and Section 508 principles
- Enabled scalable UI modernization without full platform rewrites
- Reduced long-term maintenance cost and technical debt
- Improved developer onboarding through shared design system patterns

---

## Accessibility

This prototype was designed with accessibility-first principles aligned to:

- WCAG 2.2 AAA
- Section 508 compliance
- Semantic HTML patterns
- Keyboard accessibility
- Scalable typography and spacing systems
- High-contrast design tokens

---

## Repository Structure

```text
uiux-modernization-demo/
├── index.html              # Landing page / case study overview
├── landing.css             # Landing page styles
├── legacy-app/             # Legacy Reference Implementation
│   ├── index.html
│   ├── customers.html
│   ├── orders.html
│   ├── reports.html
│   ├── settings.html
│   ├── style.css
│   └── app.js
└── modern-app/             # Modern Component Architecture
    ├── src/
    │   ├── App.tsx
    │   ├── components/
    │   └── pages/
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.js
    └── tsconfig.json
```

---

## Local Setup

### Prerequisites

- Node.js 18+ for the modern app
- Any modern browser for the legacy app and landing page

### 1. Clone the repo

```bash
git clone https://github.com/RocketDelivery2/uiux-modernization-demo.git
cd uiux-modernization-demo
```

### 2. Run the landing page

Open `index.html` directly in your browser.

### 3. Run the legacy reference implementation

Open `legacy-app/index.html` directly in your browser.

### 4. Run the modern component architecture

```bash
cd modern-app
npm install
npm run dev
```

Development server:

```text
http://localhost:5173
```

To preview the production build:

```bash
npm run build
npm run preview
```

Preview server:

```text
http://localhost:4173
```

---

## Deployment on Render

See [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) for full step-by-step instructions.

A `render.yaml` at the repo root defines both services for Render's infrastructure-as-code support.

**Recommended deployment order:** deploy the Modern App service first, note the live URL, update `index.html`, then deploy the Root + Legacy service.

**Quick summary:**

| Service | Type | Root Dir | Build Command | Publish Dir |
|---|---|---|---|---|
| Landing + Legacy | Static Site | `.` | _(none)_ | `.` |
| Modern App | Static Site | `modern-app` | `npm install && npm run build` | `dist` |

---

## Tech Stack

### Modern App
- [React 18](https://react.dev/) — component model and hooks
- [TypeScript 5](https://www.typescriptlang.org/) — strict typing
- [Vite 8](https://vitejs.dev/) — fast builds and HMR
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- [React Router 6](https://reactrouter.com/) — client-side routing

### Legacy Reference Implementation
- Legacy HTML/CSS/JavaScript patterns
- Table-based layout structures
- Inline styling and deprecated markup patterns
- Global JavaScript functions

---

## Recommended GitHub Topics

```text
react typescript frontend tailwind vite design-system component-library ui-modernization accessibility wcag section-508 enterprise-ui frontend-architecture design-tokens legacy-modernization modernization
```

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
