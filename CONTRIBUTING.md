# Contributing

Thank you for your interest in this project! This is primarily a personal portfolio/demo repository — it exists to demonstrate a UI/UX modernization case study.

## What's Welcome

- **Bug reports** — if something is broken or misleading, open an issue
- **Suggestions** — ideas to improve the demo, documentation, or deployment setup
- **Typo/docs fixes** — always appreciated

## What's Not Appropriate

- Adding unrelated features or dependencies
- Refactoring the legacy app to be "better" — it's intentionally outdated
- Large scope changes that alter the purpose of the project

## How to Contribute

1. **Fork** the repository
2. **Create a branch** from `main`: `git checkout -b fix/your-fix-name`
3. **Make your changes** — keep them focused and minimal
4. **Test** that the modern app still builds (`cd modern-app && npm run build`)
5. **Open a pull request** with a clear description of what you changed and why

## Development Setup

```bash
# Install modern-app dependencies
cd modern-app && npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Code Style

- TypeScript is enforced in `modern-app/` — all new code must be typed
- Prettier is configured at the root — run `npx prettier --write .` before committing
- Keep component files focused and small

## Commit Messages

Use clear, imperative commit messages:
- `Fix: broken nav link on customers page`
- `Docs: update Render deployment instructions`
- `Style: fix landing page mobile layout`

## Questions?

Open a GitHub issue with the `question` label.
