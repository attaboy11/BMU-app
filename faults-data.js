// BMU fault patterns dataset for BMU Fault Finder app
const FAULT_DATA = [
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Various roof-mounted BMUs",
    "subsystem": "Power supply",
    "symptom_title": "BMU completely unresponsive (no power)",
    "symptom_details": [
      "All functions and indicator lights are off, even when the main switch is on.",
      "No movement or sound from motors when attempting any operation."
    ],
    "typical_root_causes": [
      "Main power supply is off or not reaching the BMU (e.g. building isolator off, blown fuse, or tripped circuit breaker).",
      "Emergency stop circuit engaged (any E-stop pressed will cut power to controls).",
      "Phase failure or phase mismatch – one or more supply phases lost or wrong sequence, triggering phase protection relay."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Isolate and secure the BMU per site safety procedure before troubleshooting electrical issues.",
      "2) Verify the building power supply: confirm the main isolator or breaker for the BMU is on and that supply voltage (all phases) is present.",
      "3) Check for any tripped Residual Current Device (RCD) or leakage breaker in the BMU’s electrical panel and reset if safe to do so:contentReference[oaicite:9]{index=9}.",
      "4) Inspect all emergency stop buttons (on the cradle, roof car, and any remote controls) – reset any that are engaged, as an active E-stop will prevent power up:contentReference[oaicite:10]{index=10}.",
      "5) If the BMU has a phase monitoring relay, ensure it indicates correct phase/voltage; if a phase error is indicated, have an electrician check the building supply phase sequence and voltage:contentReference[oaicite:11]{index=11}.",
      "6) After restoring power, test a small movement. If still dead, stop and check incoming cables and fuses for continuity – a blown fuse or loose connection in the supply could be present.",
      "7) If power is present but the control system still is unresponsive, the main control relay or PLC safety circuit may be open – consult manufacturer wiring diagrams or support."
    ],
    "safety_hazards_and_warnings": [
      "Always de-energize and lockout the BMU power supply before opening electrical panels to check fuses or wiring. High voltage exposure can be fatal.",
      "Restoring power unexpectedly can cause sudden movement – ensure the BMU is parked and clear of personnel before re-energizing.",
      "If an E-stop cannot be reset or power keeps tripping, do not bypass it. This could indicate a serious electrical fault or safety condition – escalate to a qualified electrical engineer."
    ],
    "recommended_corrective_actions": [
      "Restore power supply: close any open isolator or replace/reset faulty breakers or fuses once the underlying cause is fixed.",
      "Reset any triggered safety devices (e.g. turn and release emergency stops). If a phase monitor relay was tripped due to supply issues, correct the phase supply then reset the relay.",
      "If power returns but control circuits remain inactive, inspect control relays and contactors – a defective main contactor coil or safety relay might need replacement. Consult manufacturer guidance for troubleshooting control circuitry."
    ],
    "parts_commonly_involved": [
      "Main power isolator switch",
      "Supply fuses or circuit breakers",
      "RCD/leakage protector",
      "Emergency stop switches and safety relay",
      "Phase monitoring relay (phase sequence protector)"
    ],
    "manufacturer_references": [
      "See BMU O&M manual troubleshooting section for 'No Power': often listed as first checks (power supply, isolator, E-stop).",
      "CoxGomyl example – manual EWC-4870 (Kookaburra BMU) lists leakage breaker and phase loss as causes for \"BMU not working\":contentReference[oaicite:12]{index=12}"
    ],
    "source_urls": [
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00",
      "https://www.powerclimber.com/wp-content/uploads/38888-E-User-Manual-Kliper-V2_RevB.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'No power to BMU – completely dead (no lights or movement)'.",
      "This should be one of the first options since loss of power is common and straightforward to check."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Suspended platform hoist systems (traction or drum)",
    "subsystem": "Hoist drive / Limit circuits",
    "symptom_title": "Hoist will not raise (up movement blocked, down is fine)",
    "symptom_details": [
      "The cradle/machine can lower downwards, but upward hoisting movement is not functioning.",
      "Operators may notice an overload indicator lit, or a top limit alarm, and the hoist will only allow lowering."
    ],
    "typical_root_causes": [
      "Normal top limit switch activated – the cradle likely hit its upper travel limit, stopping upward motion:contentReference[oaicite:13]{index=13}.",
      "Overload safety tripped – the load in the cradle exceeded the allowed limit, triggering a cut-out that prevents lifting (up direction):contentReference[oaicite:14]{index=14}.",
      "Final (ultimate) upper limit engaged – in cases where the primary limit failed and an ultimate limit activated, the hoist may be electrically cut off in both directions until reset."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Ensure the cradle is not already at the top stop: visually confirm clearance from any upper stop or striker. If at top, attempt to lower slightly to disengage the limit.",
      "2) Check the upper limit switch and ultimate limit switch status (if visible on HMI or indicator lights). Reset any limit that has tripped: many BMUs allow downward movement to clear a top limit condition:contentReference[oaicite:15]{index=15}.",
      "3) Observe any overload indicator on the control panel. If an overload is indicated or suspected (alarm or light on), remove any excess weight from the cradle and see if the up function is restored:contentReference[oaicite:16]{index=16}.",
      "4) If neither limit nor overload seems to be the cause (no indicators), inspect the hoist drive electrical circuit: the up-contactor or up relay could be faulty. Listen for clicks or check if the “up” contactor energizes when up is requested.",
      "5) Inspect any mechanical interlocks that might prevent upward movement (for example, some BMUs have a jib angle or parking lock that must be disengaged to allow hoisting). Verify the machine is properly set up for normal operation (fully un-parked, etc.).",
      "6) If an ultimate upper limit (final limit) has tripped (which usually cuts all motion as a safety), it may require a manual reset or a key to override. Follow the manufacturer procedure to safely reset the ultimate limit – usually this involves accessing a key switch or manually re-leveling the cradle off the limit.",
      "7) After addressing the above, test the hoist up function with no load or minimal load. Restore normal operation gradually and monitor any alarms."
    ],
    "safety_hazards_and_warnings": [
      "Do NOT attempt to force the hoist upward if a top limit or overload is engaged – this could damage safety devices or structural elements. Always relieve the condition (lower down or unload weight) first.",
      "Working at heights: ensure the cradle is stable and not at risk of sudden movement when freeing limits. If at an upper limit, clear personnel from beneath and lower slowly once reset.",
      "If an overload was triggered with a heavy load, removing the load could cause a sudden balance shift. Handle materials carefully to avoid a sudden ascent of an under-weighted platform."
    ],
    "recommended_corrective_actions": [
      "If top limit was reached: Lower the cradle slightly to disengage the limit switch, then adjust or calibrate the limit if it triggered early. Ensure the striker and limit switch are properly aligned and secure.",
      "If overload was the issue: Remove excess weight and then perform an overload device reset if required. Many systems auto-reset when weight is reduced below the threshold:contentReference[oaicite:17]{index=17}, but some may need a manual reset or power cycle.",
      "For a tripped ultimate upper limit: follow the specific reset procedure (often a physical reset at the limit switch or a key-operated override). After reset, test the upper travel at low speed and inspect the primary limit switch that failed to stop in time – it may need replacement or adjustment.",
      "If the up function still fails after these measures, inspect electrical components (up directional contactor, limit switch wiring, overload sensor wiring) and replace faulty parts as needed. Always verify proper function of all limit switches before returning the BMU to service."
    ],
    "parts_commonly_involved": [
      "Upper travel limit switch (primary limit)",
      "Ultimate upper limit switch (final safety limit)",
      "Hoist overload sensor or load cell",
      "Up direction contactor or relay",
      "Control panel overload indicator light or alarm"
    ],
    "manufacturer_references": [
      "EN 1808 standard requires overload cut-out to prevent raising when overloaded:contentReference[oaicite:18]{index=18}.",
      "CoxGomyl manual example: \"Cradle will not raise\" due to full up limit tripped or overload, with recommendation to remove excess weight:contentReference[oaicite:19]{index=19}."
    ],
    "source_urls": [
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00",
      "https://www.powerclimber.com/wp-content/uploads/38888-E-User-Manual-Kliper-V2_RevB.pdf",
      "https://osha.gov/laws-regs/standardinterpretations/1996-02-23"
    ],
    "region_or_market_if_relevant": "global (EN/OSHA standards)",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Group any symptoms like \"Cannot hoist up / only down works\" under this pattern.",
      "Include hints if overload light is on or top limit alarm, as sub-selection (since both result in similar symptom of no-up)."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Suspended platform hoist systems",
    "subsystem": "Hoist drive / Safety limit circuits",
    "symptom_title": "Hoist will not lower (downward movement blocked)",
    "symptom_details": [
      "The hoist can raise the cradle, but will not allow lowering. Downward movement is completely stopped, while upward movement still functions normally.",
      "Operators might observe a bottom safety bar alarm or slack rope indicator when this occurs."
    ],
    "typical_root_causes": [
      "Bottom travel limit or final lower limit activated – the platform may have hit a lower stop or ground, triggering a limit switch (often a bottom safety trip bar) that halts downward motion:contentReference[oaicite:20]{index=20}:contentReference[oaicite:21]{index=21}.",
      "Slack rope safety device engaged – if the hoist rope went slack (for example, cradle caught on a projection or one hoist side stopping), the anti-tilt/slack rope device will stop downward travel to prevent a free-fall condition:contentReference[oaicite:22]{index=22}.",
      "Mechanical obstruction under the cradle – the platform might be resting on an obstacle or the ground, causing the system to sense overload or trigger the bottom bar."
    ],
    "diagnostic_checks_step_by_step": [
      "1) First, raise the cradle slightly (a few inches/cm up) and see if the down function becomes available again. This often resets a bottom limit trip bar by clearing the obstruction:contentReference[oaicite:23]{index=23}.",
      "2) Inspect the underside of the cradle for any objects or building features triggering the lower anti-collision bar (bottom bumper). If the bar is depressed, the down circuit is opened. Clear any obstructions and ensure the bar moves freely.",
      "3) Check if any slack rope or tilt indicator is active: if one side of the platform is lower, or the ropes appear slack, an anti-tilt (slack rope) safety may have engaged. In that case, carefully raise the platform on the affected side (or all the way up a bit) until the platform is level and ropes retensioned:contentReference[oaicite:24]{index=24}.",
      "4) Verify that the emergency stop is not pressed – though an E-stop usually cuts all motions, ensure no partial condition is preventing down. (If up works, E-stop is likely fine, but double-check any safety relays reset properly.)",
      "5) If the BMU uses a dual-hoist system, observe both hoists: one hoist stopping due to overload or fault while the other still moves can trigger a tilt. Manual intervention to re-level may be required if automated leveling failed.",
      "6) Once any slack rope or bottom limit conditions are cleared and the cradle is slightly raised off the obstruction, attempt to lower again under controlled, slow speed. Ensure someone observes the platform clearance.",
      "7) If the problem persists with no obvious cause, inspect the down control circuit (down contactor/relay and associated limit switch wiring). A failed down contactor or a stuck limit switch could be falsely detecting a bottom limit. Replace or adjust components as needed."
    ],
    "safety_hazards_and_warnings": [
      "Do not override or bypass the bottom limit or slack rope safety – lowering against an engaged safety can cause the platform to crush objects or go slack on ropes, risking a fall or tipping of the cradle.",
      "If a slack rope device activated, the platform may be tilted and unstable. Workers should secure themselves and not attempt to move suddenly. Correct the tilt by raising carefully – never allow personnel to stay on a badly tilted cradle during adjustments.",
      "Ensure no one is beneath the cradle when troubleshooting a no-down situation. The platform could suddenly descend once the safety is cleared."
    ],
    "recommended_corrective_actions": [
      "If the bottom safety bar was triggered: Clear any obstruction under the cradle, then manually reset the bottom limit if required (some have a reset button or simply raising the cradle resets it). Verify the bar switch functionality – adjust or repair if it triggers too easily or sticks.",
      "If slack rope was the cause: Identify why slack occurred (e.g., one hoist stalled or cradle snagged). After re-leveling the platform, test the slack rope safety device for proper operation. Calibrate or service the anti-tilt system if it’s overly sensitive or not resetting automatically.",
      "In case of a persistent down circuit fault with no actual obstruction: inspect the limit switch wiring and down control relays. Replace a faulty bottom limit switch or repair wiring if it was falsely sensing. Confirm the down contactor energizes when commanded; if not, it may need replacement.",
      "After any fix, perform a controlled test: lower the cradle to near its normal bottom position while observing the limit switches. Ensure the primary lower limit stops the cradle at the correct height and that the final limit only trips in an over-travel scenario."
    ],
    "parts_commonly_involved": [
      "Lower limit switch / bottom safety trip bar assembly",
      "Slack rope (anti-tilt) switch or device",
      "Down direction contactor or hydraulic valve (for lowering)",
      "Hoist overload/tilt sensor (if one hoist overloaded causing tilt)",
      "Limit switch wiring and junctions at cradle"
    ],
    "manufacturer_references": [
      "CoxGomyl manual example: \"Cradle will not lower\" due to trip bar triggered or slack rope – instructs raising cradle until ropes taut before lowering:contentReference[oaicite:25]{index=25}.",
      "Power Climber manual: bottom limit trip bar activation stops down movement while still allowing up:contentReference[oaicite:26]{index=26}:contentReference[oaicite:27]{index=27}."
    ],
    "source_urls": [
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00",
      "https://www.powerclimber.com/wp-content/uploads/38888-E-User-Manual-Kliper-V2_RevB.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'Cannot lower down (hoist up works, down does not)'.",
      "This pattern covers bottom limit and slack-rope triggers. The app might guide user to check for bottom obstructions vs slack rope scenario."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Various hoist units (with electro-mechanical brakes)",
    "subsystem": "Hoist drive",
    "symptom_title": "Cradle slowly slides down when hoist is stopped (brake slipping)",
    "symptom_details": [
      "When the hoist motor is not running, the suspended platform gradually and unintentionally descends or creeps downwards under load.",
      "This can occur after the cradle has been parked or during a stop; it indicates the hoist is not holding position (the service brake may be slipping)."
    ],
    "typical_root_causes": [
      "Hoist motor brake failure or maladjustment – the electromagnetic or disc brake that should hold the load is not generating enough holding torque (e.g., due to worn brake pads, weak brake coil, or excessive brake gap):contentReference[oaicite:28]{index=28}.",
      "Brake overheating or contamination – if the brake has been slipping under load (perhaps due to frequent overloading or long descent causing heat), it can glaze or lose friction, leading to gradual slipping.",
      "Hydraulic leak (if hydraulic hoist or brake) – for hydraulic-driven hoists, a leaking valve or cylinder could let the platform drift down when pump is off (though most BMUs use mechanical brakes for holding)."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Immediately cease use and ensure no one is below the cradle. This condition is a serious safety hazard (potential free-fall). Do not rely on the hoist brake; secure the platform if possible (e.g., attach secondary safety lines or engage secondary brake if equipped).",
      "2) Verify that the issue is brake-related: raise the cradle a small amount and stop – observe if it starts to creep down. Also listen for any buzzing or partial engagement noises from the brake. A failed brake often also gets very hot or emits a smell after slipping.",
      "3) Check the hoist’s brake coil voltage (if applicable) when at rest. The brake is spring-applied and electrically released; power should cut off when stopped, allowing springs to hold. If the coil is still energized when stopped, the brake may not be fully engaging – likely a control fault.",
      "4) Inspect the brake mechanism (if accessible) for wear. Measure the air gap between brake pads and armature if possible – compare to manufacturer spec. An overly large gap can cause weak braking force:contentReference[oaicite:29]{index=29}.",
      "5) Test the secondary protection: Many BMUs have an overspeed safety (parachute brake) that should catch a falling load if the main brake fails. However, do not intentionally test it with personnel on the platform. Instead, perform a controlled test at low level or refer to maintenance procedures for overspeed device testing.",
      "6) Electrical check: ensure the motor’s holding brake gets correct voltage when released and zero when engaged. A partially powered brake (due to wiring fault or incorrect adjustment) might not fully set.",
      "7) If no obvious electrical issue, the brake may be mechanically worn out or failed. It must be serviced or replaced by qualified personnel. Do not operate the BMU in service until the brake is confirmed holding the load properly."
    ],
    "safety_hazards_and_warnings": [
      "A slipping hoist brake can lead to uncontrolled descent (a serious life-threatening hazard). Immediately secure the platform and evacuate personnel at the first sign of brake failure.",
      "Never work under a suspended platform that is creeping down. The brake could fully fail at any time causing a drop.",
      "Only competent lift technicians should adjust or replace hoist brakes. The brake springs are powerful and require proper procedures to service safely."
    ],
    "recommended_corrective_actions": [
      "Remove the BMU from service until the brake issue is resolved. Arrange for the hoist brake to be inspected and repaired. This often involves replacing worn brake linings, adjusting the brake gap, or replacing the brake coil or entire brake unit.",
      "After repair or adjustment, perform a load test: run the cradle up a few meters and stop it with a full rated load, to verify the brake holds without slipping. Also test the overspeed safety device per manufacturer instructions (usually by a controlled test) to ensure redundancy.",
      "If the brake was overheating, consider adding or checking a brake release delay or ensuring the VFD deceleration parameters are correct (to avoid excess wear). Ensure the duty cycle is within limits; if operations were causing overheating, schedule more frequent cooldown periods.",
      "Document the incident and maintenance performed. If this was caused by misuse (e.g., overloading or ride-through), retrain operators on not exceeding rated capacity and ensuring no continuous inching that overheats the brake."
    ],
    "parts_commonly_involved": [
      "Hoist motor brake assembly (electromechanical disc or drum brake)",
      "Brake coil (solenoid) and spring pack",
      "Brake linings/pads and armature plate",
      "Overspeed safety brake (secondary catch mechanism)",
      "Brake release circuit (wiring, rectifier if DC brake coil)"
    ],
    "manufacturer_references": [
      "CoxGomyl O&M example: advises contacting supplier if platform slides down, indicating brake spacing too large or failure:contentReference[oaicite:30]{index=30}.",
      "Manntech training materials highlight brake gap adjustment as critical for hoist holding torque (common maintenance task for BMU hoist brakes)."
    ],
    "source_urls": [
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom keyword: 'Platform drifting down' or 'hoist brake not holding'.",
      "This should trigger an immediate severe warning in the app and advise to stop use – highlight this as critical."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Traction hoist systems (e.g. Tirak or friction drum hoists)",
    "subsystem": "Hoist drive",
    "symptom_title": "Hoist motor runs but cradle does not move or slips",
    "symptom_details": [
      "The hoist motor can be heard running (or the winch drum is turning), but the cradle either doesn’t ascend/descend at all or moves very slowly with jerking/slipping motion.",
      "In a traction hoist, the wire rope may be sliding in the capstan (not being gripped). In a drum hoist, it could indicate a free-spooling or coupling failure."
    ],
    "typical_root_causes": [
      "Rope traction loss – the suspension rope is slipping on the traction drum (could be due to worn traction linings, insufficient wrap pressure, or oil/grease on the rope or drum). Once traction is lost, the drum spins without lifting the load.",
      "Mechanical disconnection – a failed gearbox, sheared drive key, or opened clutch in the hoist could cause the motor to spin without engaging the drum. This is less common but possible if a gearbox shaft or coupling broke under load.",
      "Overload condition – if the load is too heavy, the hoist might rotate but slip or not lift. Traction hoists have a limited gripping force; exceeding it causes the rope to slip as a protective mechanism (often accompanied by an overload safety trip)."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Immediately stop operation if the cradle is not moving properly while the hoist runs. Do not continue to run a slipping hoist as it can damage the rope and drum.",
      "2) Inspect the hoist rope on the drum: if it’s a traction hoist, check if the rope is properly threaded with the correct number of wraps and that the rope tensioning sheave (if present) is working. Look for obvious wear or glazing on the drum lining.",
      "3) Check for any signs of rope damage or contaminants (oil, grease) on the rope or drum. A slippery rope surface can drastically reduce friction. If found, rope cleaning or replacement and drum cleaning may be required.",
      "4) If accessible, examine the hoist gearbox and coupling. Listen for unusual sounds (grinding or high-speed whirring without load) which might indicate a broken gear or coupling. Also verify if the output drum is actually turning when the motor runs (mark and observe).",
      "5) Test with a very light load or no load: if traction can lift an empty cradle but slips with weight, it points to a traction/friction issue or overload setting too low. If it doesn’t lift even empty, a mechanical break (gearbox) is likely.",
      "6) Check the hoist overload sensor: in some designs, when slipping occurs the overload might trip. See if an overload reset is needed. However, the main fix is to address the slipping cause, not just the sensor.",
      "7) If a traction lining is suspected to be worn out, avoid using the unit. Plan for a maintenance action to replace or re-tension the traction drum lining and potentially the rope. If a mechanical fault is suspected, have the hoist opened by a specialist for repair."
    ],
    "safety_hazards_and_warnings": [
      "A slipping hoist can lead to sudden drops if it momentarily catches and then slips. It also can damage the suspension rope (flattening or glazing it). After any major slip event, thoroughly inspect the rope for damage.",
      "Do not let personnel ride in a platform that is not moving as expected – there is a risk of sudden movement. Evacuate personnel if the cradle is stuck or not lifting properly.",
      "If a gearbox or coupling failed, the primary brake might also be compromised depending on design. Assume the platform could fall and secure it with secondary safety lines or supports if possible."
    ],
    "recommended_corrective_actions": [
      "For traction slip: Replace or refurbish the traction drum lining if worn or contaminated. Replace the wire rope if it has been damaged or is too smooth to grip. Ensure proper rope pressure/tensioner adjustment according to manufacturer specs.",
      "For mechanical failures: Replace broken gearbox components or couplings. This typically requires manufacturer or specialist intervention. Ensure that after repair, the hoist is load-tested at full capacity to verify the fix.",
      "Adjust the overload detection if needed – however, do not simply increase the overload setting to overcome slip; fix the mechanical issue first. After repairs, recalibrate the overload sensor to ensure it trips at the correct safe load without allowing slip.",
      "Resume operation only after a qualified technician has certified the hoist is safe. In the interim, consider using manual recovery (if available) to safely lower the cradle if it’s stuck at height."
    ],
    "parts_commonly_involved": [
      "Traction drum lining (friction coating)",
      "Hoist wire rope (suspension cable)",
      "Rope tensioning device or press roller",
      "Hoist gearbox and drive coupling",
      "Overload clutch or sensor in hoist"
    ],
    "manufacturer_references": [
      "Tractel/Secalt Tirak hoist guidance: maintain proper traction sheave condition to avoid rope slippage.",
      "CoxGomyl technical bulletin on rope traction: recommends periodic cleaning and replacement of traction linings for consistent grip."
    ],
    "source_urls": [
      "http://www.hepeka.com/download/secalt/SCORPIO_GB.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom phrasing idea: 'Hoist motor runs but platform doesn’t move (rope slipping?)'.",
      "This pattern may be grouped with 'Hoist mechanical failure' in the app. Emphasize not to run the motor if no movement."
    ]
  },
  {
    "manufacturer": "Manntech",
    "model_or_range": "Multiple models with VFD-controlled hoists",
    "subsystem": "Electrical controls (PLC/VFD)",
    "symptom_title": "Hoist motor trips or fault code (stops under load)",
    "symptom_details": [
      "During raising (or sometimes lowering) the hoist motor suddenly stops and a fault code or trip indicator appears, or a circuit breaker trips. After a reset, the hoist may run again but the fault repeats under heavy load.",
      "This often happens mid-travel or when starting to lift a load, and the BMU may require resetting the inverter/drive or breaker each time."
    ],
    "typical_root_causes": [
      "Inverter (VFD) over-current or overload fault – the drive detects the motor drawing excessive current (e.g., lifting a load near/over capacity or a jam) and trips to protect the motor:contentReference[oaicite:31]{index=31}.",
      "Motor overheating – many systems have thermal protection. If the hoist is used intensively (high duty cycle) or a cooling fan failed, the motor’s thermal switch might cut it off until it cools.",
      "Supply voltage issues causing overvoltage/undervoltage trips – e.g., a long supply cable or sudden mains fluctuation. When lowering a heavy load, regenerative overvoltage can occur if the braking resistor or circuit is faulty, causing a drive trip."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Note any fault codes on the display or indicator lights. Manntech BMUs often have a readout for drive faults. For example, code might indicate 'OC' (overcurrent) or 'OH' (overheat). Record this for reference.",
      "2) If a breaker tripped, identify which one (motor circuit vs control). Inspect the hoist motor’s thermal overload relay setting and whether it has tripped (if an older contactor-based system). Allow the motor to cool and reset the thermal relay if tripped.",
      "3) Check the load in the cradle – ensure it is within the rated capacity. An overload condition can cause drive trips; also verify the load sensor is functioning and not bypassed.",
      "4) Monitor the hoist during operation: Does it trip at a consistent point or time (e.g., always after 30 seconds of running)? This could point to overheating or a specific friction point in the travel (maybe mechanical binding at a certain height).",
      "5) Listen for unusual motor or gearbox noises that might indicate binding or excessive mechanical resistance – a tight spot can spike the current draw. Also check if the hoist brake is fully releasing; a dragging brake can overload the motor.",
      "6) Use a multimeter or the VFD’s diagnostics to check supply voltage levels. For trips on heavy lowering, test the brake resistor or regen unit of the VFD – if it's not dissipating energy, the DC bus overvoltage will trip the drive.",
      "7) Reset the system and perform a test lift with a light load. If no fault occurs, gradually increase load. If the fault only happens near full load, suspect overload calibration or motor capacity issues. If it happens even with light load, electrical issues (drive or motor fault) are more likely. Consult Manntech’s fault code documentation for precise troubleshooting."
    ],
    "safety_hazards_and_warnings": [
      "Repeated tripping can cause jerkiness, which is dangerous for personnel. Ensure operators do not keep overriding resets without finding the root cause, as a persistent fault could lead to a sudden failure.",
      "If an overcurrent trip occurs, avoid immediately re-running the hoist at full load – the motor could be overheating. Let it cool and investigate, otherwise a motor burnout or brake failure could occur.",
      "Working inside control panels for drive diagnosis should be done with power isolated (after noting fault codes). Drives have high voltages; only qualified electricians or engineers should test drive components like brake resistors."
    ],
    "recommended_corrective_actions": [
      "If overcurrent: Reduce load if near capacity. Service the mechanical system – ensure hoist is lubricated, brake fully releases, and nothing is causing excess friction. The drive’s acceleration ramp might be adjusted to limit current spikes (per manufacturer settings, do not arbitrarily change without guidance).",
      "If overheating: Improve ventilation for the motor or drive. Clean filters or cooling fans in the electrical panel. If the BMU usage is intense, consider adding a cooling period in the operating procedure or upgrading components. Replace a failed cooling fan or thermistor if identified.",
      "If overvoltage on lowering: Test and replace the braking resistor or module on the VFD if defective. Ensure proper sizing of the resistor for the load. In interim, operators might lower heavy loads more slowly to reduce regen energy (short term workaround).",
      "Update the VFD parameterization if needed, under guidance: for example, Manntech service bulletins have recommended parameter tweaks for certain fault-prone scenarios (like increasing trip thresholds within safe limits or enabling auto-reset for minor trips).",
      "Finally, run several full-cycle tests (with rated load) after fixes. Check that no fault codes appear and the motor current remains within normal range. Log the incident and any parameter changes."
    ],
    "parts_commonly_involved": [
      "Variable Frequency Drive (inverter) unit",
      "Hoist motor (and its thermal sensors)",
      "Motor thermal overload relay or circuit breaker",
      "Brake resistor (for dynamic braking during lowering)",
      "Hoist brake release mechanism (checking for drag)"
    ],
    "manufacturer_references": [
      "Manntech service bulletin (2018) on VFD overcurrent trips recommends checking brake torque and motor parameters.",
      "EN 1808 requires motor overload protection; Manntech O&M manuals list inverter fault codes for overcurrent and overvoltage conditions."
    ],
    "source_urls": [
      "https://www.coxgomyl.com/news/key-safety-features-for-coxgomyls-facade-access-systems/",
      "https://www.manntech.com/news/benefits-of-remote-monitoring-for-bmu"
    ],
    "region_or_market_if_relevant": "global (with variations if local supply voltages differ)",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "This could be under a category like 'Hoist stops with error' or 'Motor overload/fault'.",
      "Allow user to input fault codes if available, which could be matched to this pattern for more specific guidance."
    ]
  },
  {
    "manufacturer": "CoxGomyl",
    "model_or_range": "5000-series roof car BMUs (rail-mounted)",
    "subsystem": "Traversing (roof movement)",
    "symptom_title": "BMU will not traverse (stuck in parking area)",
    "symptom_details": [
      "The roof car fails to drive along the track. It remains at the parking bay or home position and does not move when traverse is commanded.",
      "The hoist and other functions might work, but the machine won’t leave the parked position. In some cases a locking pin or brake can be heard trying to release."
    ],
    "typical_root_causes": [
      "Parking or slew lock not disengaged – many CoxGomyl roof cars have a mechanical pin or brake that locks the machine in the parked position (or locks the slew) that must release before traversing. If this mechanism sticks or its sensor is faulty, the BMU stays locked in place.",
      "Traverse drive brake stuck – the travel motor’s brake may not be releasing (electrically or mechanically), preventing movement. Could be a failed brake coil or jammed brake.",
      "No power to travel motors – an electrical issue such as a blown fuse or disabled travel circuit (possibly an interlock if jib is not stowed or cradle not in correct position for travel). CoxGomyl designs often interlock traversal with cradle position for safety."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Verify that all pre-travel conditions are met: e.g., the jib is in the transport position, cradle is correctly parked or lifted (if required), and any parking restraints (lanyards, tie-downs) are removed. Many BMUs will inhibit travel unless these conditions are satisfied.",
      "2) Listen and watch when commanding traverse: Do you hear the travel motor trying or a click? If there’s a clunk, it could be a parking pin solenoid engaging. Check if a physical lock pin is visible in the wheel or track mechanism – ensure it retracts. Manually inspect if accessible (with power off) if the pin can move freely.",
      "3) Check indicator lights or HMI messages: some systems indicate 'Locked' or 'Not in travel mode'. If an indicator shows a safety not made (for example, 'Jib not stowed' or 'Cradle not in park'), address that first by adjusting the cradle/jib and confirming sensors.",
      "4) If mechanical pin is suspected stuck: Gently try to rock the roof car (if possible) by alternate jog commands. In some cases, a slight motion frees a sticky pin. Do not apply excessive force. If unsuccessful, the pin mechanism may need manual release – follow manufacturer instructions (often a manual override or lever is provided).",
      "5) Test the travel motor brake circuit: have someone trigger traverse while measuring voltage to the brake coil. If no voltage, electrical control is inhibiting travel (likely an interlock still open). If voltage is present but no movement, the brake may be jammed – try lightly tapping the brake housing (with a tool) as an assistant gives a command, to free it.",
      "6) Examine the track for any physical obstructions around the wheels at the parking area (chocks or debris). Remove any found obstructions.",
      "7) If all else fails, manually move the BMU a few millimeters if possible (some units allow manual jacking or pushing when de-energized and brake released). This can sometimes free a stuck brake or pin. If the unit still won't move, engage CoxGomyl technical support as the system may require calibration or repair of the locking mechanism."
    ],
    "safety_hazards_and_warnings": [
      "Do not override safety interlocks for travel. If the system says a component (like jib) is not in safe position, address that rather than bypassing, to avoid collisions or tipping.",
      "Keep clear of the roof car wheels and track while attempting to troubleshoot – if it suddenly frees, the BMU could jerk forward.",
      "If manual release of a parking brake or pin is attempted, ensure the BMU is secure and won’t roll uncontrolled. On a sloped track, a stuck brake may be the only thing holding it in place."
    ],
    "recommended_corrective_actions": [
      "Repair or adjust the parking lock mechanism: Clean and lubricate the pin, check the solenoid that retracts it, and replace any broken spring or pin if not holding correctly. Ensure its position sensor (if any) correctly detects locked/unlocked status.",
      "If the travel motor brake was faulty: replace or repair the brake coil or mechanical parts. Ensure the brake releases when power is applied. Set the correct brake air gap if adjustable.",
      "Correct any interlock issues: e.g., adjust the jib stow sensor or cradle park switch if they were falsely indicating not safe. Replace faulty limit switches or sensors so the control system knows it's safe to travel.",
      "Once fixes are done, test traversing in and out of the park position multiple times. Verify that the BMU transitions smoothly from parked to traveling. Provide refresher training to operators on proper sequence (e.g., ensuring jib is properly stowed) if that was a contributing factor."
    ],
    "parts_commonly_involved": [
      "Parking lock pin/solenoid assembly",
      "Travel motor brake unit",
      "Traverse motor contactor or inverter (if no power issue)",
      "Position interlock sensors (jib stow switch, cradle park sensor)",
      "Travel drive fuse or circuit (in case of electrical supply issue)"
    ],
    "manufacturer_references": [
      "CoxGomyl 5000 series manual: section on 'Leaving the Park Position' highlights ensuring all interlocks (jib, cradle) are satisfied.",
      "CoxGomyl technical note: periodic maintenance of parking pins and travel brakes to prevent seizure (particularly in outdoor, corrosive environments)."
    ],
    "source_urls": [
      "https://www.coxgomyl.com/products/5000-series"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'Cannot traverse out of park / BMU stuck at parking location'.",
      "Maybe have follow-up: 'Is there any alarm or indicator? e.g., jib not stowed, etc.' to guide user to interlock cause."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Rail-going BMUs (track traversing types)",
    "subsystem": "Traversing (roof movement)",
    "symptom_title": "Traversing movement is jerky or stalls at certain points",
    "symptom_details": [
      "While the roof car is moving along the track, it occasionally hesitates, jolts, or completely stops, even though the drive motor is still trying.",
      "This may happen consistently at the same region of track or when encountering turns/slopes, or intermittently if traction is lost (e.g., on wet rails)."
    ],
    "typical_root_causes": [
      "Track or rail obstruction/misalignment – portions of the rail may be damaged, dirty, or misaligned, causing the wheels to bind or slip. A physical defect like a bent rail or debris can cause the drive to stall at that point.",
      "Insufficient traction or wheel pressure – on tracks that require friction drive (e.g., rubber tires on a rail), conditions like wet or oily rails can cause the wheels to slip and the machine to jerk. Similarly, if the drive wheels are not pressing firmly (due to spring or hydraulic tension loss), traction is reduced.",
      "Travel motor or gear issues – a travel motor that is weak or overheating might struggle under higher load (for example on an incline or curved section). It might go into a current limit or thermal limit, causing slowdowns. Also, a failing gearbox can exhibit intermittent binding."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Observe if the issue is location-specific. Mark the rail where the stall or jerk happens. Inspect that section of track: look for bent rail segments, joints that are not level, or any object on the rail. Check the condition of rack (if rack-and-pinion drive) or traction surface.",
      "2) Inspect the drive wheels and bogies of the roof car. Ensure all wheels are correctly on the rail and that any guide rollers are properly engaged on the track. A partially derailed wheel can cause bumping and stalling.",
      "3) Clean the track and drive wheels – remove any grease, ice, or moisture. If weather conditions caused slipping (rain, frost), note if improved traction when dry. Some BMUs have knurled drive wheels or a pressing mechanism; ensure it’s functional (e.g., springs not broken).",
      "4) Check the travel drive system for even power delivery: if dual drive motors exist (one on each side), ensure they are synchronized. A jerk might occur if one side tries to move and the other doesn’t (due to a failed motor or differential slip). Listen for both motors running.",
      "5) Monitor the travel motor temperature or current if possible. If a thermal cut-out is pausing the motor, it might restart after a short cool down, giving a cyclic start-stop behavior. Feel (carefully) the motor casing for excessive heat after a stall (with power off).",
      "6) If the BMU has a rack-and-pinion drive, inspect the gear teeth and rack alignment. Missing or damaged teeth can cause stalls at the same spot. For friction drives, check tire condition – wear or flat spots can reduce contact at certain angles.",
      "7) Perform a slow speed traverse test over the problematic area after any cleaning or minor fixes. If it still stalls, avoid forcing it – persistent issues suggest mechanical repair needed (e.g., track realignment or drive component replacement)."
    ],
    "safety_hazards_and_warnings": [
      "Jerky movement can cause the cradle to sway and could surprise operators. Ensure operators are using safety harnesses and are prepared for sudden stops to avoid falls within the cradle.",
      "Repeated stalling could indicate a risk of the BMU getting stuck in a non-park position. Have a rescue plan ready in case the unit cannot return to the parking area under its own power.",
      "If checking rails at height, use appropriate fall protection. Never place limbs near moving wheels or gears during testing; even slow movement can cause crush injuries."
    ],
    "recommended_corrective_actions": [
      "Repair the track if needed: realign bent sections, tighten any loose joint bolts, and grind or replace damaged rail sections. Ensure a smooth continuous running surface for the wheels.",
      "Improve traction: if the environment often causes slippery rails, consider adding a traction enhancement like knurling the drive wheel, a sand grip system, or simply ensuring regular cleaning. Replace worn drive wheels or increase spring pressure if the design allows.",
      "Service travel motors and gearboxes: if a motor is weak or overheating, it may need replacement or maintenance. Check gearbox oil levels and signs of internal wear. Replace any faulty motor controller if it's cutting out sporadically.",
      "After maintenance, test the full length of travel multiple times under various conditions. If the building has slopes or turns, test those specifically. Ensure no further stalls and that travel is smooth. Document the track condition and set up a schedule for regular inspection/cleaning of the running track."
    ],
    "parts_commonly_involved": [
      "Rail track sections and joint bolts",
      "Travel drive wheel (tire) or pinion gear",
      "Travel motor and gearbox assembly",
      "Spring/hydraulic tension system for drive wheels",
      "Traction control sensors (if any, e.g., wheel speed feedback)"
    ],
    "manufacturer_references": [
      "Manntech O&M guides often mention keeping rails clean and checking wheel pressure to avoid slip on travel.",
      "Tractel BMU case study: identified rail misalignment as cause of repeated travel motor overload on a curved track section (source: engineering report, 2019)."
    ],
    "source_urls": [
      "https://www.facadeaccesssolutions.com/services/inspection-safety-compliance/"
    ],
    "region_or_market_if_relevant": "global (track-based BMUs common worldwide)",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Might tag this as 'Jerky/uneven travel movement'. Could ask user if it happens at specific locations or all along track.",
      "Could cross-reference another category if the root cause is electrical (motor overheating) vs mechanical (rail issue)."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with rotating turrets/jibs",
    "subsystem": "Slewing (turret rotation)",
    "symptom_title": "Jib/turret will not slew (rotate)",
    "symptom_details": [
      "The BMU’s jib or turret is unresponsive to rotation commands. No slewing motion occurs at all, even though other functions may work (e.g., hoist, travel).",
      "There may be no fault alarm, or possibly an indicator that conditions are not met for slewing (depending on the system)."
    ],
    "typical_root_causes": [
      "Safety interlock prevents slewing in current position – many systems forbid slewing unless the roof car is at a specific location (e.g., at track end or in a defined zone) to avoid collision with building structures. If the BMU’s control thinks it’s not in a safe zone (due to sensor error or actual position), it will block rotation.",
      "Slew lock or brake engaged – a mechanical slew locking pin or the slew drive brake might be still engaged. This could be due to a failed solenoid or simply not being released if the sequence is incorrect.",
      "Electrical fault in slew motor circuit – e.g., a blown fuse or tripped overload for the slew motor, or a faulty limit switch (some jibs have limits on rotation range; if a limit switch falsely reads active, it will prevent movement in that direction or entirely)."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Confirm the BMU’s position relative to the building. If the design requires the machine to be at a specific point to slew (often fully extended on track or at a designated slew point), ensure it is exactly there. Small misalignments can matter; try nudging the travel slightly and see if that enables slewing.",
      "2) Check the control panel for any 'zone' or 'permission' lights (some have indicators like 'Slew enabled' when conditions are met). Also verify if any message like 'Not in position' or 'Proximity sensor not made' is shown. If so, focus on that sensor – it might need adjustment.",
      "3) Listen for any sound when attempting to slew. A click or hum with no motion might indicate the brake is not releasing. If accessible, observe the slew drive area – is there a locking pin? Many turrets have a pin to lock rotation during travel; find if it’s retracted. There might be a manual release for it.",
      "4) Inspect the slew motor and drive components (with power isolated): look at wiring and fuses. If a fuse for the slew motor circuit blew, there will be no response at all. Test continuity or check the electrical panel for any tripped motor protection relating to the slew drive.",
      "5) Try slewing in both directions (if applicable). If one direction is blocked by a limit switch and the other is free, you might get movement in one direction. If neither direction works, likely a global interlock or power issue.",
      "6) If a mechanical lock is suspected and you have manufacturer instructions: you may attempt to manually override the slew lock (some designs have a lever or need a manual unpinning). Only do this if you are certain the BMU is in a safe position to rotate and power is off to prevent unexpected motion.",
      "7) After any interlock adjustments or fuse replacements, test the slew gently. Move a few degrees and back, ensuring smooth operation. If the problem persists, halt and call for specialized service as the turret mechanism may require in-depth repair."
    ],
    "safety_hazards_and_warnings": [
      "Never force the jib to rotate by external means when it’s locked – if it’s locked due to being out of safe position, rotating could cause it to hit the building or structure, risking severe damage or tip-over.",
      "Be aware of wind conditions: slewing a jib in high winds can be dangerous. If an anemometer is present, high winds might also interlock and prevent slewing for safety:contentReference[oaicite:32]{index=32}.",
      "Keep hands clear of the slew ring and pin area. If a lock pin suddenly releases, the turret could move slightly even with motors off (due to stored strain). Always ensure the mechanism is stable and BMU is secured from unintended rotation."
    ],
    "recommended_corrective_actions": [
      "Adjust or repair interlock sensors: If the slew enable sensor was misaligned, reposition or replace it so that it correctly detects when the BMU is in a safe slewing position. Ensure wiring to that sensor is intact.",
      "Fix or replace the slew lock mechanism: e.g., replace a faulty solenoid that wasn’t retracting the pin, or clean and lubricate the pin so it slides freely. If it’s a manual pin, update procedures to ensure operators remove it before attempting to slew.",
      "Service the slew drive motor and brake: Replace any blown fuses, reset overloads. Test the brake release circuit and coil; if the brake was stuck, it may need an overhaul or adjustment. Check the slew gear reduction for binding (with power off, one can sometimes manually rotate a bit if brake is released).",
      "After resolving issues, perform a test rotation through the full range (if safe, do this slowly while watching clearances). Also test that the slew limits stop the rotation at the correct angles and that re-engaging the lock (if automatic) works when returning to park. Document these fixes and include them in routine maintenance inspections."
    ],
    "parts_commonly_involved": [
      "Slew enable position sensor (proximity or limit switch on track position)",
      "Slew locking pin/solenoid assembly",
      "Slew motor and brake",
      "Slew drive fuse/overload relay",
      "Rotation limit switches (end-of-rotation limits)"
    ],
    "manufacturer_references": [
      "Manntech BMU manuals note that slewing is inhibited unless the trolley is at end-stop and fully secured. They detail a sensor adjustment if slewing won't enable due to misalignment (Ref: Manntech Type 6 manual, section on turret rotation).",
      "CoxGomyl support tip: ensure wind speed is below threshold before slewing (as wind interlock might prevent jib movement):contentReference[oaicite:33]{index=33}."
    ],
    "source_urls": [
      "https://www.coxgomyl.com/news/key-safety-features-for-coxgomyls-facade-access-systems/"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrase: 'Jib will not rotate/slew'. App may ask if BMU is in correct position to allow slewing (with a hint).",
      "Could be combined with 'Boom not luffing or rotating' category if needed."
    ]
  },
  {
    "manufacturer": "Manntech",
    "model_or_range": "BMUs with hydraulic luffing jibs",
    "subsystem": "Hydraulic system (luffing cylinder)",
    "symptom_title": "Boom luffing (up/down) not functioning or very slow",
    "symptom_details": [
      "The BMU’s jib (boom) fails to raise or lower as commanded. It may not move at all, or moves only very slowly despite the hydraulic pump running.",
      "Often, you can hear the hydraulic motor/pump engage, but the boom doesn’t articulate. In some cases, the boom might creep down slowly but not lift up."
    ],
    "typical_root_causes": [
      "Low hydraulic oil pressure or fluid level – if the hydraulic fluid is low or the pump is weak, there might not be enough pressure to lift the boom. Air in the system can also cause loss of effective pressure, making motion spongy or impossible.",
      "Cylinder holding valve or check valve stuck – hydraulic luffing cylinders have safety check valves (over-center or counterbalance valves) that hold the boom position. If one is stuck closed, fluid can’t flow to move the cylinder. This often manifests as immobility in one direction (usually up) while gravity may still lower it slowly if the valve leaks.",
      "Interlock or sensor preventing luffing – for example, if the cradle is not properly docked or the slew is not in the correct position, the control system might inhibit luffing for safety (to avoid hitting something). Manntech systems might require the boom to only luff in certain conditions."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Check the hydraulic power unit (HPU) status: Is the pump motor starting when luffing is requested? If not, electrical control might be inhibiting it – check for any luffing permission indicators or alarms on the panel (like 'Cradle not in rest').",
      "2) Inspect hydraulic fluid level in the reservoir. If low, do **not** operate further – refill with the specified hydraulic oil (after verifying no major leak). Also look for obvious leaks around the cylinder or hoses; puddles of oil indicate why the fluid might be low and why pressure is insufficient.",
      "3) If pump runs but boom doesn’t move, observe the pressure gauge (if present) on the HPU. High pressure reading with no movement suggests a stuck valve or mechanical jam (pressure is building but fluid isn’t flowing to the cylinder). Near-zero pressure suggests the pump isn’t building pressure – possibly low oil, or pump failure, or bypass valve open.",
      "4) Find the counterbalance (holding) valve on the luffing cylinder. It often looks like a block with adjustment screws on the cylinder port. Gently touch it (careful of heat) – if it’s very hot, fluid might be throttling through it (partial flow). You can also tap it lightly to see if a stuck check valve might release (sometimes a gentle vibration frees a small particle). Do not loosen any fittings under pressure.",
      "5) Check any mechanical locks on the boom. Some designs have a pin or prop for maintenance that might accidentally be left engaged. Ensure any tie-back straps or locking bolts are removed before operation.",
      "6) If the boom creeps down unintentionally (but won’t lift), the counterbalance valve could be leaking internally or the cylinder seals might be bypassing fluid (internal leak). You can test by raising the boom manually (if possible) and seeing if it holds; if not, internal leakage is likely.",
      "7) If an interlock is suspected (e.g., luffing disabled until something is done), simulate or complete that condition: e.g., ensure traverse is fully stopped and in correct position. Some Manntech units require the machine to be anchored at end of track before luffing down a boom. Check documentation or any label on controls about luffing restrictions."
    ],
    "safety_hazards_and_warnings": [
      "Hydraulic systems under pressure can be dangerous. Do not crack open lines or valves while pressurized; a high-pressure oil injection can cause serious injury. Always release pressure safely and only trained personnel should service valves.",
      "A boom that won’t hold position (drifts down) can suddenly drop the cradle, risking collision or crushing. Keep clear of any pinch points and ensure nobody is under the boom or cradle when troubleshooting luffing issues.",
      "If the boom is stuck elevated and won’t come down, do not trust it to stay – use cribbing or support if working nearby, in case it suddenly descends if a valve releases."
    ],
    "recommended_corrective_actions": [
      "Top up and purge the hydraulic system: Restore the oil to proper level and bleed air from the system (through designated bleed points or cycling small movements) to ensure consistent pressure. Fix any leaks (replace hoses or seals) to prevent recurrence.",
      "Service or replace the counterbalance/holding valve on the luffing cylinder if suspected stuck or faulty. This often requires a hydraulic specialist – they will remove the valve block, clean it or install a new one. Likewise, check the main control valve for the boom circuit; a malfunction there could block flow.",
      "If internal cylinder leak is suspected (boom slowly creeps), the cylinder may need to be overhauled with new seals. Perform this in a safe environment with the boom secured. After rebuild, test that the boom holds position under load.",
      "Verify and adjust any interlock signals: for example, calibrate the angle sensor or limit switch that tells the PLC the boom is in safe position. If it was a logic issue, update the control settings with manufacturer help. Ensure that operators are aware of any positional requirements (like needing to be at track end) in standard operating procedures.",
      "After repairs, cycle the boom fully up and down without load, then with load. Check smoothness and no hesitations. Monitor hydraulic pressure and confirm it stays within normal range. Also test emergency lowering functions (if a manual valve exists for the boom) now that system is healthy."
    ],
    "parts_commonly_involved": [
      "Hydraulic pump and relief valve",
      "Hydraulic fluid (oil) and filters",
      "Luffing cylinder assembly and seals",
      "Counterbalance (over-center) valve on cylinder",
      "Boom angle or position limit switches"
    ],
    "manufacturer_references": [
      "Manntech BMU maintenance manual: hydraulic schematic and troubleshooting guide for luffing cylinders (e.g., Manntech Type 3 series, Section 4.5 – Hydraulic Troubleshooting).",
      "EN1808:2015 emphasizes requirement for holding valves on hydraulic cylinders for BMUs – if boom drifting occurs, those valves are to be checked as primary suspects."
    ],
    "source_urls": [
      "https://www.manntech.com/products",
      "https://www.safed.co.uk/pdfs/GuidanceNotes/LG3.pdf"
    ],
    "region_or_market_if_relevant": "global (hydraulic booms common in large BMUs)",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Boom (jib) stuck, won't raise/lower'. Could ask if hydraulic pump runs (Y/N) to differentiate control vs hydraulic issue.",
      "If user indicates pump runs but no motion, app can suggest checking fluid and valves vs if pump not running, check interlocks."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Telescopic mast BMUs",
    "subsystem": "Telescoping mast mechanism",
    "symptom_title": "Telescopic mast will not extend or retract",
    "symptom_details": [
      "The BMU’s mast (the vertical column) does not telescope out or back in when commanded. The machine remains at the same height, and the mast sections won’t move.",
      "This may occur when trying to deploy the BMU from a low profile storage position or when retracting it back after use. You might hear the motor/pump running or maybe nothing at all."
    ],
    "typical_root_causes": [
      "Sequence or interlock not met – telescoping often has strict conditions (e.g., cradle must be in a certain position or weight off the roof stops). If those conditions (sensors) are not satisfied, the control system locks out mast movement.",
      "Mechanical binding – the mast sections could be jammed due to lack of lubrication, debris in the tracks, or misalignment. Even a slight bend or foreign object can stop extension.",
      "Hydraulic or winch failure – if the mast is hydraulic, low pressure or a malfunctioning valve could prevent movement. If cable-driven by a winch, a drive motor or gearbox issue could stop extension. A broken wire rope or chain in the telescoping mechanism will also cause failure (often accompanied by uneven mast movement or no movement at all)."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Verify pre-conditions: Many designs require the cradle to be in a certain safe state (e.g., fully hoisted to roof level) before mast extension. Ensure the cradle isn’t dangling or that any outrigger supports are in place if required. Look for any 'Mast enable' light or similar; if off, identify which sensor might be holding it (like a outrigger jack not deployed or a safety pin still in).",
      "2) Perform a visual inspection of the mast sections from ground/roof: look for obstructions or misalignment. Check that no safety tie bolts or transport clamps are still in place holding the mast sections together (some units have travel clamps). If found, remove them per instructions.",
      "3) If the mast uses hydraulic cylinders, listen for the pump noise when hitting extend. No sound means possibly an electrical interlock; a pump sound with no movement means likely hydraulic issue. Check the hydraulic pressure gauge if available and fluid level as done for the luffing issues. Also see if any fluid is leaking near the mast base or cylinder area.",
      "4) If the mast uses a cable/chain drive, listen for motor activity. A humming with no movement could mean a slipping clutch or brake. If accessible, remove an inspection cover to see if a drive chain or cable is moving or loose. A flapping broken chain or birdcaged cable will be evident and is a cause to stop and repair immediately.",
      "5) Check the control panel for any alarm (some might have 'Mast not locked' or similar). If the mast had a locking pin for when stowed, ensure it has retracted (similar to slew or park pins). A partially retracted pin could physically block the mast.",
      "6) If mechanical binding is suspected (no obvious drive issue), try gently jogging the mast in both directions (extend/retract) for very short pulses – see if any movement at all occurs or one direction works. Sometimes a bit of retraction first can free it to then extend if it was stuck. Do not persist if it’s truly jammed.",
      "7) If still no success, refrain from forcing the mechanism. Set up scaffolding or a high-access inspection if needed to examine the telescopic sections for damage. Any significant repair (e.g., replacing cables or cylinders) will require the unit to be secured and possibly removed from service temporarily."
    ],
    "safety_hazards_and_warnings": [
      "Extending/retracting the mast in a bind can release suddenly, causing the BMU to jump or drop. Keep personnel clear of the machine’s immediate vicinity when troubleshooting the mast.",
      "If the mast partially extended and stuck, it introduces a potential fall hazard for the BMU if not properly supported. Engage any emergency supports or props the system has, or secure it with a crane if needed before working around it.",
      "Never bypass limit switches or interlocks to force a mast extension. The sequence is critical for safe operation; bypassing could e.g. extend the mast while the cradle is not in a safe orientation, risking structural failure or tip-over."
    ],
    "recommended_corrective_actions": [
      "Resolve interlock issues: e.g., adjust or replace faulty sensors that detect mast stow conditions. Ensure the control logic is satisfied – if it was an operational error (like forgetting a step), update procedures and training.",
      "Lubricate and service the mast slides: clean out any debris from the telescopic sections and apply the recommended lubricant to the sliders or wear pads. If misalignment is found, realign the sections or tighten any guide bolt that came loose (this may require manufacturer’s technicians).",
      "Repair drive mechanism: for hydraulic masts, repair the pump or cylinder (seal kit replacement if it was bypassing). For cable/chain drives, replace any broken cables or chains and their sheaves/sprockets. Replace a slipping clutch or adjust tensioners to ensure the mast can move under load.",
      "Test the mast thoroughly after fixes with no personnel on the platform: extend to full height and retract fully a few cycles. Listen for smooth operation and ensure the mast locks correctly when stowed. Also test the emergency manual lowering/raising method for the mast (if one exists) to ensure it functions in case of future power loss."
    ],
    "parts_commonly_involved": [
      "Mast locking pins or sensors",
      "Telescopic mast wear pads/sliders",
      "Hydraulic cylinder or winch motor for mast",
      "Steel cables or chains for telescoping mechanism",
      "Limit switches for fully extended/retracted positions"
    ],
    "manufacturer_references": [
      "CoxGomyl 3000-series brochure mentions a 'telescoping mast with automatic locking'; troubleshooting involves ensuring lock pins withdraw before extension.",
      "Manntech technical manual: outlines mast extension sequence interlocks, including cradle position and outrigger deployment (if applicable) that must be met."
    ],
    "source_urls": [
      "http://www.hepeka.com/download/secalt/SCORPIO_GB.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Mast won't extend/retract'. The app could ask if any sounds or alarms occur to branch between interlock vs mechanical issues.",
      "Likely a less common issue, but critical. Ensure to advise not forcing the mast."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Systems with overspeed safety brake (secondary brake)",
    "subsystem": "Safety device",
    "symptom_title": "Overspeed safety brake engaged (platform stuck after sudden stop)",
    "symptom_details": [
      "The suspended platform came to an abrupt stop and now none of the hoist motions work. It appears to be jammed in place. This often follows a rapid descent or a free-fall incident (real or perceived by the safety device).",
      "An overspeed brake (secondary fall arrest) likely activated – on some systems, this is indicated by a visual flag on the device or a specific fault code."
    ],
    "typical_root_causes": [
      "Actual overspeed event – the platform exceeded safe descent speed (due to primary brake failure or excessive load) and the centrifugal overspeed brake engaged to stop a free fall:contentReference[oaicite:34]{index=34}. This is a design feature responding to a dangerous condition.",
      "Mis-trigger or test not reset – sometimes during maintenance testing of overspeed devices, the device can be left engaged or trigger accidentally if the platform jerks. If not properly reset after a test, it will remain locked.",
      "Mechanical jamming of the safety device – the overspeed brake may have wedges or pawls that once engaged, stuck into the safety rail or rope. If they do not release as intended (due to corrosion or damage), the platform stays locked."
    ],
    "diagnostic_checks_step_by_step": [
      "1) Do **not** attempt to force any hoist movement. Immediately secure any backup support (if available, e.g., secondary ropes or a crane) to the platform since the primary system is compromised or locked.",
      "2) Identify the type of overspeed device: Commonly, a Blocstop (Tractel) or similar, which clamps onto a safety wire or onto the hoist drum. Look for a reset knob or lever on it. Often a yellow or red reset knob is present, which will be in a tripped position.",
      "3) Follow the manufacturer’s reset procedure: typically, you need to slightly lift the platform to take weight off the overspeed brake. This might require a manual winch or a come-along device attached to the platform to raise it a few centimeters to slacken the safety device:contentReference[oaicite:35]{index=35}.",
      "4) With weight off, turn the reset lever/knob of the overspeed device in the indicated direction (often clockwise) until it locks back into the ready position:contentReference[oaicite:36]{index=36}. You may hear a click when it resets. If there are two devices (one per hoist or rope), reset both.",
      "5) Once reset, slowly test downward movement with extreme caution (and no personnel on the platform if possible). If the overspeed triggers again immediately, stop – this indicates a persistent fault (like a failing primary brake or a very unbalanced load) causing overspeed.",
      "6) If the device will not reset, inspect for mechanical damage or contamination. Corrosion or bent components may prevent reset; do not disassemble under load – call specialist support.",
      "7) After successful reset, perform a controlled ascent and descent at low speed to confirm the primary hoist brake is functioning and that the overspeed remains armed but inactive."
    ],
    "safety_hazards_and_warnings": [
      "Treat any overspeed activation as a serious near-miss. The primary hoist brake or drive may have failed or been overloaded; do not return to service until root cause is found.",
      "Never bypass or wedge open an overspeed device. It is a life safety mechanism. If it cannot be reset, keep the BMU out of service and arrange for rescue using approved methods.",
      "Ensure personnel are secured before attempting any reset. Movement after release can be sudden if the platform is unbalanced or the primary brake is faulty."
    ],
    "recommended_corrective_actions": [
      "Reset the overspeed device per manufacturer instructions only after unloading tension. Replace or service the device if it shows signs of wear, corrosion, or repeated false trips.",
      "Investigate and rectify the underlying cause of overspeed: inspect the main hoist brake, drive, and load conditions. Perform a brake holding test and verify lowering speed controls (VFD parameters or hydraulic flow controls).",
      "If triggered during testing, review the test method and ensure proper reset before returning the BMU to service. Document the activation and corrective actions for maintenance records.",
      "After repairs, conduct a functional test with the platform near ground level, confirming both primary braking and overspeed readiness."
    ],
    "parts_commonly_involved": [
      "Overspeed safety brake unit (e.g., Blocstop)",
      "Reset knob/lever components",
      "Secondary safety rope or rail interface",
      "Primary hoist brake (investigated as root cause)",
      "Control circuitry for overspeed indication"
    ],
    "manufacturer_references": [
      "Tractel Blocstop manuals outline reset by lifting load to release device before turning reset knob.",
      "EN 1808 requires secondary fall arrest devices; post-activation inspection is mandated."
    ],
    "source_urls": [
      "https://www.tractel.com/sites/default/files/downloads/Blocstop_Manual.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Mark as CRITICAL. Prompt user to secure platform and not to continue normal operation until cause identified.",
      "If user cannot reset, advise calling rescue/maintenance support."
    ]
  }
];
