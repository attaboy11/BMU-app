// BMU fault patterns dataset for BMU Fault Finder app
const FAULT_DATA = [
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "All models (electric BMUs)",
    "subsystem": "Power supply",
    "symptom_title": "BMU completely unresponsive (no power)",
    "symptom_details": [
      "No functions operate; no indicator lights on control panels",
      "BMU appears dead even though mains supply should be on"
    ],
    "typical_root_causes": [
      "Main power supply issue (e.g. phase loss or emergency isolator off)",
      "Leakage/ground-fault breaker (RCD/ELCB) tripped due to electrical fault:contentReference[oaicite:4]{index=4}",
      "Emergency stop circuit engaged (any E-stop button pressed or faulted)",
      "Blown fuse or tripped circuit breaker in main control panel"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Ensure the BMU is properly isolated then re-energize main power; check the main isolator or breaker is switched on.",
      "2) Verify all emergency stop buttons are reset (twist/pull out any pushed-in E-stop).",
      "3) Check main supply voltage and phase presence: use a multimeter on incoming terminals to confirm all phases present and correct voltage.:contentReference[oaicite:5]{index=5}",
      "4) Inspect residual current device (leakage breaker) and main fuses: if tripped or blown, investigate for possible ground fault or short before resetting/replacing.:contentReference[oaicite:6]{index=6}",
      "5) If control power has a separate fuse or transformer, check those as well; ensure control circuit indicator (if any) is lit.",
      "6) Once power is restored, test a small function (e.g. cradle up a few inches) to confirm functionality."
    ],
    "safety_hazards_and_warnings": [
      "Always lock-out and tag-out power before opening panels or checking electrical components.",
      "Beware of unexpected movement when power is restored; keep personnel clear of BMU moving parts.",
      "If an RCD or breaker repeatedly trips, do NOT bypass it – this indicates an electrical fault that must be repaired before use."
    ],
    "recommended_corrective_actions": [
      "Reset any tripped breakers or replace blown fuses once the underlying cause is addressed.",
      "If a phase was missing due to building supply issues or a faulty connector, have a qualified electrician restore proper three-phase supply.",
      "Repair any identified ground faults or short circuits before re-energizing (e.g. water in a junction box, damaged cable insulation).",
      "Perform a functionality test of all motions after power is restored to ensure no other faults persist."
    ],
    "parts_commonly_involved": [
      "Main isolator switch",
      "RCD/ground-fault breaker",
      "Primary fuses or circuit breakers",
      "Control circuit transformer and fuses"
    ],
    "manufacturer_references": [
      "See CoxGomyl O&M manual troubleshooting: 'BMU not working (all functions & lights)' – suggests checking leakage breaker and 3-phase supply:contentReference[oaicite:7]{index=7}"
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual",
      "http://www.hepeka.com/download/secalt/G228-BAMW250engl.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrasing for app: 'BMU has no power / completely unresponsive'.",
      "Group any total power failure issues under this pattern (including phase loss, main fuse blown, or E-stop engaged)."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Any BMU with overload safety",
    "subsystem": "Hoist drive",
    "symptom_title": "Hoist will not raise (but lowers normally)",
    "symptom_details": [
      "Operator cannot lift the cradle/platform, but downward movement is still allowed",
      "An overload warning light or alarm may be active during attempted lifting"
    ],
    "typical_root_causes": [
      "Load in cradle exceeds the safe working load (SWL), triggering the overload cut-out:contentReference[oaicite:8]{index=8}",
      "Overload sensor or load cell fault (false trigger even if load is within limit)",
      "Improper calibration of the overload device causing it to trip at too low a load"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Verify the actual load in the cradle (number of persons, tools, materials). Ensure it does not exceed the rated capacity of the BMU.",
      "2) If overweight, remove excess load from the cradle and attempt to raise again.:contentReference[oaicite:9]{index=9}",
      "3) Observe any overload indicator lights or alarms on the control panel when attempting to raise; if present even with a light load, suspect a sensor issue.",
      "4) Inspect the overload safety device (load cell or mechanical cutoff) for obvious damage or misalignment. Ensure it is not stuck or activated.",
      "5) If available, check the calibration settings or readouts of the load sensor (some systems have a test or reset procedure for the overload).",
      "6) After adjustments, perform a test lift with a known safe load to see if the hoist now raises normally without triggering the overload."
    ],
    "safety_hazards_and_warnings": [
      "Never bypass or disable the overload safety device – it is a critical protection against overloading that could lead to rope failure or structural damage.",
      "Exceeding SWL can risk structural failure or tipping of the BMU; always reduce load to within limits.",
      "Performing checks under overload conditions may require removing personnel from the cradle to reduce risk while troubleshooting."
    ],
    "recommended_corrective_actions": [
      "If actual overload: reduce the load to within the rated capacity before operation. Ensure operators are aware of the weight limits.",
      "If the overload device is faulty or triggering at incorrect loads: have it recalibrated or replaced by a qualified technician.",
      "After fixing, conduct a load test (e.g. with calibrated test weights) to verify the overload cutoff triggers at the correct threshold (typically ~125% of SWL as per EN1808) and allows normal operation at or below SWL."
    ],
    "parts_commonly_involved": [
      "Load cell or overload cut-off switch",
      "Hoist control circuit (which monitors overload)",
      "Indicator light or alarm buzzer for overload"
    ],
    "manufacturer_references": [
      "CoxGomyl manual example: 'Cradle will not raise' due to cradle overload; only downward movement is allowed until excess weight is removed:contentReference[oaicite:10]{index=10}",
      "Tractel/Secalt note: lifting force limiter stops lifting on overload but still allows lowering (design feature):contentReference[oaicite:11]{index=11}"
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual",
      "http://www.hepeka.com/download/secalt/G228-BAMW250engl.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "App symptom phrasing: 'Hoist won’t go up (overload)' or 'BMU only lowers, won’t lift'.",
      "Combine all cases of overload cut-out (regardless of manufacturer) into this pattern, as the behavior is similar (no up motion, down still works)."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Systems with slack rope or upper trip safety",
    "subsystem": "Limit circuits",
    "symptom_title": "Cradle will not lower (downward motion blocked)",
    "symptom_details": [
      "Hoist will not lower the cradle/platform even though upward movement may still function",
      "The cradle may have recently been raised to an upper obstacle or the ropes appear slack"
    ],
    "typical_root_causes": [
      "Upper mechanical stop or trip bar activated (e.g. cradle hit an obstruction at roof/soffit):contentReference[oaicite:12]{index=12}",
      "Slack rope safety device engaged (loss of tension in suspension rope triggered lock):contentReference[oaicite:13]{index=13}",
      "Hoist overspeed safety brake (secondary brake) triggered, locking descent:contentReference[oaicite:14]{index=14}",
      "Ultimate upper limit switch tripped, cutting out all downward power as a fail-safe:contentReference[oaicite:15]{index=15}"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Inspect the cradle’s top for any contact with an obstacle or the roof. If an upper 'trip bar' or safety switch was depressed by an obstacle, it may prevent downward travel.:contentReference[oaicite:16]{index=16}",
      "2) If a trip bar is triggered, attempt to slightly raise the cradle (just enough to clear the obstacle and release the trip bar) – ensure no one is at risk of crush – then try lowering again.:contentReference[oaicite:17]{index=17}",
      "3) Observe the tension in the hoist ropes. If ropes are slack or one side is slack, a slack rope safety has likely activated. First, remove any obstruction or cause of the cradle hanging up.",
      "4) Gently raise the cradle a few inches to re-tighten the ropes and reset the slack rope device, then attempt lowering again.:contentReference[oaicite:18]{index=18}",
      "5) If the overspeed secondary brake engaged (indicated by a sudden stop and perhaps a dedicated indicator or mechanical latch), do not force movement. Locate the overspeed brake reset mechanism (often a knob or lever on the safety brake) and reset it per the manual.:contentReference[oaicite:19]{index=19}",
      "6) If an ultimate limit switch (final limit) was triggered at the top position, normal electrical lowering may be disabled. Follow the manufacturer's procedure to safely lower the cradle, which may involve manual brake release or override, until the limit switch is cleared.:contentReference[oaicite:20]{index=20}"
    ],
    "safety_hazards_and_warnings": [
      "Do NOT override or bypass safety devices like slack rope or overspeed brakes – they engage to prevent a dangerous situation. Instead, address the cause (obstruction, slack) under controlled conditions.",
      "Working around a jammed cradle can be hazardous. Use extreme caution if raising the cradle to reset devices; avoid further entanglement or crushing.",
      "If the cradle is stuck and cannot be lowered by normal means, ensure the area below is cleared and consider emergency rescue procedures (e.g. bringing in a secondary hoist or fire department) rather than taking unsafe actions."
    ],
    "recommended_corrective_actions": [
      "Clear any roof-level obstructions and ensure the cradle path is free. If a trip bar was activated, once cleared, test the down function carefully.",
      "Reset the slack rope and overspeed safety devices according to the manufacturer’s instructions once the cause is corrected. This may require a qualified technician if specialized tools are needed.",
      "If the ultimate upper limit was hit, recalibrate or adjust that limit switch if it engaged too early, and verify the primary upper limit switch is functioning so that the final limit is not normally reached.",
      "After any such event, perform a full functional test of the safety devices (e.g. intentionally trigger slack rope in a controlled manner) to ensure they are working properly and then reset."
    ],
    "parts_commonly_involved": [
      "Upper travel limit switch and final (ultimate) limit switch",
      "Cradle top safety trip bar switch",
      "Slack rope safety lever or switch",
      "Overspeed safety brake device"
    ],
    "manufacturer_references": [
      "CoxGomyl O&M guidance: 'Cradle will not lower' could be due to ultimate limit, trip bar, slack rope, or overspeed brake engagement:contentReference[oaicite:21]{index=21}:contentReference[oaicite:22]{index=22}",
      "EN1808 standard requires slack rope and overspeed devices – these must be manually reset after activation (manufacturer procedures vary)."
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom for app: 'Cradle/BMU will not descend'.",
      "This pattern groups all causes where down movement is inhibited by safety systems (slack rope, overspeed, final limits, etc.)."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Twin-hoist platforms (any brand)",
    "subsystem": "Hoist drive",
    "symptom_title": "Suspended platform is tilting to one side",
    "symptom_details": [
      "Cradle/platform is not level, one end hangs lower than the other during operation",
      "Operators may notice one hoist seems to carry less load (slack rope on one side if severe)"
    ],
    "typical_root_causes": [
      "Uneven load distribution in the cradle (one side significantly heavier):contentReference[oaicite:23]{index=23}",
      "Minor speed or brake force difference between the two hoist motors causing asynchronous movement:contentReference[oaicite:24]{index=24}",
      "One hoist's brake or drive slipping slightly (due to wear or improper adjustment)",
      "In two-rope drum systems: rope payout uneven due to diameter differences or spooling issues"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Stop the BMU if a noticeable tilt develops; do not continue raising/lowering until addressed to avoid triggering the slack rope device on the lighter side.",
      "2) Visually check the load distribution in the cradle – ensure personnel and equipment are roughly centered. Redistribute any movable weight so that each hoist carries an equal load.:contentReference[oaicite:25]{index=25}",
      "3) If the platform is still not level, use any manual leveling function if provided (some BMUs allow individual hoist adjustment by key switch or pendant under maintenance mode).:contentReference[oaicite:26]{index=26}",
      "4) Observe the hoist ropes for slack on one side. If slack is present, the slack rope safety may activate; carefully raise the lower side (or overall platform) just enough to re-engage tension, under controlled conditions.",
      "5) Test the hoists separately at low height (if possible) – run each hoist a short distance to see if one is lagging. Unusual sounds or slip from one hoist could indicate a brake or motor issue.",
      "6) If uneven lifting persists, schedule a thorough inspection: check both hoist brakes for proper torque and similar adjustment, and inspect for differences in motor output or gearbox condition."
    ],
    "safety_hazards_and_warnings": [
      "A tilting platform can lead to a dangerous situation – a slack rope on the higher side could trigger the safety lock, or in extreme cases, the platform could spill occupants or objects.",
      "Never continue normal operation with a significantly uneven platform. The condition must be corrected before proceeding to avoid sudden stops or additional stresses.",
      "Any manual intervention (like leveling one side) should be done by trained personnel, and only if the BMU design allows it safely. Otherwise, bring the platform to a safe position (e.g., ground or roof) for correction."
    ],
    "recommended_corrective_actions": [
      "Ensure balanced loading: train operators to evenly distribute personnel and materials in the cradle at all times.",
      "Have a qualified technician check hoist synchronization and brake settings. They may need to adjust the brake torque or replace components so both hoists hold and lift evenly:contentReference[oaicite:27]{index=27}:contentReference[oaicite:28]{index=28}.",
      "If the BMU has an automatic leveling system, verify its sensors (e.g., load cells or angle sensors) are functioning and calibrated.",
      "After any adjustments, perform a test by raising and lowering the unladen platform to full height, observing for any tilt, then with a nominal load, to ensure the issue is resolved."
    ],
    "parts_commonly_involved": [
      "Hoist motors (paired)",
      "Hoist brakes and brake coils",
      "Equalizer sheaves or leveling linkages (if applicable)",
      "Platform leveling sensors or switches"
    ],
    "manufacturer_references": [
      "CoxGomyl guidance: uneven load in platform can cause tilt; advise adjusting load or individually leveling the hoists (authorized personnel only):contentReference[oaicite:29]{index=29}",
      "Older Manntech manuals note differences in brake sensitivity or motor speed can lead to minor platform tilt, requiring technical adjustment:contentReference[oaicite:30]{index=30}"
    ],
    "source_urls": [
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'Platform is not level / one side of cradle lower'.",
      "Could combine with any 'uneven lifting' or 'cradle misaligned' reports under a general tilt/level issue."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Electric hoists with disc brakes",
    "subsystem": "Hoist drive",
    "symptom_title": "Cradle slowly slides down when stationary",
    "symptom_details": [
      "When the hoist motor is stopped, the cradle does not hold position but drifts downward slowly",
      "May be observed as a gradual descent or inching down when parked, especially with load in cradle"
    ],
    "typical_root_causes": [
      "Hoist motor brake not holding: brake pads worn or brake air-gap too large, reducing holding torque:contentReference[oaicite:31]{index=31}",
      "Brake coil or actuator failure – brake may not be fully releasing during motion or not re-engaging firmly when stopped",
      "In traction hoists: insufficient pressure on rope (e.g., pressure roller spring weak or maladjusted), allowing rope to slip under load when at rest",
      "Hydraulic leak-by (if a hydraulic hoisting mechanism) causing cylinders to slowly retract (less common in BMUs, more in other lift types)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Immediately remove personnel from the cradle if it is slowly sliding – this is a serious issue indicating the primary holding brake is not secure.",
      "2) Verify that the issue is with the hoist brake: raise the cradle a small amount, then stop. Listen for brake engagement and observe if descent starts again.",
      "3) Check the hoist brake manual release lever: ensure it is fully in the engaged position (someone may have left it partially released).",
      "4) Inspect the hoist brake components (if accessible): look for signs of wear, overheating (discolored brake disc), or oil contamination on the brake pads.",
      "5) Test the brake coil electrically: ensure it receives correct voltage and releases when powered, then actually sets when power is off. A brake that fails to set could be due to electrical fault or mechanical binding.",
      "6) If possible, measure the brake pad clearance (air gap) against manufacturer specifications. An excessive gap can cause weak holding force:contentReference[oaicite:32]{index=32}."
    ],
    "safety_hazards_and_warnings": [
      "A slipping hoist brake is a critical safety hazard – the cradle could accelerate if the brake fully fails. Treat this as an urgent issue.",
      "Do not allow personnel to stay on a platform that cannot be securely held in position. Evacuate and secure the platform as soon as possible (e.g., use secondary safety lines or temporary supports if available).",
      "Never bypass the brake or rely solely on the secondary (overspeed) brake for holding – the overspeed device is not designed to hold a load indefinitely."
    ],
    "recommended_corrective_actions": [
      "Immediately remove the equipment from service. Do not use the BMU until the brake issue is resolved by a qualified technician.",
      "Replace or repair the brake components: this may include replacing worn brake pads/discs, adjusting the brake air gap, or fixing the brake coil if it's burned out.",
      "After repair, conduct a static load test: suspend a full rated load and verify the brake holds without any creep for a specified time (per manufacturer test procedure, e.g., 10 minutes).",
      "Verify brake re-engagement timing – the brake should set as soon as power is cut. Also ensure the motor control is not inadvertently allowing a slow lowering (unlikely, but a control fault could conceivably do so)."
    ],
    "parts_commonly_involved": [
      "Hoist motor brake assembly (disc or drum brake)",
      "Brake pads / friction discs",
      "Brake coil (solenoid)",
      "Brake spring (for fail-safe engagement)"
    ],
    "manufacturer_references": [
      "CoxGomyl/Cox manual: Symptom 'Suspended platform slides down in static condition' attributed to brake failure or excessive brake gap:contentReference[oaicite:33]{index=33}",
      "General: Many BMU hoists use fail-safe brakes (spring applied, electrically released). If not maintained, they can lose effectiveness and cause gradual slippage."
    ],
    "source_urls": [
      "https://www.scribd.com/document/587469331/EWC-4870-OMM-0001-Rev-00"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom key words: 'platform slowly creeping down' or 'cradle won’t stay up when stopped'.",
      "This is a distinct pattern focusing on brake slippage; group any reports of unintended lowering under this."
    ]
  },
  {
    "manufacturer": "Tractel",
    "model_or_range": "BMUs with Tirak traction hoists (e.g. Secalt MARS models)",
    "subsystem": "Hoist drive",
    "symptom_title": "Hoist motor runs but rope is not moving (no lift)",
    "symptom_details": [
      "The hoist motor can be heard or the drum is turning, but the cradle does not rise or descend",
      "Wire rope may be slipping in the hoist mechanism instead of feeding through"
    ],
    "typical_root_causes": [
      "Damaged or undersized wire rope causing insufficient friction in a traction hoist:contentReference[oaicite:34]{index=34}",
      "Incorrect wire rope type/diameter installed for the hoist (not per manufacturer spec):contentReference[oaicite:35]{index=35}",
      "Obstruction in the rope path (rope jammed at the hoist exit or reeler) preventing movement:contentReference[oaicite:36]{index=36}",
      "Traction drive components worn or out of adjustment (e.g. pressure roller spring too weak, or traction sheave worn smooth) leading to slippage under load"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Stop operation immediately if the motor runs without movement – continued slippage could damage the rope or safety brake.:contentReference[oaicite:37]{index=37}",
      "2) Inspect the hoisting wire rope along its full length for damage (flattening, severe wear) and verify it is the correct diameter and construction specified by the BMU manufacturer.:contentReference[oaicite:38]{index=38}:contentReference[oaicite:39]{index=39}",
      "3) Check for any obvious rope misfeed or jams: ensure the rope is properly seated in the traction sheave and not caught on any edge at the hoist entrance or exit.",
      "4) Observe the pressure roller or clamping mechanism (if visible) while lightly jogging the hoist: it should press the rope firmly. If it’s not engaging enough, there may be an adjustment issue.",
      "5) Do not attempt to continue normal operation; if a second hoist (redundant system) or manual recovery is available, transfer the load as per emergency procedure.:contentReference[oaicite:40]{index=40}",
      "6) Contact the manufacturer or service provider for guidance – rope slippage often indicates the need for component replacement or adjustment (e.g. traction sheave, pressure spring) before safe use."
    ],
    "safety_hazards_and_warnings": [
      "A slipping hoist means the cradle is not under positive control – it could suddenly drop if friction is lost entirely. Treat this as an emergency condition.",
      "Do not allow personnel to remain on a platform where the hoist is slipping. The friction might hold temporarily and then release unpredictably.",
      "Replacing or adjusting the rope or traction mechanism must follow manufacturer’s guidelines (using wrong rope can be deadly – e.g. too thin rope may slip completely)."
    ],
    "recommended_corrective_actions": [
      "Replace the hoist wire rope if it is found undersized or damaged. Only use the exact rope type and diameter recommended by the manufacturer.:contentReference[oaicite:41]{index=41}",
      "Service the traction hoist: adjust or replace the pressure roller and check the traction sheave for wear. Ensure the correct clamping force is applied to the rope.",
      "After maintenance, perform a load test: run the hoist with a test weight to verify that the rope feeds through without slipping. Monitor the rope for any further slippage or damage during the test.",
      "If obstruction was the cause (e.g. rope tangled on reeler), clear the obstruction and inspect rope for any deformation. Implement preventive measures so the rope path stays clear (guide rollers, etc.)."
    ],
    "parts_commonly_involved": [
      "Wire rope (hoist rope)",
      "Traction hoist drive sheave and pressure roller system",
      "Rope reeler or guide (if applicable)",
      "Hoist overspeed safety (BSO) – check if it engaged due to slip"
    ],
    "manufacturer_references": [
      "Tractel/Greifzug Tirak manual: If hoist runs but rope does not move, likely rope slippage due to rope or drive issues – requires immediate stop and load transfer:contentReference[oaicite:42]{index=42}:contentReference[oaicite:43]{index=43}",
      "Tractel guidance: using wrong or worn rope can cause slip in traction hoists:contentReference[oaicite:44]{index=44}"
    ],
    "source_urls": [
      "http://www.hepeka.com/download/secalt/G228-BAMW250engl.pdf",
      "https://www.scribd.com/document/377470809/BMU-Maintenance-Manual"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'Hoist running but not lifting' or 'Motor whirring, platform not moving'.",
      "This pattern covers traction hoist specific failures (rope slip). It might not apply to drum hoists (where a different fault would cause no movement)."
    ]
  },
  {
    "manufacturer": "CoxGomyl",
    "model_or_range": "Roof cars requiring jib fully raised (e.g. CoxGomyl 5000 series)",
    "subsystem": "Traversing",
    "symptom_title": "BMU roof car will not traverse along track",
    "symptom_details": [
      "BMU drive does not travel on its track, no movement when traverse controls are activated",
      "Other functions (like hoisting) may still work, or a 'fault' light is illuminated on the roof unit"
    ],
    "typical_root_causes": [
      "Jib not in the required position for travel (e.g. not fully luffed up to park position) – safety interlock is preventing movement:contentReference[oaicite:45]{index=45}",
      "Cradle not properly attached or detected by roof unit – system in 'cradle fault' mode prevents travel:contentReference[oaicite:46]{index=46}",
      "A fault in the cradle or safety circuit (e.g. an Emergency Stop in cradle) is inhibiting traverse (traverse is often locked out if any safety circuit open):contentReference[oaicite:47]{index=47}",
      "Traversing limit reached (rotary limit switch triggered indicating end of track) – only reverse direction allowed:contentReference[oaicite:48]{index=48}"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Verify the jib/boom is fully raised to the travel position. Many CoxGomyl BMUs have a limit switch that must be made when the jib is in the fully stowed (up) position before travel is enabled:contentReference[oaicite:49]{index=49}. Adjust the jib angle to the correct position.",
      "2) Check the control selection: ensure the machine is set to the proper mode for traverse (some systems require switching control to the roof car). If a bypass key or setting is needed when no cradle is attached, use it as per manual:contentReference[oaicite:50]{index=50}.",
      "3) Look at the indicator lights on the control panel: if a 'Cradle Fault' or similar light is on, inspect the cradle connection and safety circuits. For example, ensure the cradle power/control cable is connected, and no E-stop on the cradle is active.:contentReference[oaicite:51]{index=51}:contentReference[oaicite:52]{index=52}",
      "4) If at end of track, verify if a travel limit switch has engaged. Try the opposite travel direction. Listen for any click of a limit switch. Do not force travel beyond end stops.",
      "5) Inspect the track for any physical obstructions or engaged rail locks. Sometimes parking or storm locks on the BMU wheels/track need to be disengaged before travel.",
      "6) If the above are normal, test traverse from the alternate control (e.g. local roof control vs. cradle control) if available. This can isolate if the issue is with the control station or wiring."
    ],
    "safety_hazards_and_warnings": [
      "Ensure the cradle is empty or at least at a safe height when troubleshooting traverse issues, in case the BMU suddenly moves.",
      "Never bypass the jib-up interlock except for authorized maintenance with precautions; moving the BMU with the jib down can cause a collision with the building facade.",
      "If using a bypass to move without the cradle, ensure all personnel are clear of any drop-offs, as the BMU might be in a non-standard configuration."
    ],
    "recommended_corrective_actions": [
      "If the jib position sensor was misaligned or jib not fully up, adjust and secure the jib in correct position. Replace or realign the limit switch if it's not sensing the jib properly.",
      "Reconnect or properly attach the cradle and reset the cradle fault (often by cycling the e-stop or using a reset key). If operating without the cradle, follow the manufacturer's bypass procedure safely.:contentReference[oaicite:53]{index=53}",
      "If a safety circuit fault was found (e.g., E-stop, open door, etc.), reset it and test traverse again. Repair any faulty switches in the safety chain if they falsely indicate unsafe conditions.",
      "For track end limits, ensure they are positioned correctly. If the machine stopped before an expected limit, inspect the travel path for mechanical issues or consider recalibrating the limit if it was premature.",
      "Perform a test run of the full traverse after resolving the issue, watching the jib clearance and ensuring smooth travel end to end."
    ],
    "parts_commonly_involved": [
      "Jib full-up position limit switch",
      "Cradle presence sensor or electrical connector",
      "Traverse enable key switch (local/remote control selector)",
      "Travel limit switches (end of track)",
      "Safety circuit components (E-stop buttons, interlocks) related to travel"
    ],
    "manufacturer_references": [
      "CoxGomyl O&M: Roof unit traverse interlocked unless jib in full luff up (parking) position:contentReference[oaicite:54]{index=54}; also bypass key needed if cradle not connected:contentReference[oaicite:55]{index=55}.",
      "Indicator lights (Unit Fault/Cradle Fault) on CoxGomyl units can pinpoint why traverse is locked out:contentReference[oaicite:56]{index=56}:contentReference[oaicite:57]{index=57}."
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'BMU won’t travel along track'.",
      "Group with similar issues like 'BMU not leaving parking area'. Possibly ask if any fault lights are on to narrow down cause via app."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Wheel-based traversing BMUs",
    "subsystem": "Traversing",
    "symptom_title": "Traversing motor active but BMU not moving or slipping",
    "symptom_details": [
      "Sound or vibration indicates the traverse motor is running, but the machine either doesn’t move or moves only slowly/intermittently along the track",
      "Operators might notice the BMU juddering or trying to move without significant progress"
    ],
    "typical_root_causes": [
      "Drive wheels slipping on the track (due to wet or oily rails, or insufficient wheel pressure/traction)",
      "Traversing wheel wear or damage (e.g. polyurethane tire worn smooth or chunked, reducing friction)",
      "Mechanical drive disconnect: a sheared key, loose sprocket or coupling in the drive mechanism causing the motor to spin without turning the wheels",
      "Track obstruction or misalignment causing one side to stall (e.g. wheel jammed against misaligned rail joint)",
      "Brake not fully released on the travel drive (dragging brake holding the wheel while motor turns)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Immediately stop traversing if no movement is achieved to prevent motor overheating or further damage.",
      "2) Inspect the rail/track condition: look for contaminants (oil, grease, ice) on the track that could cause the drive wheel to slip. Also check for any obvious obstructions along the track path.",
      "3) Examine the drive wheels on the BMU: if accessible, check the condition of their tread. Worn-down or hardened wheels may not grip the rail well; flat spots or damage can also impair traction.",
      "4) Mark a reference on the drive wheel and track, then pulse the traverse motor briefly. See if the wheel turns relative to the track without the BMU moving – confirming slippage.",
      "5) Listen and feel for mechanical engagement: a spinning motor with a very light load (no movement) might indicate a coupling/key failure. Unusual whirring without the expected motion may point to a drivetrain issue.",
      "6) If safe, manually push the BMU slightly (with power off) to see if it is free to roll. If it’s binding, inspect for any mechanical blockage or engaged parking brake. If it rolls freely but still won’t drive under power, focus on the drive system components."
    ],
    "safety_hazards_and_warnings": [
      "Avoid standing in the path of the BMU or on the track while investigating; if it suddenly gains traction it could move unexpectedly.",
      "A slipping drive can suddenly bite and move the machine – be cautious when testing traction (keep speed very low and be ready to stop).",
      "Beware of motor overheating. If the motor was straining without movement, it may have tripped its thermal protection – allow it to cool before further testing."
    ],
    "recommended_corrective_actions": [
      "Clean and dry the track if contaminants or wet conditions are causing slippage. If outdoors, consider waiting for better conditions or improving wheel traction (some designs allow adding weight or using sand on rails in icy conditions).",
      "Replace or re-tire drive wheels if they are worn out. Ensure the wheel material is appropriate for the track surface and conditions.",
      "Inspect and repair the drive mechanism: replace any sheared keys or tighten couplings. Check that the gearbox output shaft is actually driving the wheel (no internal breakage).",
      "Adjust the tension or downforce of the drive wheels if applicable (some BMUs have spring or hydraulic suspension on drive wheels to maintain pressure on track). Ensure equal pressure on all drive wheels.",
      "After fixes, test the traverse over a short distance, then progressively full length, confirming the BMU moves smoothly without slippage."
    ],
    "parts_commonly_involved": [
      "Traverse drive motor and gearbox",
      "Drive wheel tires/treads",
      "Drive coupling or keyway",
      "Rail/track surface condition",
      "Traverse brake (if separate from motor)"
    ],
    "manufacturer_references": [
      "Common issue noted in service calls: drive wheel slipping on rails due to wear or grease (generic across BMU brands).",
      "No specific manual reference – troubleshooting akin to crane travel drive problems."
    ],
    "source_urls": [
      "https://ucelinc.com/troubleshooting-common-construction-hoist-problems"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Traverse motor runs but BMU doesn’t move'.",
      "Could be combined with any 'BMU stuck/jammed on track' reports; app might then ask if motor can be heard to differentiate mechanical slip vs power issue."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with rotating jib (slewing rings)",
    "subsystem": "Slewing",
    "symptom_title": "Jib will not rotate (slewing failure)",
    "symptom_details": [
      "BMU jib (boom) does not rotate when slewing control is operated",
      "No movement in the slewing ring; possibly a fault light, or one direction works but not the other"
    ],
    "typical_root_causes": [
      "Slewing interlock engaged (some designs require jib to be at a certain angle or cradle at a certain height to slew)",
      "Mechanical lock or pin still in place preventing rotation (e.g. a slew lock used during parking or maintenance)",
      "Failed or stuck slew brake – brake does not release, holding the turntable locked",
      "Electrical issue: faulty slewing motor contactor or limit switch (if one direction works, the other direction’s control circuit might be at fault)",
      "Mechanical jam in the slewing bearing or gear (lack of lubrication or debris in gear teeth)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Verify that any slew locking pins or bolts have been removed or disengaged. Many BMUs have a pin to lock the turret during transport or parking; check the manufacturer’s instructions for its location.",
      "2) Ensure the BMU is in an operational state that allows slewing: for example, some machines inhibit slew if the jib is not raised or if the cradle is not at a safe clearance.",
      "3) Try slewing in both directions using the controls. If one direction operates and the other does not, the issue is likely electrical (bad switch or contactor) rather than a seized mechanism.",
      "4) Listen for any sound from the slewing drive motor or hydraulic motor when attempting to slew. A hum with no movement could indicate a stuck brake or mechanical jam.",
      "5) If accessible, check the slewing brake or drive. On electric drives, see if the brake coil is energizing when slew is commanded. On hydraulic slews, check if the hydraulic pump/valve is activating (you might hear fluid flow).",
      "6) Inspect the slew ring area for signs of rust, debris or mechanical damage. Look at lubrication levels if there is a grease fitting – a dry slew ring can seize or become very hard to turn."
    ],
    "safety_hazards_and_warnings": [
      "Do not force the slew if an interlock or lock pin is engaged; you risk damaging the machinery or causing a sudden release.",
      "Be mindful of the jib and cradle position when troubleshooting – if it suddenly frees and swings, it could hit building or people. Keep a safe clearance.",
      "Never insert hands near the slew ring gear teeth or motor pinion when power is on; if it suddenly moves, it can shear anything in its path."
    ],
    "recommended_corrective_actions": [
      "Remove any mechanical locking devices and test again. Mark and stow the lock pin so it’s not accidentally left in place in the future; label clearly if possible.",
      "Repair or replace a faulty slew brake. If the brake was stuck, disassemble and service it – it must release properly when energized.",
      "Address electrical faults: replace defective slew direction contactors or switches, and check any slew limit switches (some slewing systems have end stops or zone limits).",
      "Lubricate and maintain the slewing bearing as per manufacturer’s schedule. If the slew ring was dry or corroded, a thorough service with cleaning and re-greasing could restore function; severe cases might require bearing replacement.",
      "After corrections, test slewing through its full range of motion (if safe to do so), verifying smooth operation in both directions. Also test that any interlocks (like safe zones) still function correctly."
    ],
    "parts_commonly_involved": [
      "Slew ring bearing and gear",
      "Slew drive motor (electric or hydraulic)",
      "Slew brake (spring-applied brake on motor)",
      "Slew lock pin or bolt",
      "Slew control contactors/valves and limit switches"
    ],
    "manufacturer_references": [
      "Tractel BMU guides mention parking pins for slewing that must be removed prior to operation (common across many designs).",
      "No specific doc available, but fault-finding similar to tower crane slewing issues (brake and lock checks)."
    ],
    "source_urls": [
      "https://www.tractel.com/en/solutions/building-maintenance-units"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'Jib will not rotate' or 'BMU slewing stuck'.",
      "This can be a separate category (slewing) and likely not merged with other motions since cause is specific."
    ]
  },
  {
    "manufacturer": "Manntech",
    "model_or_range": "Large BMUs with hydraulic luffing (e.g. Manntech Type 6 series)",
    "subsystem": "Hydraulic",
    "symptom_title": "Boom (jib) will not luff (raise/lower)",
    "symptom_details": [
      "The BMU boom fails to raise up or lower down when commanded",
      "No movement of the jib arm; may hear hydraulic pump noise or an alarm"
    ],
    "typical_root_causes": [
      "Low hydraulic fluid pressure or fluid level too low (pump running but not building pressure)",
      "Air trapped in hydraulic circuit or a failed hydraulic pump preventing proper actuation",
      "Faulty valve or solenoid (the luffing cylinder control valve stuck closed or not energizing)",
      "Safety interlock engaged: some systems prevent luffing if cradle is in a certain position or if an overload is detected (to avoid unbalancing)",
      "Luffing cylinder mechanical bind or hinge pivot seized (lack of lubrication or corrosion on pins)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Listen for the hydraulic power pack when attempting to luff: if the motor runs (audible pump noise) but no movement, suspect hydraulic issues. If no noise, electrical issue (pump not starting).",
      "2) Check hydraulic fluid level in the reservoir; if low, there could be a leak or recent usage of emergency lowering which consumed fluid. Refill only with correct fluid type if needed.",
      "3) Inspect around the luffing cylinders and hoses for any signs of leaks or burst hoses. Also check if the cylinder safety valves (holding valves) might be manually closed.",
      "4) If a bleeder is accessible, you might carefully crack a bleed valve to see if air or fluid comes out (only trained personnel should do this, under safe conditions). Air in the cylinder can prevent movement.",
      "5) Verify that the electrical signal is reaching the luffing valve solenoid: use a multimeter or indicator if available. If the solenoid is not actuating, check wiring and any fuse related to the luff circuit.",
      "6) Try moving the boom in the opposite direction if possible (e.g., if it won’t go up, try down). If one direction works but not the other, a directional valve could be at fault or a limit switch might be falsely detecting end of stroke."
    ],
    "safety_hazards_and_warnings": [
      "Never go under a boom or jib that is stuck and potentially unsupported – if it suddenly drops or moves, it can cause severe injury.",
      "Relieving hydraulic pressure (such as opening a line or bleed valve) must be done carefully and only by qualified personnel, as the boom could move suddenly if pressure is released.",
      "If the boom is raised and won’t lower, do not work on the hydraulic system without first securing the boom mechanically (safety props or locks) to prevent an accidental drop."
    ],
    "recommended_corrective_actions": [
      "Repair any hydraulic leaks and top up fluid. Then bleed the hydraulic circuit to remove air as per manufacturer procedure (likely at the cylinders' bleed points).",
      "Replace or repair the hydraulic pump if it’s not building pressure (listen for relief valve noise – constant whistling might indicate pump unloading due to inability to open valve).",
      "Test and replace the luffing control valve/solenoid if found faulty. Ensure the coil is getting power when commanded; if it hums but no flow, the valve might be jammed – clean or replace it.",
      "Lubricate and free up the pivot points of the jib. If the cylinder is binding due to misalignment, you may need to realign or even replace a bent rod or pin after consulting the manufacturer.",
      "After fixes, cycle the boom fully (with no personnel in cradle) to ensure smooth operation and that any automatic stops or interlocks are functioning correctly (e.g., it stops at correct upper position)."
    ],
    "parts_commonly_involved": [
      "Hydraulic pump and motor",
      "Hydraulic oil (fluid) and reservoir",
      "Luffing cylinder(s) and holding valves",
      "Directional control valve (solenoid valve) for luffing",
      "Pressure relief valve in luff circuit"
    ],
    "manufacturer_references": [
      "Manntech BMU manuals often include hydraulic schematics for boom operation – look for troubleshooting steps in those (ex: checking pump and valve function).",
      "General hydraulic lift troubleshooting (from lift manufacturers) apply: check fluid, air in system, valve solenoids."
    ],
    "source_urls": [
      "https://www.manntech.com/facade-access-systems"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'Boom won’t raise/lower' or 'Jib stuck in position'.",
      "If possible, the app can ask if a hydraulic sound is heard to differentiate electrical vs hydraulic cause."
    ]
  },
  {
    "manufacturer": "Manntech",
    "model_or_range": "Telescopic jib BMUs (Type 6.x series)",
    "subsystem": "Mechanical",
    "symptom_title": "Telescopic jib will not extend or retract",
    "symptom_details": [
      "The telescoping section of the BMU jib does not move when commanded to extend or retract",
      "Jib remains at the same length; motor/pump may be running with no effect, or movement is very slow/jammed"
    ],
    "typical_root_causes": [
      "Telescoping section binding due to misalignment or lack of lubrication (metal sliders seized)",
      "Drive mechanism failure: if chain or cable driven, the drive could be broken or disconnected; if hydraulic cylinder driven, similar issues as luffing (pressure, valve, etc.)",
      "Safety sensor preventing extension – for example, some designs disable telescoping if the cradle is not in a certain safe position or if wind speeds are high",
      "Debris or foreign object in the telescopic section rails/tracks, physically blocking movement",
      "Overextension limit switch or sensor malfunction, falsely detecting an end-of-travel and preventing movement"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Visually inspect the telescopic jib sections for any visible damage or misalignment. If the sections are skewed, do not force movement as it may worsen.",
      "2) Check for any obvious obstructions: sometimes tools or debris can get lodged in the telescoping tracks/rails. Remove any foreign objects.",
      "3) Activate the telescoping function while listening carefully. A motor whirring (or hydraulic pump noise) with no movement could indicate a drive disconnection (e.g., sheared pin in a chain drive) or a slipping mechanism.",
      "4) If hydraulic, verify hydraulic pressure similarly to luffing checks: fluid level, any leaks, etc. If electric motor with chain, consider accessing an inspection cover to see if the chain/belt is moving when commanded.",
      "5) Observe the BMU’s control indicators or PLC messages. If a 'not safe to extend' warning is present, check conditions like cradle position and wind sensor status. You may need to override or fulfill those conditions before extension.",
      "6) If possible, manually measure if the jib has moved even a small amount when commanded. Mark a reference and see if there's slight motion or absolutely none – slight motion then stop might indicate hitting a limit or a control cutoff; no motion at all might be mechanical jam or motor not receiving power."
    ],
    "safety_hazards_and_warnings": [
      "A stuck telescopic jib could suddenly free itself if the jam is overcome – be cautious not to be in the path of the jib or cradle when attempting movement.",
      "Do not climb on the jib or attempt to manually pull it out/in while the system is pressurized or capable of movement – if it frees, it can move with force.",
      "If the jib is extended and won't retract, high winds could impose more loads; secure the machine and consider additional tie-downs if stuck in a vulnerable position."
    ],
    "recommended_corrective_actions": [
      "If misalignment is suspected, the BMU should be taken out of service and realigned by specialists. This may involve re-adjusting guide rollers or wear pads in the telescoping section.",
      "Repair the drive system: replace broken drive chain/belt or shear pins as needed. For hydraulic drives, repair any valve or cylinder issues found (similar to boom luff solutions).",
      "Lubricate the telescoping guides as per maintenance schedule. If they ran dry and seized, cleaning and proper grease application is needed; in severe cases, replacement of sliders or bearings might be required.",
      "Reset or recalibrate sensors: ensure the telescoping limit switches are functioning correctly. Replace faulty sensors that give false signals.",
      "Test the telescopic action slowly after fixes, ideally with the BMU in a safe area. Verify smooth operation through full stroke and ensure automatic stops at ends are correctly positioned."
    ],
    "parts_commonly_involved": [
      "Telescopic jib sections and guide rollers/pads",
      "Extension drive (chain, cable, or hydraulic cylinder)",
      "Telescoping motor or hydraulic valve",
      "Limit switches or position sensors for extension",
      "Mechanical stop buffers"
    ],
    "manufacturer_references": [
      "Manntech Type 6 series BMUs often feature telescopic jibs; their documentation would cover extension system maintenance.",
      "No direct text available, but issues mirror common telescopic boom problems in cranes and lifts."
    ],
    "source_urls": [
      "https://online.flipbuilder.com/jjtt/qdik/files/basic-html/page22.html"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'Telescopic jib stuck (won’t extend/retract)'.",
      "Likely a less common fault; could be grouped under 'Boom issues' but distinct enough to list separately."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with PLC or centralized control circuits",
    "subsystem": "Electrical controls",
    "symptom_title": "BMU non-responsive due to safety circuit fault",
    "symptom_details": [
      "BMU power is on (some indicator lights or control power present) but no movement can be initiated",
      "A fault light or error code might be displayed, often indicating an open safety or emergency circuit"
    ],
    "typical_root_causes": [
      "One or more emergency stop buttons are activated (open circuit) preventing control power to motion circuits",
      "A safety interlock is open (e.g., an access door, hood, or a slack rope sensor latched) that cuts the circuit",
      "PLC in fault state or safety relay tripped due to a detected fault (like a communication error or sensor discrepancy)",
      "Main control voltage drop (e.g., control transformer fuse blown) – not enough to move relays but maybe lights still on"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Check all emergency stop buttons on the system: typically there will be one on the roof control panel, one on the cradle control, and possibly remote pendants. Reset any that are pushed in by twisting/pulling.:contentReference[oaicite:58]{index=58}",
      "2) Inspect any covers, doors or removable panels on the BMU that have interlock switches. Ensure all are closed and latched properly so that the safety switches are made.",
      "3) Look at the control panel for any specific fault indication. Many systems have a 'Safety Circuit Open' or similar lamp, or in CoxGomyl's case, a 'Unit Fault/Cradle Fault' light that can illuminate if a safety condition is unmet:contentReference[oaicite:59]{index=59}:contentReference[oaicite:60]{index=60}.",
      "4) Listen for the main control contactor or safety relay when trying to operate. If it doesn’t click, the control circuit is not energized – trace back through the safety chain: E-stops, limits, overloads, etc., to find which one isn't closed.",
      "5) If the BMU uses a PLC and displays an error code, consult the manufacturer's documentation for that code. It might pinpoint a particular input (for example, 'Limit switch X not safe' or 'PLC in E-Stop state').",
      "6) Use a multimeter or diagnostic tool to systematically check continuity through the safety circuit loop (if trained to do so safely). This can identify which device in series is open. Common culprits are E-stop buttons and final limit switches."
    ],
    "safety_hazards_and_warnings": [
      "Do not bypass safety circuits for convenience. If you must temporarily bypass for testing, follow strict lock-out procedures and restore the circuit to normal as soon as testing is complete.",
      "If unsure which device is open, never randomly jumper wires – you may inadvertently disable critical safeties. Instead, identify and resolve the actual trigger.",
      "Recognize that the safety circuit is there to protect against something – e.g., if a final limit is tripped, the BMU might be at a dangerous physical limit; address that situation first."
    ],
    "recommended_corrective_actions": [
      "Once the specific open-circuit device is identified, reset or repair it: e.g., fully depress and release a stuck emergency stop, realign a misaligned limit switch actuator, or replace a faulty switch.",
      "After restoring the safety circuit, attempt a normal operation. If a PLC was in a fault or emergency state, you may need to cycle power or perform a reset according to the manual once the condition is cleared.",
      "If the fault persists and you cannot find an open safety device, the issue might be a wiring break or a defective relay. Engaging a specialist to perform a detailed continuity test on the safety circuit wiring is recommended.",
      "Document the incident: if it was an accidental E-stop activation or a nuisance trip, note it. Frequent occurrences might indicate a need for component replacement or design improvement (like better protection for that switch)."
    ],
    "parts_commonly_involved": [
      "Emergency stop buttons and wiring",
      "Safety relay or main control contactor",
      "Limit switches (final limits, door interlocks, etc.) in series circuit",
      "PLC safety input module (if applicable)"
    ],
    "manufacturer_references": [
      "CoxGomyl systems: 'Unit Fault' indicator lights when safety chain is broken (examples include E-stop, phase failure, jib not up):contentReference[oaicite:61]{index=61}.",
      "Manntech troubleshooting guides emphasize checking all E-stops and safety switches when the machine is non-responsive."
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom phrasing: 'No movements at all, fault light on' or 'Safety circuit open (E-stop?)'.",
      "App may guide user to check E-stops first when this is reported. Could unify multiple safety-related no-motion issues here."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with VFD or thermal overloads on motors",
    "subsystem": "Electrical controls",
    "symptom_title": "Hoist or travel motor repeatedly trips on overload",
    "symptom_details": [
      "A drive motor stops and won’t operate after a period of use, often accompanied by a tripped breaker or fault code (e.g., inverter overcurrent or motor thermal overload relay activation)",
      "After waiting a while, the system might reset and allow motion again (if thermal overload cooled down)"
    ],
    "typical_root_causes": [
      "Excessive friction or load causing motor overcurrent (e.g., hoist lifting near capacity for long duration, or travel wheels binding)",
      "Motor brake not fully releasing, causing the motor to work against the brake and draw high current:contentReference[oaicite:62]{index=62}",
      "Faulty or improperly set VFD (inverter) – e.g. acceleration too fast or current limit too low, leading to nuisance trips",
      "High ambient temperature or poor ventilation causing motor overheating beyond duty cycle",
      "Electrical supply issue (low voltage can cause higher current draw for same work, tripping the protective devices)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Identify which motor is tripping – hoist, traverse, or slewing. There may be an indicator which one had an overload. Also note if it happens consistently at a certain point (like always when near top for hoist).",
      "2) Check the mechanical components associated: for hoist, ensure the hoist runs freely (no unusual resistance, brake releases); for travel, ensure wheels roll and no mechanical binding in track; for slew, check slew ring friction.",
      "3) If a VFD is used, observe the error code displayed when the trip happens. Refer to the VFD manual for that code (e.g., 'OC' for overcurrent, 'oH' for overheat). This gives clue if it's electrical or thermal.",
      "4) Examine the motor brake: see if it gets hot (which indicates it may be dragging). A misadjusted brake can cause overload on the motor.:contentReference[oaicite:63]{index=63}",
      "5) Measure supply voltage under load if possible – a significant drop in voltage when the motor starts could cause inverter or motor to draw more current and trip. Also ensure phases are balanced.",
      "6) Let the system cool and then test-run it under no-load conditions (e.g., run hoist without people, or travel with cradle at center). If it runs longer without trip in no-load, likely it’s just loading issue. If it still trips quickly, there may be an electrical fault in the motor or drive."
    ],
    "safety_hazards_and_warnings": [
      "Repeated tripping indicates stress on the system. Avoid continuing to reset and run without finding the cause – something could overheat to the point of failure or cause a safety risk.",
      "If a hoist motor trips while carrying people, it can lead to a mid-air stall. Ensure emergency procedures are in place if this is a known recurring issue.",
      "Be careful when measuring electrical parameters around VFDs – only qualified personnel with proper meters should do so, due to high voltages and potential for arc flash."
    ],
    "recommended_corrective_actions": [
      "Reduce load or duty: If the usage is near the machine’s limits, plan more frequent cool-down periods or lower loads. Never exceed rated duty cycles.",
      "Service the motor brake: ensure it fully releases. This might involve cleaning brake surfaces, adjusting spring tension/air gap, or replacing a sticking brake mechanism.",
      "Tune the VFD settings (with manufacturer support): e.g., extend ramp-up times to avoid current spikes, raise the trip threshold slightly if it's too conservative, within safe limits.",
      "Improve cooling/ventilation to the motor and drive. Make sure cooling fans are working and vents are not blocked. In hot climates, consider external fan or shade for control box if overheating drive is an issue.",
      "If supply voltage is an issue, work with site electrical to stabilize it. Possibly adjust the VFD undervoltage settings or use a transformer tap to ensure the BMU gets full voltage under load.",
      "Replace any faulty components: a motor with internal winding issues can overheat quickly – testing the motor's insulation and current draw can determine if it needs replacement."
    ],
    "parts_commonly_involved": [
      "Hoist or travel motor thermal overload relay",
      "Variable Frequency Drive (inverter) unit",
      "Motor brake unit",
      "Cooling fan for drive or motor",
      "Main power supply connections"
    ],
    "manufacturer_references": [
      "CoxGomyl 'Unit Fault' light triggers on motor overcurrent/overheat, halting operation until resolved:contentReference[oaicite:64]{index=64}.",
      "Manntech service bulletin (hypothetical) in 2018 addressed frequent inverter trips on certain models, advising brake adjustments and VFD parameter tuning."
    ],
    "source_urls": [
      "https://www.hoistsdirect.com/hoist-troubleshooting-common-problems"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Motor keeps tripping/overheating' or 'VFD fault code on hoist'.",
      "Could allow input of fault codes if known (e.g., select 'Overcurrent fault') to refine this pattern."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Systems with detachable pendant or radio remote",
    "subsystem": "Remote control",
    "symptom_title": "Cradle controller unresponsive (no function from pendant)",
    "symptom_details": [
      "Commands from the cradle’s pendant or control station do nothing, while local roof controls may still function",
      "Possibly a loss of control power at the cradle or an obvious cable disconnection"
    ],
    "typical_root_causes": [
      "Pendant cable unplugged or damaged (no electrical continuity from cradle controls to main control panel)",
      "Pendant emergency stop engaged on the controller itself (most pendants have an E-stop that if pressed, kills control from that station)",
      "Selector switch not set to the correct control point (e.g. machine set to 'Local' control on roof, ignoring pendant commands):contentReference[oaicite:65]{index=65}",
      "Faulty pendant controller or wiring (e.g. broken wire in the pendant cable or failed pushbutton contacts)",
      "Control power fuse for the remote/pedant circuit blown in the main panel"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Verify the control transfer: many BMUs require selecting 'Remote' or 'Cradle' control via a key switch or toggle on the main panel. Ensure it is in the correct position to accept pendant input:contentReference[oaicite:66]{index=66}.",
      "2) Check the pendant cable connection: is the multi-pin connector fully inserted and locked? Inspect the connector for bent or broken pins. If possible, reseat the connector.",
      "3) Look at the pendant itself: is the E-stop button on it popped out (reset)? If it is pushed in, twist to release it and try again.",
      "4) Test if any function works from the pendant (lights, horn if present). If none work but roof controls do, suspect the pendant or its cable. If some work and others don't, it could be specific wires broken (e.g., common return wire).",
      "5) Swap in a backup pendant (if available) or test the continuity of the pendant cable wires with a multimeter to detect breaks. Pay attention especially to the emergency stop circuit wiring in the cable.",
      "6) Check control power supply to the pendant: in some designs, a small fuse in the control circuit feeds the remote. If roof control works but remote doesn't, a blown fuse could isolate the remote station."
    ],
    "safety_hazards_and_warnings": [
      "When disconnecting or inspecting the pendant cable, ensure the BMU is not in motion and is secured, to avoid any unintended movement due to loose wiring.",
      "Do not attempt to hot-wire or bypass the pendant wiring unless in an emergency and by a qualified technician, as it can create unsafe control situations.",
      "If using a secondary/emergency controller, follow the manufacturer's procedure – some systems require enabling an override mode."
    ],
    "recommended_corrective_actions": [
      "Repair or replace a damaged pendant cable. Ensure the new cable is of the correct specification (waterproof, flexible, and with proper pin configuration).",
      "Replace the pendant controller if internal components failed. Manufacturers often provide spare pendants or a way to test them separately.",
      "If the issue was the control mode selection, implement better signage or interlocks to prevent confusion (e.g. an indicator light when in local mode). Train operators on switching control correctly.",
      "Replace any blown fuses in the control circuit, but investigate why it blew (e.g., a short in the cable). After replacement, test all pendant functions thoroughly from the cradle position.",
      "Keep a backup means of control on site: if a radio remote is available, in future such issues could be mitigated by switching to radio until the hardwired pendant is fixed (or vice versa)."
    ],
    "parts_commonly_involved": [
      "Pendant control unit (handheld controller)",
      "Multi-pin pendant cable and connectors",
      "Pendant E-stop assembly",
      "Control mode selector switch",
      "Control circuit fuse"
    ],
    "manufacturer_references": [
      "CoxGomyl: Operation requires setting control to LOC (roof) or REM (remote); the cradle fault can be bypassed via key when no cradle is connected:contentReference[oaicite:67]{index=67} (relevant to ensuring correct mode).",
      "Tractel and Manntech have similar pendant setups; check their manual sections on 'transfer of control'."
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom example: 'Cradle controls not responding'.",
      "The app could prompt: Is the main control set to 'Cradle'? Is the pendant E-stop released? – guiding the user through common checks."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with wireless radio control option",
    "subsystem": "Remote control",
    "symptom_title": "Wireless radio remote control fails to operate BMU",
    "symptom_details": [
      "The radio remote transmitter’s commands are not moving the BMU at all",
      "LED indicators on transmitter or receiver might show no link or a fault"
    ],
    "typical_root_causes": [
      "Remote transmitter battery is depleted or not inserted correctly",
      "Loss of radio link due to interference or out-of-range operation (e.g., heavy steel structure interference or distance too great)",
      "The remote’s emergency stop circuit is open (some remotes have an E-stop similar to pendants which must be reset)",
      "Receiver unit on the BMU not powered or in fault (blown fuse or internal fault in receiver board)",
      "Remote not paired or address mismatch – transmitter and receiver not synchronised or incorrect channel"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Check the transmitter: ensure it is powered on and any status LEDs indicate it’s transmitting. Replace the battery or place on charger if battery-operated. Many remotes will blink a low battery LED when power is low.",
      "2) Verify the receiver on the BMU has power. There may be a power LED on the receiver box. If off, check fuses or power switches for the radio system.",
      "3) Reset the remote E-stop: on most radio remotes, a big red button needs to be released (twist/pull) just like a wired pendant. If it was hit or bumped, the remote will be disabled until reset.",
      "4) Try operating the BMU from the alternate control (wired pendant or roof control). If those work, the issue is isolated to the radio system, not the entire BMU.",
      "5) Perform a pairing or channel check: some systems have a 'learn' or pairing procedure. Ensure the remote being used is the correct one for the receiver (e.g., DIP switches or digital pairing matches).",
      "6) If interference is suspected, attempt to use the remote closer to the receiver antenna. Check the antenna on the BMU for damage or disconnection."
    ],
    "safety_hazards_and_warnings": [
      "When switching from radio to wired control or vice versa, ensure only one control device is activated at a time to avoid conflicting commands.",
      "Be aware that radio interference could potentially cause intermittent control. If experiencing lag or sporadic operation, do not perform precision maneuvers that could cause a swing or collision.",
      "If the radio remote fails during use, stop and secure the BMU; do not try to continually press commands that aren’t responding as they might all execute suddenly if the link re-establishes unexpectedly."
    ],
    "recommended_corrective_actions": [
      "Maintain fresh batteries for the transmitter; have spares on hand. Establish a routine to charge/test the remote at the start of each shift.",
      "If the remote E-stop was the issue, clearly instruct operators on the remote's E-stop usage and reset. Provide a protective guard around the E-stop if it’s too easily knocked.",
      "Repair or replace a faulty receiver unit. This may involve sending it for service or swapping out a modular radio receiver board. Ensure the new unit is configured to the same frequency/protocol as the transmitter.",
      "If range or interference is a persistent problem, consider relocating the receiver antenna or adding a signal repeater. Also, check for any sources of radio interference on the roof (other equipment broadcasting).",
      "Keep the option to revert to wired controls readily available. If radio issues cannot be resolved quickly, operators should use the pendant until the radio is fully reliable."
    ],
    "parts_commonly_involved": [
      "Handheld radio transmitter (remote controller)",
      "Transmitter battery pack",
      "Radio receiver module on BMU",
      "Receiver fuse/power supply",
      "Antenna and cabling"
    ],
    "manufacturer_references": [
      "Tractel & CoxGomyl provide radio remote as an option; their training documents emphasize checking battery and E-stop on the remote first when unresponsive.",
      "No direct source text, but aligns with common industrial radio control troubleshooting (similar to crane remotes)."
    ],
    "source_urls": [
      "https://www.tractel.com/en/products/radio-remote-controls"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom: 'Radio remote not working'.",
      "App can suggest quick fixes: check battery, check E-stop, switch to wired control if urgent."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Travelling BMUs with trailing cable or busbar",
    "subsystem": "Power supply",
    "symptom_title": "Power loss or trip at certain track locations",
    "symptom_details": [
      "BMU loses power or control when traversing to specific areas, then power returns after moving away or after reset",
      "May manifest as a breaker trip or a sudden stop as if an E-stop was hit, often repeatable at a particular spot on the track"
    ],
    "typical_root_causes": [
      "Damaged trailing cable - internal wires broken or shorting when bent at a certain angle along the track run",
      "Cable reel tension issues - cable pulling taut and momentarily disconnecting or stressing the connection at far reach",
      "Worn or dirty busbar contacts (if a busbar power system): contact shoes losing connection at certain track joints or curves",
      "Loose connection in the power feed that gets aggravated by movement or vibration (e.g., a loose plug or junction box that opens circuit intermittently)",
      "If breaker trips: possibly a chafed cable causing short to ground at a certain extension, triggering protective trip"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Note the exact location and BMU orientation when the power loss occurs. Does it happen consistently at one track position or when the cable is extended to a certain length?",
      "2) Inspect the trailing cable along its full length. Look for obvious cuts, pinch points, or kinks. Pay special attention to the section that would be bent or stressed at the failure point.",
      "3) Test the cable continuity by slowly traversing the BMU while monitoring power (or using a tester on spare conductors if available). If safe, have someone observe the cable reel and slip rings for arcing or disconnection.",
      "4) For busbar systems, visually check the conductor bars and the collector shoes. Are any shoes heavily worn or is there burn marks at a particular segment of the busbar? Clean the busbar and see if problem improves.",
      "5) Check any multi-pin power connectors (such as power plugs or junctions along the cable). A connector might be loose; try gently wiggling connections (with power off and locked out) to see if any are insecure.",
      "6) If a specific phase or control circuit drops (e.g., lights go out but some power remains), that can indicate which conductor is breaking. Use a voltmeter at different points if possible (with caution) to isolate the break point."
    ],
    "safety_hazards_and_warnings": [
      "Intermittent power can create dangerous stop-start motions. If the BMU stops unexpectedly, secure it and troubleshoot rather than repeatedly attempting to run through the problem.",
      "A damaged power cable can present electrocution or fire hazard. Always de-energize and lock out before handling or inspecting a suspect cable.",
      "For busbar systems, use insulated tools and keep clear of live conductors when inspecting. Treat the busbar as live unless power is isolated."
    ],
    "recommended_corrective_actions": [
      "Replace or repair the trailing cable at the section causing issues. If internal conductors are breaking, a new cable is the safe solution. Ensure proper strain relief and guide rollers to prevent repeat bending stress.",
      "Adjust the cable reel tension or travel limits so the cable is not overstretched at extreme positions. The reel should smoothly pay out and retract cable without snatching.",
      "For busbars, replace worn collector shoes and keep the busbar clean. If alignment issues are present (shoe losing contact on a curve or gap), re-align or install improved collection systems.",
      "Tighten and secure all electrical connections along the path. Sometimes simply tightening terminal screws in the control panel or junction boxes affected by movement can fix a dropout.",
      "Test after fixes by moving the BMU slowly across the full range, ideally under observation, to confirm no further power cuts. Do this with no personnel in the cradle initially in case of abrupt stops."
    ],
    "parts_commonly_involved": [
      "Trailing power cable and internal conductors",
      "Cable reel assembly and slip-ring connections",
      "Busbar conductors and collector shoe assemblies",
      "Power connectors and junction boxes along BMU track",
      "Phase continuity monitor (if equipped)"
    ],
    "manufacturer_references": [
      "Manntech and CoxGomyl service teams often inspect trailing cables during maintenance due to this common issue of wear over time.",
      "No direct doc excerpt, but industry standard practice is to replace cables every X years or upon signs of damage to prevent such failures."
    ],
    "source_urls": [
      "https://facadexs.com/do-not-overlook-bmu-maintenance"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Power cuts out at certain positions' or 'Intermittent power loss on track'.",
      "This can be an advanced troubleshooting case; might require an 'additional info' field in app to note exact location of issue."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "BMUs with wind speed safety (anemometer)",
    "subsystem": "Safety device",
    "symptom_title": "Wind sensor stops operation (high wind cut-out)",
    "symptom_details": [
      "BMU motions are halted or prevented when wind speeds are high; a wind alarm indicator may be active",
      "Operators cannot resume work until wind speed drops or system is reset"
    ],
    "typical_root_causes": [
      "Wind speed exceeding safe threshold (usually around 12.5 m/s or per manufacturer spec) causing automatic cut-out",
      "Faulty anemometer giving false high readings (e.g. damaged cups or electrical fault causing incorrect signal)",
      "Anemometer not reset or calibrated after previous alarm; system may require manual reset after wind alarm triggers",
      "Control system glitch where wind input is stuck in alarm state even when calm"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Observe current conditions: if winds are indeed high (gusty conditions), the cut-out activation is likely valid. Do not override in this case; wait for conditions to improve.",
      "2) Check the anemometer device on the roof unit: Are the cups or vane intact and spinning freely? If it's broken or obstructed, that could cause false readings.",
      "3) If conditions are calm but the wind alarm is still active, verify the signal: Some systems have a wind speed display. If it reads a constant high value or error, suspect the sensor or its wiring.",
      "4) Inspect wiring and connections from the anemometer to the control panel for corrosion or disconnection. A bad connection might be interpreted as a fault that triggers a stop.",
      "5) Consult the control panel or PLC for any wind alarm status. Some BMUs may require acknowledging or resetting the alarm once triggered, even after wind subsides.",
      "6) Test the anemometer if possible: create a gentle breeze or spin it by hand (if safe to do so) to see if it registers. No change in reading or erratic values means the sensor likely needs replacement."
    ],
    "safety_hazards_and_warnings": [
      "Never ignore a high wind alarm. Winds impose huge forces on the BMU and cradle – continuing to operate can lead to swings, collisions, or tipping of the BMU.",
      "Do not attempt to disable the wind safety device. If an override is provided (for emergency stowing only), use it strictly per manufacturer guidance and only to move the BMU to a safe parking position.",
      "Working in winds above the limit is a life-threatening risk. The cut-out is there to ensure safety of personnel and prevent damage; always abide by it."
    ],
    "recommended_corrective_actions": [
      "If the wind was legitimately high, resume operation only when wind speed falls below the threshold for a sustained period (e.g., 5-10 minutes of safe wind speeds). Then follow the reset procedure to clear the alarm.",
      "Replace or repair a faulty anemometer. Ensure the new unit is calibrated and tested. Many BMU anemometers are analog (voltage output) or digital pulse; ensure wiring matches and shielded cable is used if required.",
      "If wiring issues were found, fix connectors or replace cables. Apply weatherproofing to all outdoor electrical connections to prevent corrosion-induced faults.",
      "Test the system after fixes: simulate a wind above threshold (if possible, with a decade box or by spinning the sensor fast) to see that it triggers and then resets properly. This ensures the safety function works as intended.",
      "Document any instance of high wind cut-out in the BMU log as required by safety procedures, including time and wind speed. This helps in identifying patterns or if calibration drifts over time."
    ],
    "parts_commonly_involved": [
      "Anemometer (wind speed sensor)",
      "Wind alarm indicator light or PLC input",
      "Associated wiring and connectors",
      "Wind override key (if equipped, for emergency retrieval)"
    ],
    "manufacturer_references": [
      "EN 1808 requires wind safety cut-off for BMUs; typically set ~12.5 m/s. CoxGomyl/Manntech manuals instruct to cease operation at high wind.",
      "Tractel technical note: always verify anemometer function during routine maintenance to avoid surprise failures."
    ],
    "source_urls": [
      "https://facadexs.com/do-not-overlook-bmu-maintenance"
    ],
    "region_or_market_if_relevant": "global (wind safety universally required)",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Wind alarm, BMU stopped due to wind'.",
      "App should advise not to proceed if real wind. If user indicates it's false alarm, then guide through sensor check."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Systems with manual emergency lowering feature",
    "subsystem": "Emergency operations",
    "symptom_title": "Emergency manual descent cannot be performed",
    "symptom_details": [
      "In a power failure scenario, the manual brake release or hand crank for lowering the cradle does not function as expected",
      "The cradle either does not move when the manual descent is attempted, or moves only very little"
    ],
    "typical_root_causes": [
      "Incorrect procedure or partial engagement: the manual release lever might not be fully engaged or held as required (some designs need continuous pressure on a lever to keep brake open):contentReference[oaicite:68]{index=68}",
      "Slack rope safety engaged: if manual descent was tried while ropes were slack or uneven, the safety locks might have triggered, preventing descent (protecting from free-fall)",
      "Overspeed governor (secondary brake) engaged: if the descent was sudden, the overspeed device may have activated, halting the manual lowering",
      "Mechanical issue in the brake release mechanism – e.g., a seized release lever, broken linkage, or a handwheel that isn't properly connected to the hoist",
      "Lack of load or balance: in some cases, if the cradle is very light (no load), manual descent might not initiate because friction in system is too high relative to weight"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Double-check the emergency descent instructions for the specific BMU model. Ensure every step is followed (for example, some require pulling a pin or turning a knob before using the brake lever).:contentReference[oaicite:69]{index=69}",
      "2) Verify that the main power is indeed off and that any electrical interlocks for emergency descent are satisfied (some systems have a switch to turn off power to engage manual mode).",
      "3) Ensure the cradle is not resting on an obstacle or tangled – if one hoist side is caught, the other side may not descend and the slack rope device will trigger.",
      "4) While attempting manual descent, have one person observe the hoist and safety devices. If the slack rope safety starts to move or overspeed brake hints at engagement (a click or lock), stop and correct that (e.g., reset devices, tighten ropes by slightly lifting if possible).",
      "5) Try the manual descent with a slight load in the cradle if safe to do so – some friction brakes require some weight to overcome static friction. If it's empty, carefully adding a small weight (or one person if safe) might start movement.",
      "6) If a handwheel is being used, ensure it is properly attached to the motor shaft. Some require a key or pin to lock onto the shaft. Without it, the wheel will spin freely without turning the hoist."
    ],
    "safety_hazards_and_warnings": [
      "Manual descent can lead to uncontrolled speeds if done improperly. Always be prepared to re-engage the brake. Many hoists have a centrifugal brake to limit speed, but never assume it will perfectly control it.",
      "Only trained personnel should perform emergency lowering. Other occupants should be briefed to stay calm and not interfere during the procedure.",
      "If manual descent fails and people are trapped at height, call emergency services sooner rather than later. Do not let the situation become an extended crisis if the mechanism is not working."
    ],
    "recommended_corrective_actions": [
      "Practice and training: Conduct regular drills (with no actual height risk) to ensure staff know how to operate the emergency descent properly. Familiarity can prevent errors under stress.",
      "Maintain the emergency systems: regularly check that the brake release lever moves freely, the hand crank fits and turns the hoist, and the overspeed device reset is functional:contentReference[oaicite:70]{index=70} (often these are tested during annual inspections).",
      "If a design flaw or consistent difficulty is noted (e.g., needing a tool to hold lever), consult the manufacturer for an improved procedure or retrofit. Some older BMUs have kits to make emergency lowering easier.",
      "Incorporate a secondary backup plan: for example, a secondary power supply (battery UPS or auxiliary petrol generator for the hoist) to lower the cradle if manual methods fail. Some modern BMUs offer battery descent for this reason.",
      "After resolving any mechanical issues (like freeing up a stuck lever), perform a full functional test of emergency lowering from a safe height with no passengers, to verify it will work when truly needed."
    ],
    "parts_commonly_involved": [
      "Manual brake release lever or knob",
      "Emergency handwheel or crank system",
      "Overspeed (Blocstop) reset mechanism",
      "Slack rope safety device (interaction during manual mode)",
      "Hoist brake and centrifugal governor (for controlled descent)"
    ],
    "manufacturer_references": [
      "CoxGomyl and others provide specific step-by-step emergency lowering instructions – e.g., insert hand crank, hold brake release lever, etc. Example: Power Climber manual descent guidelines apply similarly:contentReference[oaicite:71]{index=71}.",
      "No direct online reference for BMU emergency descent issues, but common training issue is partial engagement of brake lever leading to no movement."
    ],
    "source_urls": [
      "https://www.scribd.com/document/579421561/150224-Sliding-Davit-with-standard-cradle-O-M-Manual",
      "http://www.powerclimber.com/Support/Training/RescueProcedure.pdf"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "medium",
    "notes_for_fault_finder_app": [
      "Symptom example: 'Cannot use manual emergency lowering'.",
      "This is a critical situation type; app should emphasize calling specialist help if initial steps fail."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Units with access door/gate interlocks",
    "subsystem": "Safety device",
    "symptom_title": "Interlock open (access door or gate not closed)",
    "symptom_details": [
      "BMU will not operate because a safety interlock indicates an open door/gate",
      "A warning lamp or message may indicate 'door open' or similar"
    ],
    "typical_root_causes": [
      "Cradle gate or door is not fully closed or its switch not engaged, preventing motion",
      "Roof car panel or maintenance access door left open (interlock on service hatch triggered)",
      "Defective interlock switch that remains open even when door/gate is closed (misalignment or broken actuator)"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Physically check all doors, gates, and hatches on the BMU. Ensure the cradle entry gate is fully closed and any latches engaged. On the roof unit, confirm all service panels are shut tight.",
      "2) Locate the interlock switches (usually small limit switches or sensors at these openings). Verify that the switch actuator is being depressed when the door/gate is closed.",
      "3) If a door appears closed but the fault persists, try opening and re-closing it firmly. Listen for a click of the interlock switch if audible.",
      "4) Inspect the switch for visible damage or looseness. If misaligned, adjust the position so that it contacts properly when closed.",
      "5) If you suspect the switch is faulty, you can test it by manually pressing it (with BMU power isolated for safety, then re-energize to see if the condition clears). Only a qualified technician should consider bypassing it for test purposes, and never for normal operation.",
      "6) Check the control panel for any specific door interlock indicator. Some advanced systems pinpoint which door is open on a display, aiding troubleshooting."
    ],
    "safety_hazards_and_warnings": [
      "Never override or bypass a door interlock permanently. These exist to prevent operation when a gate or panel is open, avoiding risk of falls or moving parts exposure.",
      "If you must bypass to retract a machine in an emergency (for example, a broken switch preventing closure), do so with extreme caution and immediately restore the safety device afterward.",
      "Open doors can expose gears or pinch points; ensure nobody attempts to operate the BMU with a panel open, even if the interlock were bypassed for testing."
    ],
    "recommended_corrective_actions": [
      "Close and secure all doors/gates properly. Train operators to always check that gates are latched before attempting to move the BMU.",
      "Replace or realign any faulty interlock switches. If a switch is frequently causing trouble due to alignment, consider installing a more robust sensor or guard to keep it properly triggered.",
      "Implement a pre-operation checklist that includes verifying all access points are closed, to catch this issue before it becomes a fault.",
      "After fixing, simulate an open-door scenario under controlled conditions (with no one at risk) to ensure the interlock correctly stops motion and clears when closed."
    ],
    "parts_commonly_involved": [
      "Cradle gate switch",
      "Roof unit access door switch",
      "Wiring to safety interlocks",
      "Indicator on panel for interlocks"
    ],
    "manufacturer_references": [
      "Many BMU manuals (e.g., CoxGomyl) mention that the machine will not start if any safety gate or panel is open as per EN1808 requirements.",
      "Tractel BMU user guides remind operators to check cradle gates closed prior to operation (common safety step)."
    ],
    "source_urls": [
      "https://www.coxgomyl.com/mybmu-remote-monitoring"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'Door or gate open fault'.",
      "Likely combine this with general safety circuit open category unless the app distinguishes specific interlocks."
    ]
  },
  {
    "manufacturer": "generic-BMU",
    "model_or_range": "Travelling BMUs with parking restraints",
    "subsystem": "Traversing",
    "symptom_title": "BMU still secured in parking (won't leave parking position)",
    "symptom_details": [
      "BMU does not move out of its parked position on the roof",
      "It may feel physically stuck or an indicator shows parking/tie-down engaged"
    ],
    "typical_root_causes": [
      "Mechanical tie-downs or storm pins are still engaged (holding the BMU to the roof structure)",
      "Wheel chocks or rail clamps (if used during parking) not removed or released",
      "Parking brake on travel wheels not released (some systems have manual parking brakes for long-term lock)",
      "In some cases, an electrical interlock tied to these devices prevents power to travel motors until unlocked"
    ],
    "diagnostic_checks_step_by_step": [
      "1) Inspect the BMU at its parking location. Identify any visible locking devices: this could be a pin through the chassis into a bracket, wheel clamps on the track, or anchored ropes/straps for tie-down.",
      "2) Release all such restraints: for pins, usually remove safety pins/cotter and pull the main pin out; for clamps, loosen or unlock them. Do this on all sides as applicable (some BMUs have multiple lock points).",
      "3) Verify any parking brake levers or valves are in the run position. For example, a manual hydraulic brake on wheels should be turned off.",
      "4) Attempt to traverse again gently. If there's an electrical interlock, ensure any associated sensor (like a limit switch that sensed the pin) is now satisfied (you might hear a click when the pin is removed).",
      "5) If the BMU still won't move, double-check that no lock was overlooked (front and back, both rails if applicable). Slightly rocking the machine by hand (if possible) can reveal if one side is still fixed.",
      "6) Check the operator panel for any 'park lock' indicator. If present and still lit, the system might require a confirmation input (e.g., a switch to confirm 'locks removed') or the sensor might be stuck – inspect and reset as needed."
    ],
    "safety_hazards_and_warnings": [
      "Always engage parking locks when BMU is not in use to prevent wind movement – but equally, always remove them before reactivating the BMU. A forgotten tie-down can cause serious damage if the machine tries to force against it.",
      "Keep fingers and limbs clear of pinch points when releasing large pins or clamps, especially if the machine is under slight tension (it could shift a little once freed).",
      "If a lock is jammed and cannot be removed, do not operate the BMU. Call for maintenance – forcing travel with a partially engaged lock can warp the track or machine frame."
    ],
    "recommended_corrective_actions": [
      "Develop a standard procedure for parking and deploying the BMU that includes a checklist for all tie-downs and locks. Use warning tags on controls if locks are in place.",
      "If an electrical interlock exists for the tie-downs, ensure it is functioning (consider adding one if not, as an extra safety). For example, a limit switch that detects the presence of a pin, wired to prevent travel.",
      "Repair any bent or stiff locking pins/clamps so that they can be removed and inserted smoothly. Lubricate them as needed, but keep lock mechanisms free of dirt.",
      "Train all operators on the location and importance of these devices – sometimes new operators are unaware of a less visible storm pin and attempt to move the BMU, causing a fault.",
      "After removing locks, always do a slow initial movement and have a second person watch to be sure everything is free. This can catch any still-engaged lock immediately."
    ],
    "parts_commonly_involved": [
      "Storm pins / tie-down pins",
      "Wheel or rail clamps",
      "Parking brake mechanism",
      "Interlock switches for parking devices"
    ],
    "manufacturer_references": [
      "Manufacturer manuals often have a 'Parking' section. CoxGomyl for instance instructs insertion of pins in parking and removal before use (no operation if pins in).",
      "Manntech systems in high-wind regions include tie-down straps; failing to remove them has caused issues per field reports (no motion until freed)."
    ],
    "source_urls": [
      "https://facadexs.com/do-not-overlook-bmu-maintenance"
    ],
    "region_or_market_if_relevant": "global",
    "confidence": "high",
    "notes_for_fault_finder_app": [
      "Symptom: 'BMU won't move from parked' or 'Machine stuck in park'.",
      "Likely resolved by checking all locks; app can list each type to remind the engineer."
    ]
  }
]
[
  {
    "id": "coxgomyl_hoist_motor_overheat",
    "manufacturer": "CoxGomyl",
    "sub_system": "Hoist Drive",
    "symptom_title": "Hoist motor frequently overheats or trips",
    "symptom_details": [
      "Hoist motor cuts out during lifting operations, often after prolonged use",
      "Thermal overload relay or PLC alarm triggers (motor over-temperature fault)",
      "Motor feels excessively hot to touch and requires cooldown before reset"
    ],
    "technical_root_causes": [
      "Thermal overload due to prolonged high current draw or overloading of the hoist:contentReference[oaicite:29]{index=29}:contentReference[oaicite:30]{index=30}",
      "Phase imbalance or phase loss in the 3-phase supply causing increased current on remaining phases:contentReference[oaicite:31]{index=31}",
      "Brake coil not fully releasing (brake dragging) leading to the motor fighting the brake and overheating",
      "Worn or seized motor bearings increasing friction and load on the motor, causing overheating:contentReference[oaicite:32]{index=32}"
    ],
    "diagnostic_steps": [
      "Step 1: **Isolate power** per Safe System of Work before inspection (Lock-Out Tag-Out). Ensure the BMU is parked safely.",
      "Step 2: Visually inspect the motor and brake for signs of heat damage (discolored coils, smell of burnt insulation). Check if the motor's thermal overload relay has tripped and note the conditions.",
      "Step 3: Verify the 3-phase supply voltages are balanced and present on all phases (a blown fuse or phase loss can cause overheating on the remaining phases). Use a multimeter to check input lines:contentReference[oaicite:33]{index=33}.",
      "Step 4: Measure motor winding resistances phase-to-phase to detect imbalance or a possible winding short. Also measure insulation resistance to ground.",
      "Step 5: Check the motor brake release: ensure the brake is lifting fully when energized. Measure the brake coil voltage and inspect the air gap; an incorrect gap or weak coil can cause the brake to partially engage:contentReference[oaicite:34]{index=34} (leading to high load on motor).",
      "Step 6: Manually rotate the hoist drum or gearbox (with power off and brake released) to feel for excessive friction or tight spots indicating bearing or gearbox issues."
    ],
    "safety_hazards_and_warnings": [
      "Ensure **Lockout/Tagout** is applied before working on the motor circuit – high voltage present.",
      "Motor and brake surfaces may be extremely hot after a trip – risk of burns. Allow adequate cooling time.",
      "Repeated resetting of a tripped thermal overload without fixing the cause can lead to motor insulation damage or fire – investigate cause after a single trip.",
      "Do not operate the BMU if the motor overheats frequently – this indicates an unsafe condition that could lead to motor failure while personnel are on the facade."
    ],
    "remedial_actions": [
      "Reduce the load or duty cycle if the motor was being overworked (stay within Safe Working Load and runtime limits as per manual).",
      "Repair the supply issue: restore balanced 3-phase power if a phase was lost (check mains connections, fuses, phase-monitor relay functionality).",
      "Adjust or repair the brake assembly – set correct air gap and replace a weak brake coil or worn brake pads to eliminate drag.",
      "Replace motor bearings or the motor itself if diagnostics indicate internal mechanical friction. After replacement, test-run the motor and monitor current draw/temperature.",
      "Ensure ventilation around the motor is adequate (clear dust from cooling fins) and ambient temperature is within spec."
    ],
    "compliance_standard": "LOLER 1998 (Reg.9 Thorough Exam) & BS 6037-1:2017 (maintenance of drive systems)",
    "confidence": "High"
  },
  {
    "id": "tractel_rope_traction_slip",
    "manufacturer": "Tractel",
    "sub_system": "Hoist Drive",
    "symptom_title": "Hoist motor runs but cradle does not lift (rope slipping)",
    "symptom_details": [
      "Hoist motor can be heard running, but the cradle either stalls or ascends very slowly under load",
      "Wire rope movement is observed on the drum or traction sheave with little/no lifting of the platform",
      "Possibly a burning smell or heating of the rope at the hoist (friction from slippage)"
    ],
    "technical_root_causes": [
      "Worn traction sheave or pressure roller in friction hoist (e.g., Tirak) causing insufficient grip on the wire rope, leading to slippage:contentReference[oaicite:35]{index=35}",
      "Glazed or oily rope reducing friction – contaminants or lack of proper rope pressure can cause the rope to slip under load",
      "Excessive load above the hoist’s rated capacity causing the rope to slip instead of lifting (the traction system is designed to slip to prevent overload)",
      "Gearbox or coupling wear in a drum hoist: the motor turns but the drum does not impart full torque to the rope (internal slippage in gearbox)"
    ],
    "diagnostic_steps": [
      "Step 1: **Immediately stop operation** if rope slip is suspected. Do not continue hoisting a load that isn’t moving, as this can damage the rope.",
      "Step 2: Inspect the hoisting mechanism (traction sheave or drum) for wear. In a traction hoist, check the groove profiles on the drive pulley for wear or polishing. In drum hoists, check if the drum or couplings are intact.",
      "Step 3: Examine the wire rope for any signs of glaze, oil/grease, or flattening. Clean a small section of the rope and perform a friction test if possible (rope should be dry and suitably lubricated per manufacturer spec, not oily on surface).",
      "Step 4: Verify the hoist’s **overload device** status. Many BMUs have overload sensors that should trip in genuine overloads:contentReference[oaicite:36]{index=36}. If no overload trip, yet slipping occurs, mechanical issues are likely. If an overload was tripped, reduce the load and test again with a safe load.",
      "Step 5: Check the rope pressure mechanism (on Tractel Tirak, the spring-loaded rollers). Ensure the tension springs are intact and providing sufficient force on the rope. Adjust tension if the manufacturer allows.",
      "Step 6: For drum hoists, scribe a line on the drum and observe if it slips relative to the motor shaft during lifting. This can indicate a coupling/gearbox issue if the motor turns but drum lags."
    ],
    "safety_hazards_and_warnings": [
      "**Danger:** Rope slipping under load can lead to sudden **free-fall** if traction is lost. Ensure the secondary overspeed brake is functional – it should activate if the descent speed exceeds safe limits:contentReference[oaicite:37]{index=37}.",
      "Do not let personnel stay on a platform that is not lifting as expected; secure or lower it to a safe position. Rope slip can rapidly degrade the rope (heat/friction).",
      "Keep clear below the platform; if the rope were to suddenly regain traction or fail, the platform or objects could fall.",
      "Never exceed the SWL (Safe Working Load) of the BMU – the hoist slipping is a warning sign of either overload or equipment failure."
    ],
    "remedial_actions": [
      "Replace or re-machine the traction sheave if worn smooth. A proper groove profile is needed to grip the rope. Also replace the pressure rollers or liners if applicable.",
      "Thoroughly clean the wire rope and sheave to remove any grease build-up. If the rope has been glazed or heat-damaged from slipping, it should be replaced and not re-used.",
      "If an overload condition was the cause, remove excess weight and **re-calibrate the overload safety device**. Perform a test lift with a known load to ensure proper operation without slip.",
      "Inspect the gearbox and couplings – if signs of internal slipping are found (e.g. metal shavings in oil, loose coupling bolts, etc.), repair or replace those components. After fixes, run the hoist with no load then incrementally add load to verify full torque transmission.",
      "Re-test the overspeed brake and slack-rope safety devices before returning to service, to ensure they intervene properly in case of any future slippage or sudden load drop."
    ],
    "compliance_standard": "EN 1808 (hoist overspeed & overload protection), BS 6037-1:2017",
    "confidence": "High"
  },
  {
    "id": "generic_brake_fail_slide",
    "manufacturer": "Generic",
    "sub_system": "Hoist Drive",
    "symptom_title": "Suspended platform creeps down after stopping (brake not holding)",
    "symptom_details": [
      "After the hoist is stopped, the cradle slowly descends or slips a few centimeters/minute without command",
      "Operators notice the platform does not stay at a set height when idle, requiring frequent corrective raises",
      "In extreme cases, the platform can be seen drifting down immediately when the hoist motor is off"
    ],
    "technical_root_causes": [
      "Failure of the electromagnetic hoist brake to hold: brake pads/shoes are worn or glazed, reducing friction so it cannot support the load",
      "Brake coil weakness or improper voltage – the coil may not generate full holding force, especially if voltage is low or coil is heat-damaged, causing *brake hysteresis* (delay in engagement or incomplete magnetization)",
      "Excessive air gap between brake and armature plate due to misadjustment, meaning the brake spring cannot pull the plate fully when power is removed",
      "Hoist overloaded beyond brake design – the holding torque of the brake is exceeded by the suspended load (could happen if the load sensor is bypassed or malfunctioning)",
      "On twin-drum systems, if one brake or drive holds and the other slips, the platform can tilt/slip (synchronization issue, though this is a more complex scenario)"
    ],
    "diagnostic_steps": [
      "Step 1: **Do not allow personnel on the platform** until this issue is resolved. Secure the platform by lowering it to rest on a solid surface or tie it off. If mid-air, use secondary safety lines or support props if available.",
      "Step 2: With power off and E-stop engaged, manually test the brake: there is often a manual brake release lever – when engaged the platform should be allowed to move (with controlled lowering via secondary device). Observe if the brake re-engages promptly when released. If it doesn’t, or if the platform moves even with brake supposedly engaged, the brake is faulty.",
      "Step 3: Inspect the brake discs or drum for oil, grease, or heavy rust. Any contamination can significantly reduce brake holding capacity. If present, schedule a cleaning or replacement of pads. **Never touch the brake surfaces with bare hands** if you plan to reuse them (oil from skin can reduce friction).",
      "Step 4: Measure the brake coil resistance and check the coil’s power supply. Compare coil operating voltage to spec. A coil with partially shorted windings may still actuate but not hold the full force. Also verify that when power is cut, the coil fully de-energizes (no residual voltage).",
      "Step 5: Using feeler gauges, measure the air gap between the brake armature plate and motor endbell (or brake field) when the brake is engaged (power off). Compare with manufacturer’s recommended gap. An excessive gap means the brake spring cannot develop enough clamping force or has too much travel.",
      "Step 6: Check mechanical components: springs (in spring-applied brakes) should not be broken or fatigued, and all fastening hardware should be tight. A loose mounting can cause misalignment and partial holding.",
      "Step 7: If the BMU has multiple hoists, test each hoist’s brake individually (some systems allow isolating one hoist) to identify if only one side is slipping."
    ],
    "safety_hazards_and_warnings": [
      "**DANGER:** A creeping or slipping hoist indicates a **potential catastrophic brake failure** – the platform could accelerate downwards. No one should ride in the platform until the brake is fixed and tested.",
      "Ensure the secondary emergency brake (overspeed brake) is operational. In case the main brake cannot hold, the overspeed device should lock the rope if descent speed increases:contentReference[oaicite:38]{index=38}.",
      "When working on the brake, the platform must be secured. Use crane support or ropes to take the load; releasing a faulty brake under load can result in an immediate drop of the platform.",
      "Lockout power and discharge any stored energy before servicing. If working at height near the hoist, wear a harness – a sudden jolt from a slipping brake could knock someone off balance.",
      "Do not assume a single brake will hold redundancy: BMUs rely on each hoist’s brake plus backups. If one is suspect, treat the whole system as unsafe."
    ],
    "remedial_actions": [
      "Replace brake pads/shoes if they are worn out or contaminated. After replacement or cleaning, *conduct a static load test* by hanging a rated load and observing for any slip over a period (per BS 6037 requirements).",
      "Adjust the brake air gap to manufacturer’s specification. Most hoist brakes allow minor gap adjustments as the lining wears. Ensure uniform gap all around by using shims or adjustment screws as directed by the service manual.",
      "Replace the brake coil if testing shows it out of spec (high resistance or burnt). Also check/replace the rectifier or coil power supply if it’s not delivering full voltage – a DC brake coil getting low voltage will have reduced holding torque.",
      "If the brake was found to be okay mechanically, investigate control issues: ensure that the brake is actually being commanded to engage when it should (for example, some systems keep the brake open if a drive fault occurs – verify the control logic). This might involve checking the PLC or relay that controls the brake circuit.",
      "Once repaired, **perform a drop test** without personnel: run the cradle up a small height, stop it, and observe. Also test the emergency brake by simulating a power failure while the cradle is moving (the cradle should stop promptly). These tests ensure compliance with EN 1808 dual-braking requirements before returning to service."
    ],
    "compliance_standard": "EN 1808 (dual brake requirements), LOLER 1998 (Schedule 1, lifting brakes)",
    "confidence": "High"
  },
  {
    "id": "manntech_plc_comm_loss",
    "manufacturer": "Manntech",
    "sub_system": "Control Systems & PLC",
    "symptom_title": "Intermittent PLC communication fault or loss of control",
    "symptom_details": [
      "BMU operations halt occasionally with a PLC fault alarm or error code on the display",
      "The “Fault” indicator light on the control panel illuminates and the system becomes unresponsive:contentReference[oaicite:39]{index=39}",
      "Sometimes cycling power restores function, but the fault tends to recur randomly, often during certain motions or at extreme jib positions"
    ],
    "technical_root_causes": [
      "Electrical noise or ground loop interference affecting PLC I/O or communications – for example, VFD-induced noise on control cables or improper grounding causing erratic signals:contentReference[oaicite:40]{index=40}",
      "Loose or failing communication cable between distributed control elements: Manntech BMUs often have tethered cradle controls (Pendant or MAGTRON wireless) and RS485/serial links:contentReference[oaicite:41]{index=41}; a damaged cable or connector can cause loss of comms.",
      "Defective PLC I/O module or power supply issues – a failing module can sporadically go offline, or an unstable 24VDC supply can reset parts of the control system.",
      "Software logic fault or watchdog timeout in the PLC program – e.g., certain sensor conditions not handled, causing the PLC to enter a safe fault state (this is less likely if the fault is new in a previously working system, but possible after updates)."
    ],
    "diagnostic_steps": [
      "Step 1: **Observe the fault pattern** – note what operation was happening when the fault occurs (e.g., does it happen only when slewing, or when multiple motions run together?). This can give clues (a pattern might implicate a specific cable or sensor on the boom/jib).",
      "Step 2: Check the control **communication cables**. For tethered controls, inspect the entire length of the cable reel or festoon for cuts or pinch points. For wireless (if MAGTRON), ensure the receiver units and antennas are secure. Any connectors between the roof trolley and cradle (like junction boxes or slip rings) should be checked for corrosion or loosening.",
      "Step 3: Inspect the earthing and grounding of the system. Using a multimeter, verify low resistance ground bonding between the BMU chassis, control panel ground, and building earth. Ground loops can be mitigated by a single-point grounding scheme. Add grounding straps if any sections (like the jib or cradle) rely on bearings for earth continuity.",
      "Step 4: Open the main control panel and visually inspect the PLC and I/O modules. Look for diagnostic LEDs: often PLCs have error LEDs or communication status lights. If a particular module shows a fault light, focus there. Reseating modular I/O connectors or the backplane connection can sometimes resolve intermittent contacts.",
      "Step 5: Use PLC diagnostic tools (if available, e.g., laptop with PLC software) to retrieve fault codes or logs. Manntech’s newer systems might log faults like “I/O communication error” or “PLC watchdog tripped”. These can direct troubleshooting (e.g., if an analog input fault corresponds to a ground fault on a sensor).",
      "Step 6: If suspecting noise, consider temporally adding a filter or snubber to noisy components (for example, RC snubbers on large contactor coils, or line reactors on VFD output) to see if the fault frequency reduces. Also route signal cables away from power cables as much as possible.",
      "Step 7: Verify all safety circuits and limit switches are functioning correctly. Sometimes a safety device intermittently opening (e.g., a loose emergency stop contact) might appear as a PLC fault or stop condition. Manually jiggle wiring on E-stops and see if fault triggers."
    ],
    "safety_hazards_and_warnings": [
      "Intermittent control faults can cause **unanticipated machine behavior**. Until resolved, operate the BMU in manual slow speed only (if possible) and with utmost caution, or keep it out of service. The BMU might stop suddenly or not respond to commands at height.",
      "If the PLC is entering fault state, it’s usually fail-safe (everything stops), but **ensure the braking systems are good**. A communication loss could conceivably freeze controls while the cradle is mid-motion – be prepared to use the emergency stop or manual lowering procedures.",
      "Troubleshooting live PLCs and electrical panels should be done by a qualified engineer. There is a risk of electric shock or shorting when probing control circuits. Use proper PPE and insulated tools, and preferably work with a second person as a spotter.",
      "Be cautious of simply resetting power to clear faults without understanding them – a sudden restart could lead to movement if a control lever was left engaged or if the fault was masking a condition (ensure all commands are in neutral/off position before resetting)."
    ],
    "remedial_actions": [
      "Repair or replace any damaged communication cabling. For example, if the cradle umbilical cable shows wear, replace it. Ensure connectors are water-tight (IP67 or better) and consider adding strain relief or a service loop to moving cables.",
      "Improve grounding: establish a single-point ground reference for the control system and add shielded cables for analog/communication signals if not already in use. Ground the shields at one end as per best practice to avoid ground loops while shunting noise to earth.",
      "Replace faulty PLC modules or power supplies. If diagnostics pointed to a particular I/O rack or module going offline, swap it out. It can be useful to keep a spare PLC or remote I/O module for such testing. After replacement, run the BMU through all functions to confirm stability.",
      "Work with the manufacturer (Manntech/CoxGomyl) if a software update or bug is suspected – they might provide a PLC program revision if this is a known issue. In one case, for instance, a *“communication timeout”* fault was resolved by a PLC firmware update.",
      "Document the findings: given the critical nature of BMU controls, record what was done. If noise was an issue, note the source (e.g., VFD) and ensure that any future retrofit (like adding an output reactor or proper VFD grounding) is completed to prevent recurrence."
    ],
    "compliance_standard": "BS 6037-1:2017 (Clause on control systems), EN 1808 (electrical safety and control reliability)",
    "confidence": "Medium"
  },
  {
    "id": "generic_relay_contactor_chatter",
    "manufacturer": "Generic",
    "sub_system": "Control Systems & PLC",
    "symptom_title": "Contactor or relay chattering (unstable control circuit)",
    "symptom_details": [
      "Audible rapid clicking sound from a control relay or main contactor when attempting to move the BMU",
      "Hoist or traverse motion starts and stops quickly in a juddering manner instead of smooth continuous movement",
      "In some cases, the fault indicator flickers as the power to a motor intermittently connects/disconnects"
    ],
    "technical_root_causes": [
      "Under-voltage to the contactor coil – the coil isn’t getting enough holding voltage (possible causes: faulty control transformer, voltage drop in wiring, or wrong coil rating) so it chatter engages and disengages rapidly",
      "Control circuit wiring fault such as a loose connection or high resistance contact (e.g., an emergency stop or limit switch making intermittent contact) causing the coil supply to flicker on/off",
      "Defective relay contacts in an interlock circuit – for example, an auxiliary contact that should hold the circuit may be oxidized or bouncing, failing to maintain the latch",
      "Contact bounce or PLC output instability – if a PLC output is driving a contactor and the logic is oscillating due to a program bug or sensor flutter, it can manifest as chatter",
      "Inadequate suppression of the contactor coil’s inductive kickback causing PLC or relay control to malfunction (the noise could reset part of the circuit each time the coil energizes)"
    ],
    "diagnostic_steps": [
      "Step 1: **Observe safely** – confirm which contactor or relay is chattering. Use the electrical schematic to identify what coil it is (e.g., hoist contactor KM1, etc.). This will narrow down which circuit to troubleshoot.",
      "Step 2: Measure the coil supply voltage with a multimeter while the chatter happens. If the coil voltage is dropping out significantly, trace back: check the control transformer output (if e.g. stepping down from 415V to 110V control). An undervoltage condition (say only getting 70% of rated coil voltage) can cause chattering.",
      "Step 3: Inspect all series control elements in that circuit for looseness: emergency stop contacts, limit switches, and any relay contacts that feed the coil. Physically wiggle wires and see if that initiates chatter. A common issue is a vibration-sensitive connection that causes self-induced oscillation.",
      "Step 4: If the coil voltage is steady but it still chatters, the contactor itself may be mechanically worn or the armature might be sticking. De-energize and manually press the contactor in to feel if it moves freely. Look for debris or corrosion in the magnet gap. Also check if the contactor coil is correct (for instance, a coil designed for 50Hz on 60Hz can behave poorly).",
      "Step 5: Check for proper coil suppression components. AC coils often have shading rings or external RC snubbers; DC coils may have diodes. If someone replaced a contactor coil and omitted the snubber, it could cause PLC inputs to bounce or just audible humming/chatter. Add or replace suppression as needed (reference manufacturer’s spec for the coil).",
      "Step 6: Examine the PLC logic (if coil is PLC-driven) or the relay logic that controls the coil. Ensure there is a proper seal-in circuit or latch. For example, if a holding contact isn’t addressed in PLC code or a relay’s normally open contact isn’t wired properly to maintain the circuit, the coil will drop as soon as a momentary command is released, then re-energize repeatedly.",
      "Step 7: Use a temporary jumper (with extreme caution and only if necessary for test) across suspect contacts to simulate them being closed, to isolate which contact’s opening causes the chatter. For instance, bypass an overload relay contact briefly – if chatter stops, that relay may be fluttering (due to a fault or incorrect setting)."
    ],
    "safety_hazards_and_warnings": [
      "Chattering indicates an unstable control condition – **do not continue normal operation**. The rapid on-off can stress the motor and cause unpredictable movement. Stop using the machine until resolved.",
      "Electrical arcing from the chattering contacts can cause component damage or fire. After isolating power, inspect the contactor for heat damage or burning. Burnt contacts can stick, leading to a failure of the contactor to open when needed (safety hazard).",
      "While troubleshooting, never bypass safety devices for more than momentary testing, and only by competent personnel. For example, bridging an E-stop to find a fault is dangerous – if the machine could start moving, you must take precautions (platform at ground, etc.). Remove any test jumpers immediately after testing.",
      "Wear appropriate PPE when investigating the control panel (voltage may be present at control circuits typically 110VAC or 24VDC, and the main power alongside). Use insulated gloves and tools."
    ],
    "remedial_actions": [
      "Tighten and secure all wiring connections in the affected control circuit. Replace any suspect sections of wire or terminal blocks if they don’t clamp well. A single loose screw on a terminal can cause the entire circuit to chatter under vibration.",
      "Replace the contactor or relay if it’s been damaged by prolonged chattering or if internal springs/contact surfaces are worn out. When replacing, ensure the coil voltage and frequency match the system, and install any recommended suppression devices.",
      "If a control voltage drop is identified, consider upgrading the control transformer or reducing the burden on it (for instance, too many coils energized simultaneously). In some cases, using a DC coil with a stable DC supply (with proper circuit design) can cure AC chatter issues.",
      "Add or verify **surge suppression** across coils and other inductive loads. This can include RC snubbers on AC coils or flyback diodes on DC coils. These components will absorb voltage spikes and prevent PLC or other control relays from false triggering.",
      "Review the electrical schematic against how the machine is wired/programmed. Correct any discrepancies – e.g., if a holding contact was mistakenly not wired in, correct that. After fixes, simulate operations with the machine unloaded: the contactor should pull in firmly and not drop out until the command is released or a safety opens.",
      "Test all safety functions after the repair. What appeared as contactor chatter could have been a safety rapidly engaging – ensure that E-stops, limit switches, and overloads properly stop the machine and don’t flicker. This will confirm the reliability of the control circuit as per design."
    ],
    "compliance_standard": "EN 60204-1 (Electrical equipment of machines), BS 6037-1:2017 (requires reliable controls free of erratic behavior)",
    "confidence": "Medium"
  },
  {
    "id": "generic_vfd_overcurrent_trip",
    "manufacturer": "Generic",
    "sub_system": "Electrical & Drives",
    "symptom_title": "VFD reports Overcurrent fault when raising or driving BMU",
    "symptom_details": [
      "The Variable Frequency Drive (inverter) feeding a hoist or travel motor frequently trips on “Overcurrent” fault",
      "Fault often occurs at the start of motion or when trying to lift a heavy load, causing an abrupt stop",
      "Sometimes accompanied by a spike in current reading and the drive’s overload indicator before the trip"
    ],
    "technical_root_causes": [
      "Mechanical overload or jam: the motor is encountering resistance beyond its limit (e.g. hoist drum jammed, gearbox seized or cradle stuck), causing current to shoot above drive limits:contentReference[oaicite:42]{index=42}",
      "Short circuit or phase-to-phase fault at the motor or cabling: a partially shorted motor winding or damaged cable can draw excessive current immediately, triggering drive protection",
      "Drive IGBT failure: a faulty output transistor in the VFD can cause improper current sensing or actually create an overcurrent condition on one phase (often accompanied by drive self-diagnostics indicating a power stage fault)",
      "Acceleration parameters too aggressive: if the drive’s accel time is set too fast, the motor may draw excessive inrush current trying to ramp up the load inertia quickly, overshooting the overcurrent threshold",
      "Inadequate supply or voltage sag: a dip in supply can cause the drive to try to compensate with more current. Also, if supply voltage is higher than motor spec, it can magnetize the motor excessively and trip (less common)"
    ],
    "diagnostic_steps": [
      "Step 1: Verify the **mechanical freedom** of the system. Manually (with power off) try to rotate the hoist drum or drive wheels. If it’s stuck solid, focus on the mechanical jam (rope snarled, gearbox frozen). If it moves smoothly by hand (with brake released), mechanical binding is less likely the main issue.",
      "Step 2: Check the load vs. capacity. Ensure the cradle is not overloaded beyond rated SWL – sometimes an overweight condition will consistently trigger overcurrent as the drive attempts to lift. Use a dynamometer or load cell reading if available to verify the suspended load.",
      "Step 3: Inspect motor and drive connections. Look for any burned smell or visible charring at the motor terminals or along the cable – a short may leave physical evidence. Perform an insulation resistance test (Megger) on the motor to detect winding shorts to ground or between phases. Also, measure the phase-to-phase resistance; a significantly lower reading on one phase could indicate a shorted turn.",
      "Step 4: Review the VFD’s fault log and parameters. Note at what frequency or speed the fault occurs and any recorded current value. If the drive has a history log (many modern VFDs show last 5 faults, for example), see if it’s always at start (could be acceleration issue) or at some consistent speed/torque.",
      "Step 5: If possible, do a test run in **jog mode or low speed**. Sometimes starting under a slower ramp helps identify if the fault is instantaneous or builds up. Monitor the motor current (many VFDs allow real-time current monitoring). If current ramps up rapidly even at low speeds, suspect electrical faults. If it stays normal until a certain load point, suspect mechanical resistance beyond that point.",
      "Step 6: Swap or test with another motor or drive (if available and safe to do so). For example, if the BMU has twin hoist drives, you might be able to see if both behave similarly or one drive is faulting while the other is fine under same conditions. Swapping drives (again, only if identical and properly set up) can isolate whether the issue follows the drive or the motor.",
      "Step 7: Check the drive’s current limit and acceleration settings. Ensure they are tuned according to the motor nameplate and the BMU design. If someone recently adjusted the drive (or if a default parameter set was loaded), improper settings could cause nuisance trips – compare with the commissioning sheet values."
    ],
    "safety_hazards_and_warnings": [
      "Overcurrent faults often **result in sudden stops** – ensure personnel on the platform are secured, as a lifting halt can jolt the cradle, and tools can fall. After any sudden stop, inspect that the cradle is still secure and ropes properly seated.",
      "Do not keep resetting and running the drive if it trips repeatedly – the cause needs to be found. Repeated high currents can overheat motor windings quickly or damage the drive. Allow components to cool while troubleshooting.",
      "When megger testing the motor, disconnect it from the VFD completely – high voltage test could damage drive electronics. Also discharge the VFD’s capacitors and isolate power; some large drives hold charge and can output to the motor even when off.",
      "If a short circuit is suspected, **do not attempt to run the motor** until it’s fixed – a dead short can lead to violent failure of the drive or motor (fire, arc blast). Use proper test instruments first."
    ],
    "remedial_actions": [
      "Remove the mechanical obstruction or reduce the load: For a jam, clear the rope path, realign the jib, or service the gearbox. For overload, offload any unnecessary weight from the cradle and enforce weight limits (including considering wind forces as additional load).",
      "Repair electrical faults: replace the motor if windings are shorted or send it for rewinding. Replace any damaged power cables. Only run the drive again once insulation tests pass and connections are secure.",
      "If the VFD’s power electronics are at fault (confirmed by process of elimination or manufacturer diagnostics), the drive unit or its power module should be replaced. VFD internal repairs are not typically field-serviceable for safety reasons. Install the new or repaired drive and program it with the correct motor parameters before use.",
      "Adjust drive settings if needed: lengthen the acceleration time to a gentler ramp, and ensure the current limit is set appropriately (it should usually be around 1.5x motor rated current for a short period, depending on drive). This can prevent spurious trips during normal operation. Consult the BMU manual or drive manual for recommended settings.",
      "After any fix, do a **test under controlled conditions**: First run the motor with no load (cradle empty) to ensure no trip. Then gradually introduce load and verify that the drive can handle full rated load without overcurrent faults. Monitor motor temperature and current during these tests. This verifies the issue is resolved and the system is safe to return to service."
    ],
    "compliance_standard": "BS 6037-1:2017 (Electrical systems), LOLER 1998 (preventing overload conditions)",
    "confidence": "High"
  },
  {
    "id": "generic_vfd_overvoltage_regen",
    "manufacturer": "Generic",
    "sub_system": "Electrical & Drives",
    "symptom_title": "VFD DC bus overvoltage fault during deceleration or lowering",
    "symptom_details": [
      "The VFD controlling a motion (hoist or travel) intermittently trips on “DC Bus Overvoltage” fault, especially when slowing down or stopping",
      "This fault is more common when lowering a heavy cradle or when the BMU trolley is coming to a stop from a long travel – essentially during decel, not accel",
      "Operators notice the cradle might coast a bit after the stop command, coinciding with the fault (drive trips and motor freewheels until mechanical brake kicks in)"
    ],
    "technical_root_causes": [
      "Regenerative energy from the motor is raising the DC bus voltage beyond the drive’s threshold. For example, when lowering a loaded cradle, the motor acts as a generator. If the drive’s braking circuitry (transistor/resistor) can’t dissipate this energy, the DC link voltage spikes:contentReference[oaicite:43]{index=43}.",
      "Inadequate or failed braking resistor in the VFD – either none was installed (perhaps not anticipated in design) or the resistor is burnt open. Without a functioning brake resistor or regen unit, the drive has no path to dump excess kinetic energy, hence the DC bus overvoltage fault.",
      "Deceleration time set too short – the drive is trying to brake the load too quickly, generating a large regenerative current. If the ramp-down is faster than what the system can absorb, the DC bus will surge:contentReference[oaicite:44]{index=44}.",
      "High supply voltage or incoming surges: if the supply is already near the upper limit, any regeneration easily pushes the DC bus over the trip point. Also, sudden stop of a heavy load can reflect a surge back into a weak power supply system.",
      "Drive tuning or parameter issues: some drives have an “overvoltage control” or dynamic braking parameter. If these are disabled or mis-tuned, the drive might trip rather than dynamically adjust. (Also, a drive in open-loop vector vs. scalar mode might have different braking performance)."
    ],
    "diagnostic_steps": [
      "Step 1: Check if a **braking resistor** is present and properly connected to the VFD. Locate the resistor (often a grey box or grid resistor mounted near the drive) and visually inspect it and its wiring. Use a multimeter (with power off & capacitors discharged) to measure the resistor’s ohms and compare to spec. An infinite reading means it’s open-circuited and not functioning.",
      "Step 2: Inspect drive parameters: find the deceleration time and any overvoltage control settings. If the decel ramp is very aggressive (e.g., 0.5 seconds for a full-speed stop), that’s likely a contributor. Also see if “Dynamic Braking” is enabled in the drive and if it’s triggering properly. Some drives log when the brake chopper activates – if it’s not activating at all, either the transistor or resistor could be bad.",
      "Step 3: Monitor the DC bus voltage in real-time (many drives allow you to display this). Run a test at a safe load: raise the cradle a few meters, then command a stop or downward move and observe the DC bus. If the voltage shoots up near the trip level (the drive manual will state e.g. 780V DC for a 480V drive) just as the fault comes in, it confirms regen is the issue.",
      "Step 4: Examine the mechanical braking system timing. The electric motor drive should ideally hand off to the mechanical brake smoothly. If the mechanical brake is engaging too late, the drive might be doing all the braking and overstressing. A misadjusted or sticky brake could cause the drive to handle more decel than it should. Check brake lift/drop timing relays or PLC settings for brake delay.",
      "Step 5: Evaluate external factors: measure the actual supply voltage to the BMU when idle and during operation. If the building supply is on the higher end of tolerance or there’s known power quality issues, the margin for regen is smaller. Also check if multiple BMU motions or other machinery share the supply – one unit’s regen might affect another.",
      "Step 6: If possible, test a slower deceleration or add a temporary braking resistor if the original is faulty. For example, extend the decel time in the drive from, say, 1.0s to 2.0s and see if the fault still occurs. If an external resistor can be safely hooked up (with proper ohm and watt rating), see if that immediately absorbs the regen energy (the fault should disappear). This A/B test can confirm the root cause."
    ],
    "safety_hazards_and_warnings": [
      "An overvoltage trip often leads to the drive shutting off output, meaning the motor is no longer controlled – **relying on the mechanical brake to stop**. Ensure the mechanical brake and secondary safety brake are in top condition, as they ultimately catch the load when the drive trips.",
      "Frequent overvoltage events can damage the drive or capacitors. More critically, if not addressed, a scenario could occur where the drive doesn’t catch a lowering load early enough, leading to a drop until the safety brake activates. Treat this fault as a priority – do not operate the BMU in heavy load lowering conditions until mitigated.",
      "If a braking resistor is in the circuit, it can get extremely hot during operation (it’s dissipating kinetic energy as heat). When checking or replacing resistors, **ensure power is isolated and wait** sufficiently for it to cool. Keep combustible materials away from resistors.",
      "Lowering a heavy load in manual/emergency mode (bypassing the drive) should be done per the manufacturer’s emergency procedures (often a manual lowering by brake release) – never rely on a faulting drive to control descent. Engage the manual descent procedure if the drive cannot safely lower due to regen faults."
    ],
    "remedial_actions": [
      "Install or repair the braking resistor: If none is present and the application clearly requires one (any time you have significant lowering loads), add a correctly sized resistor kit from the drive manufacturer. If the resistor is present but burnt out, replace it and ensure it has proper cooling and no signs of over-stressing (maybe choose a higher wattage if the duty was too high).",
      "Increase the deceleration time in the drive to spread out the braking energy. For example, if stops were very abrupt, lengthen them so the motor acts as a generator for a longer time but with less peak power. This reduces the peak voltage generated. However, do not exceed what’s safe for stopping distance – there’s a balance between smooth decel and not overrunning limits.",
      "Enable dynamic braking functions and tune them. Many modern VFDs have parameters like “overvoltage control” that will automatically extend decel or modulate if DC bus gets too high. Ensure this is turned on. If it is on and still not enough, some drives allow attaching a regen unit (which feeds energy back to mains) – consider this if resistor solution is insufficient and the building power system can accept regen.",
      "Verify the sequence of operations for stopping: adjust the timing so that the mechanical brake engages promptly once the speed is near zero, to hold the load and relieve the drive from holding torque. A correctly adjusted system per EN 1808 will have the mechanical brake prevent any creeping after the drive is off.",
      "After implementing fixes, test by lowering the platform at full load (with extra precautions or lifelines in place). The VFD should decelerate without faulting. Monitor the DC bus during these tests if possible, and also measure resistor temperature. Continue to monitor in regular operation; no overvoltage faults should occur. Document this in the maintenance records as per BS 6037-1: a note that the braking system was improved and tested."
    ],
    "compliance_standard": "EN 1808 (requires controlled descent and secondary brake), BS 6037-1:2017",
    "confidence": "Medium"
  },
  {
    "id": "generic_hydraulic_cylinder_drift",
    "manufacturer": "Generic",
    "sub_system": "Hydraulics",
    "symptom_title": "Hydraulic cylinder drift (jib or mast slowly lowers on its own)",
    "symptom_details": [
      "When the hydraulic cylinder is supposed to hold position (e.g., jib extended or retracted to a set point), it gradually creeps from that position without input",
      "Over a few minutes, the jib might lower a noticeable amount, or the pantograph/scissor arm closes up slowly after being left extended",
      "No external oil leaks are visible, and the drift can happen even with the control valve in neutral"
    ],
    "technical_root_causes": [
      "Internal leaking in the cylinder (piston seal bypass): fluid is seeping from the high-pressure side of the cylinder to the low-pressure side past worn or damaged seals:contentReference[oaicite:45]{index=45}. This is a primary cause of drift when external leaks are absent.",
      "Faulty counterbalance (holding) valve or pilot-operated check valve: these valves are meant to lock the cylinder in place. If a counterbalance valve’s spring or seat is damaged, or if contamination prevents it from closing fully, the cylinder can drift down as oil bleeds through it:contentReference[oaicite:46]{index=46}.",
      "Thermal contraction/expansion: a lesser factor, but if a hot cylinder cools down, the oil volume contracts and can cause a slight drop. However, this would not typically cause continuous drift – continuous drift is more likely a leak.",
      "Control valve spool leakage: the directional control valve (DCV) that ports oil to the cylinder might be leaking internally (due to wear or debris). If the spool or poppet isn’t sealing in neutral, pressurized oil can flow to the tank or opposite side slowly.",
      "Flexible hose expansion: in some cases, hoses under pressure can expand or fittings give slightly, but again this usually stabilizes and is minor compared to seal leak issues."
    ],
    "diagnostic_steps": [
      "Step 1: **Secure the moving parts**. If the jib or platform is drifting down, ensure no one is under it and, if possible, support it with a mechanical prop or tie-off to prevent a sudden drop. Safety first before investigating.",
      "Step 2: Conduct a simple drift test. Fully extend (or position) the cylinder, then close the shut-off valves (if the circuit has manual line ball valves or if you can cap the lines). If the drift significantly reduces or stops with valves closed, it indicates the leak is likely not in the cylinder but in the valve path. If drift continues even when isolated, the cylinder seals are definitely suspect.",
      "Step 3: Check the counterbalance valve (if installed on that cylinder). These are often mounted directly on the cylinder or very near it. They have adjustments and locknuts. Do not adjust yet, but listen/feel if fluid is passing (some valves hiss or get warm when leaking internally). Remove and inspect the valve if possible: look for debris or damage on the valve poppet and seat. A bench test can be done by applying pressure to see if it holds or leaks down.",
      "Step 4: Sample the hydraulic oil for contamination. Use a clean bottle to take oil from the return line or tank. Inspect visually for particulates or water. For quantitative analysis, use ISO 4406 cleanliness code testing – for critical systems, should target something like **18/16/13 or cleaner**; higher numbers (e.g. 20/18/15, or if you see sludge) mean contamination that can cause valve wear:contentReference[oaicite:47]{index=47}. High particle counts can score seals and valves, causing leaks.",
      "Step 5: Check for external clues around the cylinder: even if you don’t see oil dripping, remove any protective boot or cover to inspect the rod seal area. Sometimes a leaking piston seal will push oil to the rod side, and if the rod seal is good it traps it, then that oil might vent later or during full retraction. An accumulation of oil on the rod or in the cylinder cushion area could hint at internal leakage.",
      "Step 6: Verify system pressure holding: install a pressure gauge on the cylinder’s pressure port. Command the cylinder to hold a load and watch the gauge after the valve is centered. If the pressure drops over time while load moves, note whether the drop is rapid or slow. A rapid drop with movement usually means a valve leak; a slow decay might be seal leak if volume is small. Also observe the tank line – sometimes you can detect a slight flow to tank via a transparent line or by sound if fluid is leaking through a valve to tank.",
      "Step 7: If the BMU has multiple cylinders (e.g., dual lift cylinders), try isolating one at a time if feasible to see which one drifts. This can pinpoint a leaking unit. In designs where two cylinders are plumbed together, one leaking can affect both – a careful isolation test is needed."
    ],
    "safety_hazards_and_warnings": [
      "A drifting cylinder can lead to **unexpected movement** of the BMU jib or platform. This is a serious safety concern – the equipment could move into building structure or drop people. Until fixed, the BMU should be parked or secured in a safe position and taken out of service.",
      "Be aware of **stored energy**: even if the platform has drifted down, the hydraulic system might still hold pressure. Before working on hydraulic components, release pressure safely. Use the manufacturer’s specified procedure (usually activating controls with power off to vent pressure, or cracking a fitting at a safe location with protective gear). Fluid under pressure can inject into skin, causing grave injuries.",
      "If you must prop the jib or structure, use rated support devices – never rely on improvised props. And never put any body part under an elevated load that is only hydraulically supported.",
      "Oil on floors from any leaks is a slip hazard – clean up spills promptly and use oil absorbent pads. Also, environmental note: dispose of waste oil and contaminated pads according to regulations."
    ],
    "remedial_actions": [
      "Replace or reseal the cylinder if internal leakage is confirmed. Typically, this involves removing the cylinder and either installing a new one or having it overhauled with new seals. After reinstallation, cycle it several times and re-check for drift under load. This is often the definitive fix for drift issues caused by worn piston seals.",
      "Repair or replace the counterbalance valve (or pilot check valve). If inspection shows debris, clean it and replace filters in the hydraulic system. If the valve seat is damaged or springs weakened, install a new valve. Set the new valve to the correct holding pressure as per manufacturer’s specs (often it’s set slightly above the load-induced pressure).",
      "Improve hydraulic fluid quality: filter or completely change the hydraulic oil. Bring the cleanliness to recommended levels (e.g., filter cart until sample tests come back around ISO code 16/14/11 or as advised by BMU maker). Continue with regular oil analysis every service interval – this can catch problems before they cause drift.",
      "If the control valve was suspected, consider lapping or replacing the valve. For solenoid directional valves, you often replace the whole valve block or cartridge if internal leak-by is out of tolerance. This should be done if cylinder and counterbalance don’t fully stop the drift.",
      "After all repairs, perform a **load-holding test** per **EN 1808** requirements: With a full load, extend the cylinder to a working position, then shut off power. Measure any settlement over e.g. 10 minutes. It should be within the allowable range (often a few millimeters, essentially zero noticeable movement). Only return the BMU to service if it passes this test.",
      "As a preventive measure, establish a routine to stroke the cylinders and maintain seals (e.g., occasionally coat the cylinder rods with a light film of oil if exposed to the elements to prevent corrosion which damages seals). Also ensure the BMU operators do not leave the jib extended with heavy load for long periods unnecessarily – if they do, instruct them to lower to a rest position or support if possible."
    ],
    "compliance_standard": "LOLER 1998 (Reg. 8 – prevent unintentional movement), ISO 4406/ISO 4309 for fluid and component care",
    "confidence": "High"
  },
  {
    "id": "generic_hydraulic_motion_jerky",
    "manufacturer": "Generic",
    "sub_system": "Hydraulics",
    "symptom_title": "Hydraulic movement is slow or jerky (lack of smooth operation)",
    "symptom_details": [
      "A hydraulic function of the BMU (such as telescoping jib or slewing) moves very slowly, lacks power, or jerks during operation",
      "Operators might hear the hydraulic pump running (motor noise) but the movement is sluggish or stalls under load",
      "In some cases, the motion starts then pauses and then continues (cavitating or air in system), often accompanied by oscillating sound or vibration"
    ],
    "technical_root_causes": [
      "Air in the hydraulic system causing *cavitation*: if air bubbles are present in the lines or cylinders, the compressibility of air leads to spongy, erratic motion and loss of force. This often happens after maintenance or due to a leak on the suction side of the pump letting air in.",
      "Low hydraulic fluid level or pump starvation: if the reservoir is low, the pump can suck air or insufficient fluid, leading to both air entry and inadequate pressure. Similarly, a clogged suction filter can cause the pump to starve and produce low/no flow.",
      "Contaminated or degraded hydraulic oil causing valves to stick or orifices to clog. For instance, dirt or sludge in a proportional valve can restrict flow, resulting in slow response. High contamination (ISO code higher than recommended, e.g., >19/17/14) correlates with such issues:contentReference[oaicite:48]{index=48}.",
      "Solenoid valve or control issue: a solenoid coil may be burnt out or weak, meaning a directional valve isn’t fully shifting – so you get partial flow. Alternatively, an electrical issue might only drive the valve partially (low voltage to coil). In manual valve systems, a partially open manual valve (due to linkage misadjustment) could do similar.",
      "Pressure relief valve malfunctioning or set too low: if the system’s relief valve is opening prematurely or stuck slightly open, the system can’t build full pressure. This makes all movements lack power and speed, especially under load, and may cause jerky motion as the valve chatters.",
      "Worn hydraulic pump: a pump that is worn (internal leakage) may not produce enough flow or pressure, especially noticeable under load – resulting in slow, weak cylinder movements."
    ],
    "diagnostic_steps": [
      "Step 1: **Check hydraulic fluid level** in the reservoir with the machine in the parked state (cylinders retracted as per manual). Ensure it meets the required level. If low, there may be a leak that allowed air to enter – you must find and fix any leak; simply refilling is not a complete solution.",
      "Step 2: Inspect for visible leaks or air ingestion points. Look at all hoses and fittings on the suction side (from tank to pump). A loose clamp or fitting might not leak oil out but can draw air in when the pump runs (often a source of cavitation). Also, check if the return line is properly submerged in the tank – if it’s above fluid level, it could be splashing and pulling in air.",
      "Step 3: Listen to the pump and observe the fluid in the reservoir while running a function. A crackling or “marbles” sound indicates cavitation. If present, stop and address it – prolonged cavitation damages the pump. If the fluid foams (lots of bubbles in tank), that confirms air ingress. You’ll need to bleed the system: identify bleed points on cylinders or cycle them slowly to purge air (with reservoir cap loose to let air escape).",
      "Step 4: Attach a pressure gauge to the hydraulic circuit. First, measure the system’s pressure when a function is operated against a stop (carefully “dead-head” a cylinder briefly). If the pressure is far below the spec (for instance, you only see 50 bar when it should achieve 150 bar), then suspect the relief valve or pump. Adjust the relief valve (if you have the authority and procedure) to see if pressure changes – if not, the valve could be stuck open or the pump can’t reach pressure. Also watch if pressure oscillates (could indicate chatter or air).",
      "Step 5: Test the solenoid valves. Manually override them if they have manual pushpins (some directional valves allow manual activation). Does the function move better with manual override? If yes, it could be an electrical issue (coil not energizing fully). Check each coil with a multimeter – measure its resistance and ensure it’s getting proper voltage when activated (often 24V DC in BMUs). A coil that reads open or very high resistance is burned out and won’t actuate the valve spool.",
      "Step 6: Evaluate fluid cleanliness: draw a sample and look for cloudiness or particles. If the oil is very dark or has water (milky), its viscosity or lubricity might be off, affecting performance. A lab analysis can reveal particle count and moisture. Sludge in valves can often be inferred if the machine has not had regular fluid changes – sticky or jerky movement is a classic symptom of gummy valves.",
      "Step 7: If possible, perform a flow test on the pump (this might require specialized equipment). For example, use a flow meter or see how quickly it can lift a known load vs. spec. If the pump flow is significantly reduced, that confirms wear. Pump internal leakage can also be assessed by measuring case drain flow (if excessive, pump is worn). This is an advanced diagnostic but important if other tests are inconclusive."
    ],
    "safety_hazards_and_warnings": [
      "Jerky or slow hydraulics can **suddenly lurch** if the issue clears (e.g., after an air pocket passes or a valve suddenly opens fully). Operators should use caution – execute movements at low speed until resolved, and keep people and objects clear of any potential swing or drop path.",
      "If you suspect a pressure relief is not working and pressure is low, be careful when adjusting it – do so gradually with proper gauges attached. Over-tightening a relief valve without knowing pump condition could lead to an overpressure and burst a hose or fitting, causing a high-pressure oil injection hazard.",
      "Hydraulic oil reaching auto-ignition on hot surfaces is a fire risk (though less common in BMUs than in industrial hydraulic units). Still, if you see mist or fine sprays (from a pinhole leak under pressure), treat it as flammable and remove ignition sources; plus, oil mist is respiratory irritant – wear appropriate mask if in a confined area with a suspected leak.",
      "Use gloves and eye protection when cracking open any hydraulic lines to bleed air. High-pressure oil can penetrate skin. Even low-pressure side can suddenly spurt hot oil or release a trapped pocket of high pressure. Always decompress the system via the proper procedure and assume lines may be under pressure."
    ],
    "remedial_actions": [
      "Purge air from the system and fix the source of air ingress: If the reservoir was low, top it up with the correct hydraulic fluid (viscosity per BMU manual, e.g., ISO VG32 or 46). Then bleed the system. Often cycling each function to full extension and retraction slowly, with a brief pause at limits, will push air back to tank. Install or repair any faulty suction line components (like replacing a cracked inlet hose or tightening fittings).",
      "Change the hydraulic filters and consider a full oil change if contamination is evident. Use filters of the correct micron rating (and don’t bypass them). After changing, run the system and then re-check the filter clog indicators (if present). This can greatly improve valve responsiveness if sludge was an issue.",
      "Replace any malfunctioning solenoid coils or entire valve cartridges if they are found to be sticking. If a coil is burned, ensure the root cause is addressed (coils burn usually from over-voltage or being energized too long under heat). Provide the correct voltage and duty cycle. Install new coils and test the actuation – you should hear a crisp click of the valve shifting and see smooth motion resume.",
      "Repair or replace the pump if it’s determined to be weak. Before replacement, double-check the relief valve isn’t simply set too low or leaking – you don’t want to swap a pump only to find it was a $50 valve. But if the pump is indeed worn (as indicated by inability to build pressure or significant internal leakage), install a new or rebuilt unit. Then adjust the system to spec pressure and verify full-speed operation of functions.",
      "After corrective actions, do a functional test under no load and full load. Movements should be smooth and at the normal speed as per O&M manual. Check that there is no more jerking – if slight air removal is still needed, continue to cycle. Also monitor the pump noise and temperature – a healthy system will sound steady and not overheat quickly. Log the maintenance action and any parameter adjustments for future reference."
    ],
    "compliance_standard": "BS 6037-1:2017 (Maintenance of hydraulic systems), EN 1808 (functional safety for drives)",
    "confidence": "Medium"
  },
  {
    "id": "generic_wire_rope_damage",
    "manufacturer": "Generic",
    "sub_system": "Wire Rope",
    "symptom_title": "Wire rope shows broken wires or deformation on inspection",
    "symptom_details": [
      "Visible broken strands or wires on the hoist rope – e.g., during routine check the engineer finds a number of broken outer wires in one section",
      "Reduction in rope diameter noted (rope feels undersized compared to new, or caliper measurement shows significant loss)",
      "Other deformities such as bird-caging (outer strands separated/bulging), kinked sections, crushed or flat spots on the rope, or a corroded, rusty appearance"
    ],
    "technical_root_causes": [
      "Normal wear and bending fatigue over time – as the rope passes over sheaves and drums, especially if of insufficient diameter, wires will eventually fatigue and break. This is expected over the rope’s life and is why regular inspections are required:contentReference[oaicite:49]{index=49}.",
      "Improper reeving or shock loads leading to **bird-caging or core failure**: e.g., a sudden stop (activation of the safety brake during a free-fall event) can cause the rope’s core to compress and strands to loosen (basket deformation). Similarly, if the rope was ever pulled over a sharp edge or twisted, structural damage can occur.",
      "Corrosion or lack of lubrication: in outdoor environments, ropes that aren’t well lubricated can corrode from inside. Corrosion pits the wires, reducing their cross-section and causing premature broken wires. This often goes unseen until wires start snapping or the rope diameter reduces from core deterioration.",
      "Contact with building or misused equipment: if the cradle was driven up against an obstruction, ropes might have been flattened or nicked. Also, painter’s hoists or other equipment sharing the rope could damage it (rare in a BMU context, but possible if rope was used in abnormal way).",
      "Overloading beyond rope SWL: lifting loads beyond rated capacity or with high dynamic forces (like swinging or snagging the cradle) can break wires or permanently stretch the rope."
    ],
    "diagnostic_steps": [
      "Step 1: **Count broken wires** over the lay length. Mark a starting point on the rope and count visible broken wires over a distance of one rope lay (the length in which a strand makes one full revolution around the rope). According to ISO 4309 criteria, for example, **if 6 or more wires are broken in one lay length for a single-layer rope of certain construction, it likely exceeds discard limits**:contentReference[oaicite:50]{index=50}. Different rope constructions have different limits, so consult the standard or manufacturer’s guidance for the specific rope type (RCN number).",
      "Step 2: Measure rope diameter at several points (at least 3). Use calipers or a rope gauge. If the diameter reduction exceeds 5-7% of nominal (commonly used threshold, exact per ISO 4309 and BS 7375), the rope should be discarded:contentReference[oaicite:51]{index=51}. Also check for localized necking which may indicate internal core failure.",
      "Step 3: Bend the rope to look for internal breakage. Gently flexing a suspect section can reveal “fishhooks” (broken wire ends that poke out) or a crunchy feel which suggests internal corrosion and broken wires inside not visible externally.:contentReference[oaicite:52]{index=52} Note: Wear heavy gloves to avoid pricks from broken wires.",
      "Step 4: Look at the rope termination (socket or wedge). Sometimes a lot of broken wires near the socket indicate that the termination is slipping or the rope has been spinning/twisting. Ensure the socket basket isn’t cracked and the wedge (if applicable) is properly seated. A failed termination can mimic rope failure symptoms.",
      "Step 5: If possible, conduct a **Magnetic Rope Test (MRT)**. This is a specialized NDT where a device scans the rope for internal broken wires and loss of metallic area. While not always available, it can detect internal corrosion or core breaks that visual exam might miss:contentReference[oaicite:53]{index=53}. This would give a quantifiable loss percentage to compare against standards.",
      "Step 6: Investigate the history: cross-reference inspection records. If this rope’s broken wire count jumped significantly since last inspection, that could indicate a one-time incident (like shock loading) rather than gradual wear. Try to identify any events (storm winds swinging the cradle, etc.) that might have caused the damage and inspect related components (like guides or buffer stops)."
    ],
    "safety_hazards_and_warnings": [
      "**Critical:** A damaged suspension rope is an immediate safety hazard. Per LOLER and ISO 4309, ropes failing criteria must be taken out of service:contentReference[oaicite:54]{index=54}. Do not allow the BMU to be used or the platform to be manned if the rope is at discard criteria or doubted in integrity.",
      "Avoid direct handling of frayed ropes without cut-resistant gloves. Broken wire ends are sharp and can cause lacerations. Also eye protection is advised when inspecting up close, in case a wire end flicks.",
      "When a rope shows serious defects like bird-caging or core protrusion, there is a risk of sudden rope failure. The platform should be **lowered to a safe rest position** (if it’s safe to do so) or evacuated via rescue procedures if lowering is unsafe. Consider using secondary tether lines as backup during such an emergency descent.",
      "Ensure no one is beneath the BMU during rope inspection or if rope condition is poor. If a rope were to fail, the platform or parts of it could fall from height, with obviously severe consequences.",
      "It’s good practice (and required by standards) to quarantine and tag the equipment ‘Do Not Use’ until the rope is replaced and the system re-certified. Also, notify building owners and relevant safety personnel immediately."
    ],
    "remedial_actions": [
      "Plan and execute a **rope replacement** as soon as possible. Order the correct specification rope from the manufacturer (exact length, construction, anti-rotation type if needed). Follow the BMU manual’s procedure for replacing the wire rope – typically one rope at a time if multiple, to maintain balance. This often requires a crane or suitable temporary attachment to take the cradle load during the swap.",
      "Before installing the new rope, fix any underlying issues that may have caused damage: e.g., if a sharp edge in the rope path or a bad sheave is identified, repair that (replace the sheave, add a proper thimble, etc.). Also ensure the rope tensioning and spooling system (like any reeler or tension spring) is working so the new rope doesn’t suffer the same fate.",
      "Lubricate the new rope appropriately (unless it comes pre-lubricated) with a lubricant that penetrates and is approved – lubrication reduces internal friction and corrosion. Going forward, implement a lubrication schedule if one is not in place.",
      "After rope replacement, perform a load test per BS 6037 / EN 1808 – usually a proof load (e.g., 1.25x SWL) is hoisted to ensure the rope and terminations are sound. This also helps the new rope to bed in. Then conduct another thorough inspection of the rope after the test (to ensure no immediate issues like slipping at terminations).",
      "Update the BMU’s rope log (many standards require keeping a record of rope usage, installation date, and inspections). If the rope had not reached typical discard time but failed early, increase the inspection frequency on the new rope and possibly have an expert assess if the rope construction is appropriate or if any machine aspect is causing undue wear (alignment of sheaves, fleeter device working, etc.).",
      "Dispose of the old rope properly – it should be cut up or clearly marked as scrap to prevent any reuse. Often for forensics, you may keep a sample section to show the pattern of failure (for insurance or analysis purposes, especially if multiple ropes in similar units are in question)."
    ],
    "compliance_standard": "ISO 4309:2017 (Wire rope discard & inspection):contentReference[oaicite:55]{index=55}; LOLER 1998 (Reg.9 Thorough exam of lifting accessories)",
    "confidence": "High"
  },
  {
    "id": "gind_limit_switch_failure",
    "manufacturer": "Gind",
    "sub_system": "Safety & Limits",
    "symptom_title": "Limit switch failed to stop travel (BMU overran safe position)",
    "symptom_details": [
      "During operation, the BMU did not stop at the designed end-of-travel point (e.g., cradle kept moving upward past its normal top position or trolley hit a mechanical end stop)",
      "An operator or safety system had to hit the emergency stop to halt the machine as the automatic limit did not engage",
      "Post-incident, the primary limit switch actuator was found bent or untriggered, and the “ultimate” (backup) limit might have engaged or a collision with physical stops occurred"
    ],
    "technical_root_causes": [
      "Defective limit switch device: the contacts inside the switch might have failed (e.g., welded shut from a previous overcurrent or simply broken), so it never opened the circuit when actuated:contentReference[oaicite:56]{index=56}. Thus the control circuit never received the stop signal.",
      "Limit switch misalignment or mechanical failure: the actuator (lever or plunger) was not properly reached by the machine part. This could be due to a shifted cam, a broken roller on the switch, or an out-of-adjustment condition where the switch triggers too late or not at all.",
      "Wiring or circuit fault: the limit switch might have functioned, but a broken wire or loose terminal in the limit switch circuit prevented the stop signal from reaching the control. In older designs, multiple limit switches are wired in series – if a wire came off one, it could disable that entire chain’s function.",
      "Bypassed or disabled limit: in rare cases, during maintenance someone might have bypassed the limit (jumpered it out) and forgotten to restore it. Alternatively, corrosion on terminals could effectively bypass (for instance bridging the circuit if water ingress occurred).",
      "Logic fault (PLC systems): if the limit switch is a sensor feeding a PLC, a software issue could ignore it. However, per EN 1808, the ultimate limits are hard-wired. This root cause is less likely unless the system was modified incorrectly."
    ],
    "diagnostic_steps": [
      "Step 1: **Do not move the BMU** until the cause is understood. Secure any immediate hazards (if the cradle is at a hard stop or entangled, support it if needed). Inspect the limit switch that failed – is the actuator arm or trigger visibly damaged or stuck? Manually operate the switch by hand (with power off) – you should hear a click. If it’s a mechanical switch, listen for the contacts. If it’s proximity sensor type, test it with a metal piece and see if its indicator LED functions.",
      "Step 2: Test the electrical continuity of the limit switch circuit. Use a multimeter on the switch terminals: activate the switch and see if the contact opens/closes as expected. If no change, the switch is bad internally. Also test the wiring from that switch back to the panel – there should be near zero ohms if wiring is intact (when switch is closed). Any open circuit or high resistance needs investigating.",
      "Step 3: Examine the cam or trip dog that engages the switch. Is it present and tight on the drive? Sometimes a setscrew loosens and the cam doesn’t rotate into position to hit the limit. Realign and tighten as necessary. Also verify the cam hasn’t sheared off. If adjustable, check it against drawings for correct positioning.",
      "Step 4: Check for environmental ingress. Open the limit switch enclosure – is there water, dirt, or corrosion? A limit on a rooftop BMU (e.g., boom top limit) could suffer water ingress (even if rated IP67, age can compromise seals). Corrosion could freeze the mechanism or short the contacts. Dry/clean it and see if that frees it, but replacement is usually safer if it got wet.",
      "Step 5: If the BMU uses an **ultimate limit** (final cut-off) in addition to the normal limit, inspect that as well. The ultimate limit likely did trigger if the primary failed (by design). Check its condition – ultimate limits often are one-time use or require manual reset. For instance, an ultimate upper limit might have a fused link or a spring-return that stays open once tripped. Ensure to reset/replace this after fixing the primary issue, and test it (with extreme caution or manually) to verify it will function in the future.",
      "Step 6: Review the control schematic to see how the limit integrates. If it’s hard-wired in series with contactor coils, a single fault will affect that coil. If PLC-monitored, retrieve any fault logs (the PLC might have logged an alarm if it noticed the limit did not change state when expected). This could give clues (like an alarm “Upper limit not seen”)."
    ],
    "safety_hazards_and_warnings": [
      "A limit switch failure that leads to overrun is a **serious near-miss**. The system’s safety redundancy prevented disaster (hopefully), but until corrected, the BMU is **not safe to operate**. Tag it out of service. Investigate all limit switches (not just the failed one) because they are critical for preventing falls or equipment damage.",
      "If the cradle hit a physical stop or an ultimate limit, inspect the structure and rope afterwards. An impact could have shock-loaded the ropes or the jib. Under LOLER, after an incident like this, a **thorough examination** is required before reuse.",
      "When testing limits after repair, do so in a controlled manner: for example, approach the limit slowly in manual mode with someone ready to hit E-stop. Ensure no personnel are in hazardous positions (e.g., on the rooftop near a moving jib or on the platform if it might overrun upward into an overhang).",
      "Always replace damaged limit switches with the exact type and rating. Using an incorrect replacement (different activation point or slower response) can be dangerous. And never bypass a limit switch even temporarily without strict procedural controls and safety measures; even in testing, mechanical stops/spotters should be in place."
    ],
    "remedial_actions": [
      "Replace the faulty limit switch. Given the critical nature, it’s best to install a new switch of the same model and ratings (temperature, IP rating, etc.). If the original failed due to environment, consider adding extra protection like a boot or shield, but ensure it doesn’t impede function.",
      "Correct the alignment: properly set the trip cam or actuator so that the switch activates at the precise point required. Follow Gind’s BMU manual or drawings for the correct positioning. Typically, the primary limit should engage slightly before any mechanical stop or ultimate limit, to allow a margin.",
      "Repair wiring issues: if a wire was found broken or a terminal loose, re-terminate with new ferrules or terminals. If corrosion was present in the conduit or junction box, clean or replace those sections. Ensure continuity and do a tug test on connections.",
      "Reset or replace the ultimate limit device if it was triggered. Many BMUs have a secondary cut-out (like a backup limit switch or a load sensing cut-off). This device may need manual resetting or even part replacement (some have sacrificial shear pins). Do not neglect this – the BMU should not run again until both primary and ultimate limits are confirmed working.",
      "Test all limit switches systematically: not just the one that failed. Use the maintenance mode to slowly approach each travel end and see that each limit stops motion. Simulate other safety limits (like slack rope, anti-collision sensors) as well to ensure the whole safety circuit is functional. This comprehensive test is part of the recommissioning process after a serious fault, fulfilling BS 6037-1:2017 recommendations for functional testing of safety devices.",
      "Document the incident and solution. Inform the client/owner about what went wrong and that it has been rectified. Update the maintenance records – including date of switch replacement and the fact that a full system test was done. This also helps future inspectors under LOLER know that this was addressed."
    ],
    "compliance_standard": "BS 6037-1:2017 (Section on safety device testing), EN 1808 (required two independent limit switches)",
    "confidence": "High"
  },
  {
    "id": "facadehoists_safety_circuit_lockout",
    "manufacturer": "Facade Hoists",
    "sub_system": "Safety & Limits",
    "symptom_title": "Safety circuit locked out – BMU will not power up or move",
    "symptom_details": [
      "The BMU is unresponsive; the main power is on but control circuit is disabled (no motion when joystick or buttons are pressed)",
      "A safety indicator or fault lamp is lit on the panel (for example, an E-stop tripped indicator, or simply a generic fault light stays on):contentReference[oaicite:57]{index=57}",
      "Operators report that an emergency stop was activated earlier or a safety device (like overload sensor) tripped, and now the machine cannot be restarted even after apparent reset"
    ],
    "technical_root_causes": [
      "An emergency stop button or emergency pull-cord is still activated or faulty. Often BMUs have multiple E-stop buttons (on the cradle, roof unit, maybe ground). If any one is stuck in the pressed position or its contacts are failing open, the safety circuit remains open and prevents startup.",
      "A limit switch or other safety sensor is engaged or failed in the open state. For instance, a top limit might be stuck tripped or an overspeed brake sensor has latched. Some BMUs won’t reset until these are physically reset or the condition clears (e.g., slack rope switch still thinks rope is slack).",
      "Failure of the safety relay or control relay circuit that latches the safety circuit. Many modern systems use safety relays that monitor E-stop circuits. If one of these relays detected a fault (like a contact weld) it will go into a lockout state:contentReference[oaicite:58]{index=58}. A dual-channel safety relay can also refuse to reset if the two channels are not changing state simultaneously (indicating a wiring issue).",
      "Blown fuse or tripped circuit in the safety chain. Some systems have fuses on the safety circuit (for indicator lights, etc.). If a fuse blows, it could simulate an open E-stop. Similarly, if the BMU has an automatic overload cutoff, it might blow a control fuse when triggered (depending on design).",
      "Access interlocks engaged: On some installations, there are cradle gate interlocks or roof parking pin sensors that must be in a certain state to allow operation. If, say, a gate switch is open (gate not closed) or a travel limit is not in the run position, the control circuit stays locked out."
    ],
    "diagnostic_steps": [
      "Step 1: **Visually check all emergency stops and interlocks**. Go to each E-stop station (cradle, roof, any remote pendant) and ensure the buttons are released (twist or pull as design requires). Don’t forget any hidden ones (sometimes inside control cabinets or at remote pull cords). Verify any maintenance mode switches or key switches are in the normal position as well.",
      "Step 2: Look at the control panel indicators. Many systems have specific lights for certain safeties. For example, a light for “Overload” or “Limit Switch Tripped”. If any of those are lit, follow that lead: e.g., if “Overload” is lit, maybe the overload sensor on the cradle is still active – perhaps the last lift genuinely overloaded and needs resetting (some overload devices have a manual reset or require the excess load to be removed).",
      "Step 3: Using a multimeter, test the continuity of the safety circuit loop. This is often a series loop through all stops and safeties. Identify the terminals in the panel (schematic helps) where the E-stop chain begins and ends. You should read a closed circuit (near 0Ω) when all is normal. If it’s open (infinite resistance), systematically jump out or short one device at a time (temporarily for testing) to see when continuity returns. For instance, short across the E-stop terminals – if it closes, the issue is an E-stop or its wiring. If not, move to the next device (limit chain, etc.). **Perform this with control power off (no voltage) and only for diagnostics, not to actually run the machine bypassed**.",
      "Step 4: Inspect the safety relay (if equipped). Many have LED indicators for each channel and for the reset status. For example, Pilz or similar relays might show channel 1 and 2 status. If one channel LED is off, that channel’s circuit is open. If both on but the relay won’t reset, it might indicate a discrepancy or internal fault. Try a power cycle reset of the relay if the manufacturer allows (some require a manual reset button to be pressed). If the relay module itself is suspected, you may need to replace it with the same model.",
      "Step 5: Check less obvious interlocks: Is the cradle fully lowered into parking position? Some BMUs have a parking sensor that must be disengaged for travel, etc. Or an anemometer (wind speed sensor) could be preventing operation if winds are above threshold or if the sensor failed. See if the wind alarm is on. If so and wind is calm, the sensor or its connection might be bad.",
      "Step 6: Examine wiring for any recent work. If recently maintenance was done, a wire might have been left disconnected. Particularly, look at terminal strips where control cables connect – an entire subset of safeties could be on one plug that was not reconnected. Also, check for broken cable at hinge points (like where cradle cable connects to roof trolley – if that cable carries the E-stop circuit, it could have snapped with constant movement)."
    ],
    "safety_hazards_and_warnings": [
      "The BMU failing to reset is a protective measure – **do not bypass safety circuits for actual operation**. It may be tempting to jumper something to get running, but that could mask a serious unresolved issue and lead to an accident.",
      "While troubleshooting, ensure the BMU is in a safe state: if it’s stuck mid-facade, secure the platform with secondary means if possible (tie-back lanyards or similar). If at roof, make sure it’s not going to suddenly move when the circuit closes.",
      "If you need to test by bypassing a safety (for instance, to see if a certain switch is the culprit), do so only momentarily and with the machine immobilized. For example, if bypassing a limit, keep power off to the motors – you’re just checking circuit logic, not moving.",
      "Document any bypasses or resets performed. It's critical for handover – the next person must know if any safety device has been put out of operation or needs re-adjustment.",
      "Use proper lockout/tagout if multiple people are involved or if you leave the machine while in a half-fixed state. For instance, if you determine an E-stop is faulty and you go to get a replacement, lock the panel so no one unknowingly tries to power it up."
    ],
    "remedial_actions": [
      "Identify and fix the specific trigger: For example, if an emergency stop station was found defective (e.g., contacts not closing when released), replace that E-stop switch with a new unit of equal spec. Similarly, if a limit switch was stuck, repair/replace it. Only use compatible components to maintain the safety rating.",
      "Once the offending device is replaced or reset, restore the circuit and test all safety functions: Hit each E-stop to verify it indeed cuts power and releases properly, trigger each limit (slowly, in a controlled way), test the overload by a load test if applicable, and check the wind speed cutoff by manually triggering the anemometer or its relay. This ensures the entire safety chain is functional and not just the one element.",
      "Replace the safety relay module if it was found to be faulty or if it had latched due to internal diagnostics. Use the exact model (to ensure compliance with Category 3/4 requirements). Wire it according to the original schematic and then test the reset functionality: the BMU should start only when all E-stops are released and the reset button (if any) is pressed in accordance with the design.",
      "If wiring issues were found (such as a broken conductor in a pendant cable), repair the wiring with suitable ferrules and strain relief. For instance, if the cradle umbilical cable had an internal break, replace the section of cable or the whole cable – since a repaired break in a safety circuit should be done with high integrity or ideally new wire. Then re-run continuity tests.",
      "Perform a formal **function test** and **thorough examination** before returning to service. According to LOLER, after a significant fix to safety systems, a competent person should do a thorough exam. This might include doing a full operational run: moving the BMU in all directions, ensuring each safety kicks in at the right point (e.g., buffers and limit switches) and that the machine can be properly reset after each activation. Only after passing all these checks should the machine be signed off for use.",
      "Communicate with the building owner/maintenance manager about what caused the stoppage. For instance, if it was due to an overload event, re-educate operators on weight limits. If it was due to a wind alarm, maybe the wind speeds were excessive and they did the right thing – but also ensure the anemometer calibration is correct (often they trigger at ~15 m/s per EN 1808). Provide any necessary training or updates to prevent future false triggers or misuse."
    ],
    "compliance_standard": "LOLER 1998 (Reg. 8 - safety devices must be working), EN 1808 (safety interlocks and emergency stop circuit requirements)",
    "confidence": "High"
  }
]

