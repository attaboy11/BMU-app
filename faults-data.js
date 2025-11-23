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
