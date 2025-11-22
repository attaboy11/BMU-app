# BMU Fault Finder

A lightweight fault-finding web app for façade access / BMU engineers working on CoxGomyl, Manntech, and Tractel systems.  

The app lets engineers quickly filter common BMU symptoms, see likely root causes, and follow clear diagnostic steps on site — using a structured JSON dataset.

---

## 1. Overview

**Goal:**  
Give field engineers a fast, offline-ready, phone-friendly tool to:

- Select **manufacturer / subsystem / symptom**
- See **typical root causes**
- Follow **step-by-step diagnostics**
- Read **safety warnings and recommended corrective actions**
- See **parts commonly involved** for ordering and prep

The core logic is driven by a single JSON array (`FAULT_DATA`) containing fault objects (one per fault pattern).

---

## 2. Tech Stack

Pure front-end, no backend:

- **HTML5** – layout and structure
- **CSS** – simple responsive layout for mobile use
- **Vanilla JavaScript** – state management, filtering and rendering
- **JSON data file** – `faults-data.js` defines `FAULT_DATA`

This makes it easy to host on:

- GitHub Pages
- Netlify
- Any static web server

---

## 3. Data Model

Each fault is a JSON object like:

```js
{
  "manufacturer": "CoxGomyl | Manntech | Tractel | generic-BMU",
  "model_or_range": "Text description of model/range",
  "subsystem": "Power supply | Hoist drive | Traversing | Slewing | Safety circuits | ...",
  "symptom_title": "Short symptom title",
  "symptom_details": ["Detail 1", "Detail 2"],
  "typical_root_causes": ["Cause 1", "Cause 2"],
  "diagnostic_checks_step_by_step": ["1) Step one", "2) Step two", "..."],
  "safety_hazards_and_warnings": ["Warning 1", "Warning 2"],
  "recommended_corrective_actions": ["Action 1", "Action 2"],
  "parts_commonly_involved": ["Part 1", "Part 2"],
  "manufacturer_references": ["Manual / standard references"],
  "source_urls": ["https://..."],
  "region_or_market_if_relevant": "e.g. global / EN1808 / OSHA",
  "confidence": "low | medium | high",
  "notes_for_fault_finder_app": ["UI / UX hints for filtering / grouping"]
}
