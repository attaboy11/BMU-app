const CRITICAL_TITLES = [
  "Cradle slowly slides down when hoist is stopped (brake slipping)",
  "Overspeed safety brake engaged (platform stuck after sudden stop)"
];

const state = {
  selectedManufacturer: "",
  selectedSubsystem: "",
  selectedSymptomTitle: "",
  searchQuery: ""
};

document.addEventListener("DOMContentLoaded", () => {
  const manufacturerSelect = document.getElementById("manufacturerSelect");
  const subsystemSelect = document.getElementById("subsystemSelect");
  const symptomSelect = document.getElementById("symptomSelect");
  const searchInput = document.getElementById("searchInput");
  const resultsSummary = document.getElementById("resultsSummary");
  const faultResults = document.getElementById("faultResults");

  const manufacturerOptions = buildManufacturerOptions(FAULT_DATA);
  populateManufacturerSelect(manufacturerSelect, manufacturerOptions);

  manufacturerSelect.addEventListener("change", () => {
    state.selectedManufacturer = manufacturerSelect.value;
    state.selectedSubsystem = "";
    state.selectedSymptomTitle = "";
    render();
  });

  subsystemSelect.addEventListener("change", () => {
    state.selectedSubsystem = subsystemSelect.value;
    state.selectedSymptomTitle = "";
    render();
  });

  symptomSelect.addEventListener("change", () => {
    state.selectedSymptomTitle = symptomSelect.value;
    render();
  });

  searchInput.addEventListener("input", () => {
    state.searchQuery = searchInput.value.trim();
    render();
  });

  function render() {
    const manufacturerFiltered = filterByManufacturer(FAULT_DATA, state.selectedManufacturer);
    const subsystemFiltered = filterBySubsystem(manufacturerFiltered, state.selectedSubsystem);
    const searched = filterBySearch(subsystemFiltered, state.searchQuery);

    updateSubsystemOptions(subsystemSelect, manufacturerFiltered, state.selectedSubsystem);
    updateSymptomOptions(symptomSelect, searched, state.selectedSymptomTitle);

    const availableSymptomTitles = searched.map((f) => f.symptom_title);
    if (state.selectedSymptomTitle && !availableSymptomTitles.includes(state.selectedSymptomTitle)) {
      state.selectedSymptomTitle = "";
    }

    const selectedFault = searched.find((f) => f.symptom_title === state.selectedSymptomTitle);
    renderSummary(resultsSummary, searched, selectedFault);
    renderFault(faultResults, selectedFault, searched.length);
  }

  render();
});

function buildManufacturerOptions(data) {
  const unique = new Set(data.map((f) => f.manufacturer));
  const preferred = ["CoxGomyl", "Manntech", "Tractel"];
  const others = [...unique].filter((m) => !preferred.includes(m));
  return ["", ...preferred, ...others];
}

function populateManufacturerSelect(selectEl, options) {
  selectEl.innerHTML = "";
  const labelMap = {
    "": "All manufacturers",
    CoxGomyl: "CoxGomyl",
    Manntech: "Manntech",
    Tractel: "Tractel"
  };
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = labelMap[value] || value;
    selectEl.appendChild(option);
  });
}

function updateSubsystemOptions(selectEl, filteredData, currentValue) {
  const subsystems = Array.from(new Set(filteredData.map((f) => f.subsystem))).sort();
  selectEl.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "All subsystems";
  selectEl.appendChild(allOption);
  subsystems.forEach((sub) => {
    const opt = document.createElement("option");
    opt.value = sub;
    opt.textContent = sub;
    selectEl.appendChild(opt);
  });
  selectEl.value = currentValue;
}

function updateSymptomOptions(selectEl, filteredData, currentValue) {
  const symptoms = Array.from(new Set(filteredData.map((f) => f.symptom_title))).sort();
  selectEl.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a symptom…";
  selectEl.appendChild(placeholder);
  symptoms.forEach((sym) => {
    const opt = document.createElement("option");
    opt.value = sym;
    opt.textContent = sym;
    selectEl.appendChild(opt);
  });
  selectEl.value = currentValue;
}

function filterByManufacturer(data, manufacturer) {
  if (!manufacturer) return data;
  if (manufacturer === "CoxGomyl") {
    return data.filter((f) => f.manufacturer === "CoxGomyl" || f.manufacturer === "generic-BMU");
  }
  if (manufacturer === "Manntech") {
    return data.filter((f) => f.manufacturer === "Manntech" || f.manufacturer === "generic-BMU");
  }
  if (manufacturer === "Tractel") {
    return data.filter((f) => f.manufacturer === "Tractel" || f.manufacturer === "generic-BMU");
  }
  return data.filter((f) => f.manufacturer === manufacturer);
}

function filterBySubsystem(data, subsystem) {
  if (!subsystem) return data;
  return data.filter((f) => f.subsystem === subsystem);
}

function filterBySearch(data, query) {
  if (!query) return data;
  const q = query.toLowerCase();
  return data.filter((f) => {
    const fields = [
      f.symptom_title,
      ...(f.symptom_details || []),
      ...(f.typical_root_causes || []),
      ...(f.diagnostic_checks_step_by_step || []),
      ...(f.recommended_corrective_actions || []),
      ...(f.parts_commonly_involved || [])
    ];
    return fields.some((field) => String(field).toLowerCase().includes(q));
  });
}

function renderSummary(el, data, selectedFault) {
  if (!data.length) {
    el.textContent = "No faults match your filters.";
    return;
  }
  if (!selectedFault) {
    el.textContent = `Showing ${data.length} matching faults. Select a symptom to see troubleshooting steps.`;
    return;
  }
  el.textContent = `Showing ${data.length} matching faults; symptom selected: ${selectedFault.symptom_title}`;
}

function renderFault(container, fault, count) {
  container.innerHTML = "";
  if (!count) {
    const div = document.createElement("div");
    div.className = "placeholder";
    div.textContent = "No faults match your filters.";
    container.appendChild(div);
    return;
  }
  if (!fault) {
    const div = document.createElement("div");
    div.className = "placeholder";
    div.textContent = "Select a symptom to see troubleshooting steps.";
    container.appendChild(div);
    return;
  }

  const card = document.createElement("article");
  card.className = "fault-card";

  const header = document.createElement("div");
  header.className = "fault-header";
  const title = document.createElement("h2");
  title.textContent = fault.symptom_title;
  header.appendChild(title);

  const badges = document.createElement("div");
  badges.className = "badges";
  const manufacturerChip = document.createElement("span");
  manufacturerChip.className = "badge";
  manufacturerChip.textContent = fault.manufacturer;
  badges.appendChild(manufacturerChip);
  const subsystemChip = document.createElement("span");
  subsystemChip.className = "badge";
  subsystemChip.textContent = fault.subsystem;
  badges.appendChild(subsystemChip);

  if (CRITICAL_TITLES.includes(fault.symptom_title)) {
    const critical = document.createElement("span");
    critical.className = "badge critical";
    critical.textContent = "CRITICAL – STOP AND ESCALATE";
    badges.appendChild(critical);
  }

  header.appendChild(badges);
  card.appendChild(header);

  card.appendChild(buildSection("Symptom details", renderList(fault.symptom_details)));
  card.appendChild(buildSection("Typical root causes", renderList(fault.typical_root_causes)));
  card.appendChild(buildSection("Diagnostic checks (step-by-step)", renderOrderedList(fault.diagnostic_checks_step_by_step)));

  const safety = document.createElement("div");
  safety.className = "safety-box";
  const safetyTitle = document.createElement("div");
  safetyTitle.className = "section-title";
  safetyTitle.textContent = "Safety hazards and warnings";
  safety.appendChild(safetyTitle);
  safety.appendChild(renderList(fault.safety_hazards_and_warnings));
  card.appendChild(safety);

  card.appendChild(buildSection("Recommended corrective actions", renderList(fault.recommended_corrective_actions)));
  card.appendChild(buildSection("Parts commonly involved", renderList(fault.parts_commonly_involved)));
  card.appendChild(buildSection("Manufacturer references", renderList(fault.manufacturer_references)));
  card.appendChild(buildSection("Source URLs", renderList(fault.source_urls)));
  if (fault.notes_for_fault_finder_app && fault.notes_for_fault_finder_app.length) {
    card.appendChild(buildSection("Notes for fault finder app", renderList(fault.notes_for_fault_finder_app)));
  }

  const copyArea = document.createElement("div");
  copyArea.className = "copy-area";
  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.className = "copy-btn";
  copyBtn.textContent = "Copy troubleshooting steps";
  const feedback = document.createElement("span");
  feedback.className = "copy-feedback";

  copyBtn.addEventListener("click", async () => {
    const textBlock = buildCopyText(fault);
    feedback.textContent = "";
    try {
      await navigator.clipboard.writeText(textBlock);
      feedback.textContent = "Copied!";
    } catch (err) {
      feedback.textContent = "Clipboard unavailable. Copy manually.";
      const ta = document.createElement("textarea");
      ta.className = "manual-copy";
      ta.value = textBlock;
      copyArea.appendChild(ta);
      ta.focus();
      ta.select();
    }
  });

  copyArea.appendChild(copyBtn);
  copyArea.appendChild(feedback);
  card.appendChild(copyArea);

  container.appendChild(card);
}

function buildSection(titleText, contentEl) {
  const section = document.createElement("section");
  const title = document.createElement("div");
  title.className = "section-title";
  title.textContent = titleText;
  section.appendChild(title);
  section.appendChild(contentEl);
  return section;
}

function renderList(items) {
  if (!items || !items.length) {
    const p = document.createElement("p");
    p.className = "placeholder";
    p.textContent = "No data available for this section.";
    return p;
  }
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

function renderOrderedList(items) {
  if (!items || !items.length) {
    const p = document.createElement("p");
    p.className = "placeholder";
    p.textContent = "No data available for this section.";
    return p;
  }
  const ol = document.createElement("ol");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ol.appendChild(li);
  });
  return ol;
}

function buildCopyText(fault) {
  const lines = [];
  lines.push(fault.symptom_title);
  lines.push("Symptom details:");
  (fault.symptom_details || []).forEach((d) => lines.push(`- ${d}`));
  lines.push("Typical root causes:");
  (fault.typical_root_causes || []).forEach((c) => lines.push(`- ${c}`));
  lines.push("Diagnostic checks (step-by-step):");
  (fault.diagnostic_checks_step_by_step || []).forEach((s) => lines.push(s));
  lines.push("Safety hazards and warnings:");
  (fault.safety_hazards_and_warnings || []).forEach((s) => lines.push(`- ${s}`));
  lines.push("Recommended corrective actions:");
  (fault.recommended_corrective_actions || []).forEach((a) => lines.push(`- ${a}`));
  return lines.join("\n");
}
