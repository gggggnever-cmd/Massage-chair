// Massage programs, transcribed from the chair's manual ("Controller Instructions", pp. 8–9).
// `tags` drive the "How do you feel?" filters. `strength` is only set where the manual says it.
// `unclear: true` = part of the manual text was hard to read in the photo; wording may be refined.

window.MODES = [
  // ---- Main program buttons (left side of the remote) ----
  {
    id: "comfort", group: "main", name: "Comfort Massage", icon: "🌸",
    short: "Moderate strength, light and graceful.",
    desc: "Moderate massage strength, specially designed for female users, providing a massage program that shapes a graceful and light figure without burden.",
    strength: "Moderate",
    tags: ["relax"],
    how: "Press the Comfort Massage button."
  },
  {
    id: "quick", group: "main", name: "Quick Massage", icon: "⏱️",
    short: "Fast full combination when you're short on time.",
    desc: "Quick and precise combination massage, saving time and relaxing the body.",
    tags: ["quick", "relax"],
    how: "Press the Quick Massage button."
  },
  {
    id: "stretch", group: "main", name: "Stretch Massage", icon: "🧘",
    short: "Full-body stretch for stiff muscles.",
    desc: "Full-body stretching to cater to users who need to stretch their muscles, relieving fatigue and restoring body vitality and flexibility.",
    tags: ["stiff", "tired"],
    how: "Press the Stretch Massage button."
  },
  {
    id: "sleep", group: "main", name: "Good-night Sleep", icon: "🌙",
    short: "Gentle wind-down before bed.",
    desc: "Gentle massage with coordinated movements, alleviating fatigue and promoting a restful sleep, easing tension for a serene slumber.",
    strength: "Gentle",
    tags: ["sleep", "gentle", "relax"],
    how: "Press the Good-night Sleep button."
  },
  {
    id: "neck", group: "main", name: "Shoulder & Neck", icon: "🦒",
    short: "Targets sore shoulders and neck.",
    desc: "Unique massage techniques targeting the shoulders and neck, effectively relieving shoulder and neck soreness and improving fatigue.",
    tags: ["neck"],
    how: "Press the Shoulder & Neck button."
  },
  {
    id: "airbag", group: "main", name: "Airbag Massage", icon: "🎈",
    short: "Gentle squeezing waves, whole body.",
    desc: "Gentle and sequential compression by airbags, progressively providing deep relaxation and decompression throughout the entire body.",
    strength: "Gentle",
    tags: ["gentle", "relax"],
    how: "Press the Airbag Massage button."
  },
  {
    id: "sport", group: "main", name: "Sport Recovery", icon: "🏋️",
    short: "After a workout — neck, back, waist, legs.",
    desc: "Relieves post-exercise muscle soreness, discomfort in the neck, shoulders, back, waist, and legs, and helps muscles recover after exercise.",
    tags: ["workout", "neck", "back", "legs"],
    how: "Press the Sport Recovery button."
  },

  // ---- More Mode (b1–b8) ----
  {
    id: "b1", group: "more", name: "b1 · Gentle Whole Body", icon: "🍃",
    short: "Gentle, whole body — great after a long workday.",
    desc: "Gentle massage strength. Comforts the whole body, promotes blood circulation, relaxes the body and mind, effectively relieves various discomforts caused by long and continuous work, and eliminates overall fatigue.",
    strength: "Gentle",
    tags: ["gentle", "tired", "relax"],
    how: "Press More Mode, then pick b1."
  },
  {
    id: "b2", group: "more", name: "b2 · Thai Style", icon: "💪",
    short: "Thai techniques — the strong one.",
    desc: "Simulates the techniques used in Thai massage, with a stronger intensity, providing a relaxing experience for the entire body.",
    strength: "Strong",
    tags: ["strong", "stiff"],
    how: "Press More Mode, then pick b2."
  },
  {
    id: "b3", group: "more", name: "b3 · Waist & Hips", icon: "🍑",
    short: "Lower back, waist and hips.",
    desc: "Unique massage techniques targeting the waist and hips, effectively relieving waist and hip soreness and improving lower back fatigue.",
    tags: ["back"],
    how: "Press More Mode, then pick b3."
  },
  {
    id: "b4", group: "more", name: "b4 · Spine", icon: "🦴",
    short: "Along the spine.",
    desc: "Unique massage techniques targeting the spine, effectively relieving spinal soreness and fatigue.",
    tags: ["back"],
    unclear: true,
    how: "Press More Mode, then pick b4."
  },
  {
    id: "b5", group: "more", name: "b5 · Fatigue Relief", icon: "☁️",
    short: "Gentle, relieves physical fatigue.",
    desc: "Gentle massage to relieve physical fatigue, relax the body and mind, and boost vitality.",
    strength: "Gentle",
    tags: ["gentle", "tired", "relax"],
    unclear: true,
    how: "Press More Mode, then pick b5."
  },
  {
    id: "b6", group: "more", name: "b6 · Kneading Hands", icon: "🤲",
    short: "Kneading + acupressure, like real hands.",
    desc: "Utilizing kneading and acupressure massage techniques, as if gentle hands are providing a deep massage to soothe weariness and tension.",
    tags: ["tired", "stiff", "relax"],
    how: "Press More Mode, then pick b6."
  },
  {
    id: "b7", group: "more", name: "b7 · Varying Pressure", icon: "🌊",
    short: "Changing pressure for sore muscles.",
    desc: "Gradually applies varying levels of pressure to the entire body, effectively alleviating muscle soreness and promoting the recovery from fatigue.",
    tags: ["workout", "tired"],
    how: "Press More Mode, then pick b7."
  },
  {
    id: "b8", group: "more", name: "b8 · Extra Soft", icon: "🪶",
    short: "The softest one — rejuvenating, good circulation.",
    desc: "Soft massage suitable for older users, effectively rejuvenating the body and improving blood circulation.",
    strength: "Soft",
    tags: ["gentle", "relax"],
    how: "Press More Mode, then pick b8."
  }
];

window.MOODS = [
  { id: "all",     label: "Show all",          icon: "✨" },
  { id: "relax",   label: "Just relax",        icon: "😌" },
  { id: "sleep",   label: "Before bed",        icon: "😴" },
  { id: "tired",   label: "Long day",          icon: "😮‍💨" },
  { id: "workout", label: "After workout",     icon: "🏋️" },
  { id: "neck",    label: "Neck & shoulders",  icon: "🦒" },
  { id: "back",    label: "Lower back",        icon: "🍑" },
  { id: "stiff",   label: "Feeling stiff",     icon: "🧘" },
  { id: "gentle",  label: "Go gentle",         icon: "🪶" },
  { id: "strong",  label: "Go strong",         icon: "💪" },
  { id: "quick",   label: "Short on time",     icon: "⏱️" }
];
