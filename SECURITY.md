# Security Policy

## Supported Versions

This is a portfolio/demo project and is not a production application. There are no versioned releases with security support windows.

| Version | Supported |
|---------|-----------|
| `main` branch | ✅ Current |

## Reporting a Vulnerability

If you discover a genuine security vulnerability in this project's code or dependencies, please report it responsibly:

1. **Do not open a public GitHub issue** for security vulnerabilities.
2. Email the maintainer directly or use [GitHub's private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability) if enabled.
3. Provide a clear description of the vulnerability, steps to reproduce, and potential impact.
4. Allow a reasonable time for a fix before public disclosure.

## Important Notes About This Project

The `legacy-app/` directory intentionally demonstrates outdated HTML/CSS/JS patterns (table layouts, inline styles, `alert()` usage, deprecated `<font>` tags). These are **not unintentional bugs** — they are deliberate examples of legacy code that the modernization case study replaces. They do not represent exploitable vulnerabilities in the context of this static demo.

## Dependency Security

- Dependabot is configured to check for vulnerable dependencies weekly.
- GitHub CodeQL scans are enabled for JavaScript/TypeScript code.
- Run `npm audit` inside `modern-app/` to check for known vulnerabilities in npm dependencies at any time.
