const CRITICAL_IDS = [
  "brake_holding_failure",
  "wire_rope_birdcaging",
  "wire_rope_broken_wires",
  "overspeed_brake_trip",
  "rope_traction_slip"
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

  const manufacturerOptions = buildManufacturerOptions(MASTER_FAULT_DATA);
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
    const manufacturerFiltered = filterByManufacturer(MASTER_FAULT_DATA, state.selectedManufacturer);
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
  const tokens = new Set();
  data.forEach((fault) => {
    fault.manufacturer
      .split("/")
      .map((m) => m.trim())
      .forEach((token) => {
        if (token) tokens.add(token);
      });
  });
  return ["", ...Array.from(tokens).sort()];
}

function populateManufacturerSelect(selectEl, options) {
  selectEl.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "All manufacturers";
  selectEl.appendChild(placeholder);
  options.slice(1).forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectEl.appendChild(option);
  });
}

function updateSubsystemOptions(selectEl, filteredData, currentValue) {
  const subsystems = Array.from(new Set(filteredData.map((f) => f.sub_system))).sort();
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
  return data.filter((fault) => {
    const brands = fault.manufacturer.split("/").map((m) => m.trim());
    return brands.includes(manufacturer) || brands.includes("Generic");
  });
}

function filterBySubsystem(data, subsystem) {
  if (!subsystem) return data;
  return data.filter((f) => f.sub_system === subsystem);
}

function filterBySearch(data, query) {
  if (!query) return data;
  const q = query.toLowerCase();
  return data.filter((f) => {
    const fields = [
      f.symptom_title,
      f.sub_system,
      ...(f.symptom_details || []),
      ...(f.technical_root_causes || []),
      ...(f.diagnostic_steps || []),
      f.safety_hazards,
      f.compliance_standard,
      f.confidence
    ];
    return fields.filter(Boolean).some((field) => String(field).toLowerCase().includes(q));
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
  badges.appendChild(buildBadge(fault.manufacturer));
  badges.appendChild(buildBadge(fault.sub_system));
  if (fault.compliance_standard) badges.appendChild(buildBadge(fault.compliance_standard));
  if (fault.confidence) badges.appendChild(buildBadge(`Confidence: ${fault.confidence}`));
  if (CRITICAL_IDS.includes(fault.id)) {
    const critical = document.createElement("span");
    critical.className = "badge critical";
    critical.textContent = "CRITICAL – STOP AND ESCALATE";
    badges.appendChild(critical);
  }

  header.appendChild(badges);
  card.appendChild(header);

  card.appendChild(buildSection("Symptom details", renderList(fault.symptom_details)));
  card.appendChild(buildSection("Diagnostic steps", renderOrderedList(fault.diagnostic_steps)));
  card.appendChild(buildTechnicalSection(fault.technical_root_causes));

  const safety = document.createElement("div");
  safety.className = "safety-box";
  const safetyTitle = document.createElement("div");
  safetyTitle.className = "section-title";
  safetyTitle.textContent = "Safety hazards";
  safety.appendChild(safetyTitle);
  const safetyContent = document.createElement("p");
  safetyContent.textContent = fault.safety_hazards || "No safety information provided.";
  safety.appendChild(safetyContent);
  card.appendChild(safety);

  const meta = document.createElement("div");
  meta.className = "metadata";
  const idLine = document.createElement("p");
  idLine.textContent = `Fault ID: ${fault.id}`;
  meta.appendChild(idLine);
  card.appendChild(meta);

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

function buildBadge(text) {
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = text;
  return badge;
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

function buildTechnicalSection(items) {
  const wrapper = document.createElement("section");
  const titleRow = document.createElement("div");
  titleRow.className = "technical-header";

  const title = document.createElement("div");
  title.className = "section-title";
  title.textContent = "Technical root causes";
  titleRow.appendChild(title);

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "toggle-btn";
  toggle.textContent = "Show";
  titleRow.appendChild(toggle);

  wrapper.appendChild(titleRow);

  const list = renderList(items);
  list.classList.add("collapsible");
  list.hidden = true;
  wrapper.appendChild(list);

  toggle.addEventListener("click", () => {
    const isHidden = list.hidden;
    list.hidden = !isHidden;
    toggle.textContent = isHidden ? "Hide" : "Show";
  });

  return wrapper;
}

function renderList(items) {
  if (!items || (Array.isArray(items) && !items.length)) {
    const p = document.createElement("p");
    p.className = "placeholder";
    p.textContent = "No data available for this section.";
    return p;
  }

  const listItems = Array.isArray(items) ? items : [items];
  const ul = document.createElement("ul");
  listItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

function renderOrderedList(items) {
  if (!items || (Array.isArray(items) && !items.length)) {
    const p = document.createElement("p");
    p.className = "placeholder";
    p.textContent = "No data available for this section.";
    return p;
  }
  const listItems = Array.isArray(items) ? items : [items];
  const ol = document.createElement("ol");
  listItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ol.appendChild(li);
  });
  return ol;
}

function buildCopyText(fault) {
  const lines = [];
  lines.push(`${fault.symptom_title} (ID: ${fault.id})`);
  lines.push("Symptom details:");
  (fault.symptom_details || []).forEach((d) => lines.push(`- ${d}`));
  lines.push("Technical root causes:");
  (fault.technical_root_causes || []).forEach((c) => lines.push(`- ${c}`));
  lines.push("Diagnostic steps:");
  (fault.diagnostic_steps || []).forEach((s) => lines.push(s));
  lines.push("Safety hazards:");
  if (fault.safety_hazards) lines.push(`- ${fault.safety_hazards}`);
  if (fault.compliance_standard) lines.push(`Standard: ${fault.compliance_standard}`);
  if (fault.confidence) lines.push(`Confidence: ${fault.confidence}`);
  return lines.join("\n");
}
