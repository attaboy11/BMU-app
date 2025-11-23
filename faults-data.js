// BMU Fault Finder App - Master Dataset
// Version: 2.0 (Consolidated & De-duplicated)

const MASTER_FAULT_DATA = [
  // =============================================================================
  // 1. POWER SUPPLY & CONTROL SYSTEMS
  // =============================================================================
  {
    "id": "power_supply_failure_total",
    "manufacturer": "Generic",
    "sub_system": "Power Supply",
    "symptom_title": "BMU completely unresponsive (No Power / Dead)",
    "symptom_details": [
      "All functions and indicator lights are off; main switch is on.",
      "No movement or sound from motors when attempting operation.",
      "System does not initialize."
    ],
    "technical_root_causes": [
      "Main power supply failure (building isolator off, blown fuse, tripped circuit breaker).",
      "Phase failure or phase mismatch triggering phase protection relay.",
      "Internal transformer failure (e.g., 415V to 110V/24V control power lost).",
      "RCD/ELCB tripped due to earth leakage."
    ],
    "diagnostic_steps": [
      "1. Verify building power supply: Confirm main isolator is ON and supply voltage exists on all phases.",
      "2. Check for tripped RCD/Leakage breakers in the panel.",
      "3. Inspect phase monitoring relay: If light is off or red, check phase rotation and voltage levels.",
      "4. Check control circuit fuses/breakers (usually lower voltage 110V/24V)."
    ],
    "safety_hazards": "High voltage exposure. Isolate before opening panels. Sudden movement risk if power restores.",
    "compliance_standard": "BS 6037-1:2017 (Electrical supply integrity)",
    "confidence": "High"
  },
  {
    "id": "safety_circuit_lockout_estop",
    "manufacturer": "Generic",
    "sub_system": "Safety Circuit",
    "symptom_title": "Safety circuit locked out / E-Stop will not reset",
    "symptom_details": [
      "BMU power is on, but 'Emergency Stop' or 'Fault' light remains lit.",
      "Machine refuses to move; safety relay does not latch.",
      "Happens after an E-stop was pressed or spontaneously."
    ],
    "technical_root_causes": [
      "E-Stop button engaged, stuck, or contact block failed (open circuit).",
      "Safety relay module failure (internal fault or welded contacts).",
      "Series safety device triggered (e.g., Ultimate Limit, Overspeed, Slack Rope) preventing reset.",
      "Wiring break in the safety loop."
    ],
    "diagnostic_steps": [
      "1. Check all E-Stop buttons (Cradle, Roof, Remote) - cycle and reset them.",
      "2. Check if series safeties (Ultimate Limits) are tripped.",
      "3. Inspect Safety Relay LEDs in the panel; if input channel is dead, trace wiring.",
      "4. Continuity test the safety loop (with power OFF)."
    ],
    "safety_hazards": "Never bypass safety circuits for operation. Do not rely on E-stops during troubleshooting if circuit is suspect.",
    "compliance_standard": "EN 60204-1 (Safety of machinery - Electrical equipment)",
    "confidence": "High"
  },
  {
    "id": "plc_communication_loss",
    "manufacturer": "Manntech/Generic",
    "sub_system": "Control System (PLC)",
    "symptom_title": "PLC Communication Fault / Intermittent Stops",
    "symptom_details": [
      "Operations halt with 'PLC COMM ERROR' or 'I/O FAULT' on display.",
      "Fault clears on reboot but recurs, often during movement.",
      "System becomes unresponsive to commands."
    ],
    "technical_root_causes": [
      "Damaged communication cable (Ethernet/RS485) in trailing cable or slip ring.",
      "Electrical noise (EMI) from VFDs interfering with signal (ground loops).",
      "Loose connection at PLC I/O modules due to vibration.",
      "Defective communication module."
    ],
    "diagnostic_steps": [
      "1. Check error logs for specific module/node failure.",
      "2. Inspect physical data cables in festoons/cable chains for damage.",
      "3. Check grounding: Ensure single-point ground and properly terminated shields.",
      "4. Look for contactor chatter or VFD noise coinciding with fault."
    ],
    "safety_hazards": "System may fail-safe stop abruptly. Treat control wires delicately.",
    "compliance_standard": "BS 6037-1:2017 (Control systems)",
    "confidence": "Medium"
  },
  {
    "id": "control_undervoltage_chatter",
    "manufacturer": "Generic",
    "sub_system": "Control System",
    "symptom_title": "Contactor Chatter / Unstable Control Power",
    "symptom_details": [
      "Rapid clicking/buzzing from control panel.",
      "Movements are jerky; power lights flicker.",
      "Common on temporary power or long cable runs."
    ],
    "technical_root_causes": [
      "Supply voltage drop (Undervoltage) causing coils to drop out.",
      "Loose wiring in the control circuit.",
      "Faulty control transformer tap settings (e.g., set to 440V on 400V supply).",
      "Missing surge suppression on coils causing PLC interference."
    ],
    "diagnostic_steps": [
      "1. Measure coil voltage during attempted operation (look for drop >10%).",
      "2. Tighten all control circuit terminals.",
      "3. Inspect contactor armatures for debris/wear.",
      "4. Check transformer tap settings."
    ],
    "safety_hazards": "Arcing can weld contacts (fire risk). Jerky movement risks personnel stability.",
    "compliance_standard": "EN 60204-1",
    "confidence": "Medium"
  },
  {
    "id": "remote_control_failure",
    "manufacturer": "Tractel/Generic",
    "sub_system": "Control System (Remote)",
    "symptom_title": "Remote control / Pendant unresponsive",
    "symptom_details": [
      "Wireless remote or pendant commands ignored.",
      "No link light on receiver.",
      "Machine works from local panel."
    ],
    "technical_root_causes": [
      "Remote battery dead or E-stop on remote engaged.",
      "Pairing lost between transmitter and receiver.",
      "Selector switch left in 'Panel' instead of 'Remote' mode.",
      "Receiver module fuse blown."
    ],
    "diagnostic_steps": [
      "1. Check Remote Battery and E-stop status.",
      "2. Verify Selector Switch is in correct mode.",
      "3. Check Receiver LEDs for signal reception.",
      "4. Re-pair device per manufacturer procedure."
    ],
    "safety_hazards": "Ensure only one control point is active. Be ready for sudden connection restoration.",
    "compliance_standard": "N/A",
    "confidence": "High"
  },

  // =============================================================================
  // 2. HOIST & DRIVE SYSTEMS
  // =============================================================================
  {
    "id": "hoist_motor_overheat_trip",
    "manufacturer": "CoxGomyl/Generic",
    "sub_system": "Hoist Drive",
    "symptom_title": "Hoist motor overheats / Thermal overload trips",
    "symptom_details": [
      "Motor cuts out after short usage; casing is hot.",
      "Thermal overload relay or PLC alarm triggers.",
      "Requires cooldown period to reset."
    ],
    "technical_root_causes": [
      "Phase imbalance/loss (running on 2 phases).",
      "Brake dragging (not fully releasing) creating load.",
      "Motor bearings seized or worn.",
      "Duty cycle exceeded (too many starts/stops)."
    ],
    "diagnostic_steps": [
      "1. ISOLATE POWER. Check motor voltage balance.",
      "2. Inspect Brake: Confirm full release and correct air gap.",
      "3. Rotate motor by hand (power off) to check for bearing seizure.",
      "4. Check Amp draw per phase against nameplate."
    ],
    "safety_hazards": "Burn hazard (hot motor). Do not repeatedly reset overload without fixing.",
    "compliance_standard": "LOLER 1998 / BS 6037-1",
    "confidence": "High"
  },
  {
    "id": "vfd_overcurrent_trip",
    "manufacturer": "Generic",
    "sub_system": "Hoist Drive (VFD)",
    "symptom_title": "VFD Overcurrent Fault (Hoist stops on lift)",
    "symptom_details": [
      "Drive trips immediately on lifting load.",
      "Error code: Overcurrent / OC.",
      "Current spike observed on display."
    ],
    "technical_root_causes": [
      "Mechanical Jam/Overload (Load > SWL).",
      "Aggressive acceleration parameters (Ramp too short).",
      "Motor winding short or cable insulation failure.",
      "IGBT module failure in drive."
    ],
    "diagnostic_steps": [
      "1. Verify load is within SWL and not jammed.",
      "2. Megger test motor and cables (Disconnect VFD first!).",
      "3. Check VFD Ramp Up time (increase if too fast).",
      "4. Monitor current draw - if immediate spike with no load, suspect electrical short."
    ],
    "safety_hazards": "Sudden stops. High current arc risk.",
    "compliance_standard": "EN 1808",
    "confidence": "High"
  },
  {
    "id": "vfd_overvoltage_regen",
    "manufacturer": "Generic",
    "sub_system": "Hoist Drive (VFD)",
    "symptom_title": "VFD DC Bus Overvoltage (Stops on lowering)",
    "symptom_details": [
      "Drive trips when lowering heavy load or decelerating.",
      "Error code: Overvoltage / OV / DC Bus High.",
      "Cradle may coast slightly."
    ],
    "technical_root_causes": [
      "Regenerative energy overwhelmed drive capacity.",
      "Braking resistor failed (open circuit) or missing.",
      "Deceleration ramp too fast.",
      "Supply voltage too high."
    ],
    "diagnostic_steps": [
      "1. Check Braking Resistor continuity (Ohms).",
      "2. Monitor DC Bus voltage during lowering.",
      "3. Increase Deceleration time in VFD parameters.",
      "4. Enable Dynamic Braking in VFD settings."
    ],
    "safety_hazards": "Reliance on mechanical brake for stopping. Resistors get very hot.",
    "compliance_standard": "EN 1808",
    "confidence": "Medium"
  },
  {
    "id": "rope_traction_slip",
    "manufacturer": "Tractel/Generic",
    "sub_system": "Hoist Drive (Traction)",
    "symptom_title": "Rope Slipping / Motor runs but no lift",
    "symptom_details": [
      "Motor runs, rope vibrates, but platform doesn't move.",
      "Evidence of glazing on rope.",
      "Possible burning smell."
    ],
    "technical_root_causes": [
      "Worn traction sheave or pressure rollers.",
      "Undersized wire rope (worn diameter).",
      "Rope contaminated with grease/oil.",
      "Extreme overload."
    ],
    "diagnostic_steps": [
      "1. STOP IMMEDIATELY. Do not run rope.",
      "2. Measure rope diameter (calipers).",
      "3. Inspect traction sheave for wear/smoothness.",
      "4. Check pressure roller spring tension.",
      "5. Clean rope if oily (traction hoists must be dry/clean)."
    ],
    "safety_hazards": "Fall risk. Rope damage. Ensure secondary brake (Blocstop) is functional.",
    "compliance_standard": "EN 1808 / ISO 4309",
    "confidence": "High"
  },
  {
    "id": "brake_holding_failure",
    "manufacturer": "Generic",
    "sub_system": "Hoist Drive",
    "symptom_title": "Brake Slip / Platform creeps down when stopped",
    "symptom_details": [
      "Platform drifts down slowly when motor is off.",
      "Brake slips under load.",
      "Visible rotation of motor shaft when holding."
    ],
    "technical_root_causes": [
      "Worn brake pads/discs.",
      "Incorrect brake air-gap (springs not applying full force).",
      "Brake coil voltage residual (not cutting fully).",
      "Oil contamination on brake disc."
    ],
    "diagnostic_steps": [
      "1. EVACUATE PLATFORM. Do not use.",
      "2. Inspect brake air gap (feeler gauge).",
      "3. Inspect pads for wear/glazing.",
      "4. Verify coil voltage is 0V when stopped."
    ],
    "safety_hazards": "CRITICAL: Potential free fall. Relying on secondary brake.",
    "compliance_standard": "LOLER 1998 / EN 1808",
    "confidence": "High"
  },
  {
    "id": "hoist_mechanical_seizure",
    "manufacturer": "Generic",
    "sub_system": "Hoist Drive",
    "symptom_title": "Grinding noise / Mechanical Seizure",
    "symptom_details": [
      "Loud grinding/clunking from gearbox.",
      "Motor stalls, high current.",
      "Metal shavings in gearbox oil."
    ],
    "technical_root_causes": [
      "Gearbox failure (broken tooth).",
      "Bearing collapse.",
      "Lack of lubrication (dry gearbox)."
    ],
    "diagnostic_steps": [
      "1. Isolate power. Rotate by hand if possible.",
      "2. Check gearbox oil for metal flakes/glitter.",
      "3. Listen to bearing housing with stethoscope."
    ],
    "safety_hazards": "Sudden lock-up can shock load ropes. Do not operate.",
    "compliance_standard": "BS 6037-1",
    "confidence": "Medium"
  },

  // =============================================================================
  // 3. HYDRAULIC SYSTEMS
  // =============================================================================
  {
    "id": "hydraulic_cylinder_drift",
    "manufacturer": "Facade Hoists/Generic",
    "sub_system": "Hydraulics",
    "symptom_title": "Hydraulic Cylinder Drift (Boom/Jib Lowers)",
    "symptom_details": [
      "Jib or mast creeps down slowly without input.",
      "Requires frequent correction.",
      "No external leaks visible."
    ],
    "technical_root_causes": [
      "Counterbalance/Holding valve leaking internally.",
      "Cylinder piston seal bypass (internal leak).",
      "Contaminated fluid causing valve seat damage."
    ],
    "diagnostic_steps": [
      "1. Check for external leaks.",
      "2. Isolate cylinder (close ball valves) - if drift stops, it's the valve. If continues, it's the cylinder seal.",
      "3. Inspect Counterbalance valve cartridge.",
      "4. Check oil cleanliness."
    ],
    "safety_hazards": "Crush hazard. Uncontrolled movement.",
    "compliance_standard": "LOLER 1998 (Unintentional movement)",
    "confidence": "High"
  },
  {
    "id": "hydraulic_jerky_motion",
    "manufacturer": "Generic",
    "sub_system": "Hydraulics",
    "symptom_title": "Jerky, Spongy, or Slow Hydraulic Movement",
    "symptom_details": [
      "Motion is erratic or vibrates.",
      "Pump sounds loud (cavitation/marbles sound).",
      "Foam in reservoir."
    ],
    "technical_root_causes": [
      "Air in system (Cavitation).",
      "Low fluid level.",
      "Suction leak.",
      "Sticking solenoid valve due to sludge."
    ],
    "diagnostic_steps": [
      "1. Check fluid level.",
      "2. Bleed air from system points.",
      "3. Inspect suction lines for air ingress.",
      "4. Check solenoid coils for proper magnetism."
    ],
    "safety_hazards": "Unpredictable movement speed. Hot oil.",
    "compliance_standard": "ISO 4413",
    "confidence": "Medium"
  },

  // =============================================================================
  // 4. WIRE ROPES
  // =============================================================================
  {
    "id": "wire_rope_broken_wires",
    "manufacturer": "Generic",
    "sub_system": "Wire Rope",
    "symptom_title": "Broken Wires / Fishhooks",
    "symptom_details": [
      "Visible broken strands.",
      "Sharp wire ends sticking out.",
      "Concentrated breaks in one lay length."
    ],
    "technical_root_causes": [
      "Fatigue from bending (normal wear).",
      "Abrasion against structure.",
      "Corrosion.",
      "Shock loading."
    ],
    "diagnostic_steps": [
      "1. Count breaks per 6x and 30x diameter lengths.",
      "2. Compare to ISO 4309 discard criteria (e.g., >6 wires in 6d).",
      "3. Check sheave condition (is groove damaging rope?)."
    ],
    "safety_hazards": "CRITICAL: Risk of rope snap. Take out of service.",
    "compliance_standard": "ISO 4309:2017 / LOLER",
    "confidence": "High"
  },
  {
    "id": "wire_rope_birdcaging",
    "manufacturer": "Generic",
    "sub_system": "Wire Rope",
    "symptom_title": "Rope Deformation (Birdcaging/Core Protrusion)",
    "symptom_details": [
      "Strands opened up (cage like).",
      "Core popping out.",
      "Bulge in rope."
    ],
    "technical_root_causes": [
      "Sudden release of tension (Shock load).",
      "Twist introduced during installation.",
      "Rope dragged over tight edge."
    ],
    "diagnostic_steps": [
      "1. Visual inspection.",
      "2. Determine cause of shock load (e.g. secondary brake activation)."
    ],
    "safety_hazards": "IMMEDIATE DISCARD. Structural integrity lost.",
    "compliance_standard": "ISO 4309:2017",
    "confidence": "High"
  },
  {
    "id": "wire_rope_diameter_reduction",
    "manufacturer": "Generic",
    "sub_system": "Wire Rope",
    "symptom_title": "Diameter Reduction / Corrosion",
    "symptom_details": [
      "Rope looks thin or stretched.",
      "Red dust (rouging) present.",
      "Internal core failure."
    ],
    "technical_root_causes": [
      "Internal corrosion (lack of lubrication).",
      "Core collapse.",
      "Abrasion wear."
    ],
    "diagnostic_steps": [
      "1. Measure diameter with calipers (0 load).",
      "2. Twist open strands to check internal corrosion.",
      "3. Discard if reduction >7-10% (check specific standard)."
    ],
    "safety_hazards": "Hidden weakness. Risk of snap.",
    "compliance_standard": "ISO 4309:2017",
    "confidence": "High"
  },

  // =============================================================================
  // 5. TRAVEL & LIMITS
  // =============================================================================
  {
    "id": "limit_switch_failure_overrun",
    "manufacturer": "Gind/Generic",
    "sub_system": "Travel Limits",
    "symptom_title": "Limit Switch Failed / Machine Overrun",
    "symptom_details": [
      "BMU hit hard stop or ultimate limit.",
      "Normal stop position ignored.",
      "Switch physically damaged or stuck."
    ],
    "technical_root_causes": [
      "Switch actuator bent/misaligned.",
      "Contacts welded shut.",
      "Water ingress in switch housing.",
      "Bypass jumper left in panel."
    ],
    "diagnostic_steps": [
      "1. Test switch continuity (Power Off).",
      "2. Check mechanical alignment of cam/arm.",
      "3. Open switch to check for corrosion.",
      "4. Verify no jumpers in panel."
    ],
    "safety_hazards": "Reliance on emergency backup. Crush risk.",
    "compliance_standard": "EN 1808 (2 independent limits required)",
    "confidence": "High"
  },
  {
    "id": "wind_alarm_interlock",
    "manufacturer": "Generic",
    "sub_system": "Safety System",
    "symptom_title": "Wind Speed Alarm Active",
    "symptom_details": [
      "Operations halted due to 'High Wind'.",
      "Anemometer spinning fast or damaged."
    ],
    "technical_root_causes": [
      "Actual High Wind (>15-20 m/s).",
      "Faulty Anemometer (seized or electrical short).",
      "Calibration error."
    ],
    "diagnostic_steps": [
      "1. Check actual weather conditions.",
      "2. Spin anemometer manually to check freedom of movement.",
      "3. Check wiring for shorts (simulating high wind)."
    ],
    "safety_hazards": "Do not override if actually windy. Instability risk.",
    "compliance_standard": "EN 1808",
    "confidence": "High"
  },
  {
    "id": "overspeed_brake_trip",
    "manufacturer": "Generic",
    "sub_system": "Safety System",
    "symptom_title": "Overspeed / Secondary Brake Engaged",
    "symptom_details": [
      "Platform stuck; Hoist won't move down.",
      "Overspeed device handle tripped."
    ],
    "technical_root_causes": [
      "Actual overspeed event.",
      "Nuisance trip due to jerking.",
      "Primary brake failure."
    ],
    "diagnostic_steps": [
      "1. DO NOT FORCE DOWN.",
      "2. Lift slightly to unload device.",
      "3. Reset device lever.",
      "4. Investigate why it tripped (check primary hoist brake)."
    ],
    "safety_hazards": "Indicates primary system failure. Inspect ropes for shock damage.",
    "compliance_standard": "EN 1808",
    "confidence": "High"
  }
];

// Export for usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MASTER_FAULT_DATA };
}
