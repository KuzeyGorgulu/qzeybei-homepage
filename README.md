# Qzeybei homepage

A brand-led personal hub at `qzeybei.com`: projects, current work, experiments, and a restrained Q-derived motion system.

## Local development

```bash
npm install
npm run dev
```

Personal copy, links, project status, and section metadata live in `src/content/site.ts`.

All in-page brand presentations use the official `public/brand/qzeybei-logo.png` asset through the reusable crop wrappers in `src/components/BrandMark.tsx`. The browser icons in `public/brand` are faithful Q-only crops derived from that same source.

## Production

`qzeybei.com` is the central hub for the public Qzeybei project ecosystem:

- [qzeybei.com](https://qzeybei.com) — personal homepage
- [motionlab.qzeybei.com](https://motionlab.qzeybei.com) — MotionLab
- [city.qzeybei.com](https://city.qzeybei.com) — Procedural City Generator
- [gym-party.qzeybei.com](https://gym-party.qzeybei.com) — Gym Party

Public project destinations and contact details are maintained in `src/content/site.ts`.
