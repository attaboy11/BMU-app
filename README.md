# BMU Fault Finder

A static, offline-friendly web app that helps façade access / BMU engineers diagnose faults on CoxGomyl, Manntech, Tractel and generic BMUs. Everything is pure HTML/CSS/JS with a built-in dataset of real-world fault patterns.

## Features
- Filter faults by **manufacturer**, **subsystem**, and **symptom** with instant updates.
- Free-text search across symptoms, causes, diagnostics, and parts.
- Detailed troubleshooting cards with symptom details, likely causes, step-by-step diagnostics, safety warnings, corrective actions, parts, and references.
- Critical symptoms highlighted with a clear badge and emphasized safety callouts.
- One-click **Copy troubleshooting steps** to clipboard (with manual copy fallback).
- Works by simply opening `index.html` — no build step or dependencies.

## Running locally
1. Clone the repository.
2. Open `index.html` directly in your browser **or** serve the repo root with any simple static server.

Examples:
```bash
# using Python
python -m http.server 8000
# then open http://localhost:8000
```

## Deploying
- **GitHub Pages:** Enable Pages for this repository and serve from the repository root. No build step is required.
- **Netlify:** Drag-and-drop the repo folder or connect the GitHub repo. Use the repository root as the publish directory and leave the build command empty.

## Safety disclaimer
This tool is guidance only. Always follow site-specific SSOW, O&M manuals, manufacturer instructions, local regulations, and your company procedures. Never bypass safety devices or work outside your competence.
