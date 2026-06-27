"use client";

import { useMemo, useState } from "react";

const checklistOptions = {
  patient: [
    { label: "Looks normal", score: 0 },
    { label: "Looks suspicious", score: 2 }
  ],
  symptoms: [
    { label: "Treatment matches symptoms", score: 0 },
    { label: "Symptoms are unclear", score: 1 }
  ],
  room: [
    { label: "No visible room change", score: 0 },
    { label: "Room changed", score: 2 }
  ],
  object: [
    { label: "No object change", score: 0 },
    { label: "Object moved", score: 1 }
  ],
  behavior: [
    { label: "No extra clue", score: 0 },
    { label: "Sound or behavior changed", score: 2 }
  ]
};

const emergencyScenarios = [
  {
    label: "Patient behavior seems wrong",
    steps: [
      "Pause before treatment and re-check the patient model, animation, and behavior.",
      "Compare the patient against the room state and any sound cues.",
      "If more than one cue feels off, treat the case as suspicious until verified."
    ]
  },
  {
    label: "Treatment choice is unclear",
    steps: [
      "Read the symptoms again before choosing an action.",
      "Check whether the room or patient behavior changed while you were deciding.",
      "Avoid guessing if the case has unclear symptoms plus another suspicious cue."
    ]
  },
  {
    label: "Room feels changed",
    steps: [
      "Check the room layout first, then nearby objects, then patient behavior.",
      "Look for moved items or a mismatch from what you saw at entry.",
      "Continue only after the room cue has been confirmed or ruled out."
    ]
  },
  {
    label: "Multiple things changed at once",
    steps: [
      "Stop the normal treatment rhythm and scan from the room outward.",
      "List the changed cues before taking the next action.",
      "Treat overlapping changes as high suspicion unless official or in-game evidence says otherwise."
    ]
  },
  {
    label: "You failed a shift",
    steps: [
      "Review the last patient, symptom choice, room state, and object changes in that order.",
      "Separate confirmed clues from guesses or community claims.",
      "Use the next run to test one observation habit instead of changing everything at once."
    ]
  }
];

export default function ChecklistTools() {
  const [checks, setChecks] = useState({
    patient: 0,
    symptoms: 0,
    room: 0,
    object: 0,
    behavior: 0
  });
  const [scenarioIndex, setScenarioIndex] = useState(0);

  const result = useMemo(() => {
    const score = Object.values(checks).reduce((total, item) => total + item, 0);

    if (score >= 5) {
      return {
        label: "High Suspicion",
        className: "border-coral bg-red-50 text-red-900",
        copy: "Pause the shift rhythm and verify the anomaly before taking a risky action."
      };
    }

    if (score >= 2) {
      return {
        label: "Needs Check",
        className: "border-yellow-400 bg-yellow-50 text-yellow-900",
        copy: "Observe the patient, room, object state, and sound cues again before acting."
      };
    }

    return {
      label: "Low Risk",
      className: "border-mint bg-green-50 text-green-900",
      copy: "Continue normal treatment, but keep the same observation order for the next patient."
    };
  }, [checks]);

  const scenario = emergencyScenarios[scenarioIndex];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black">Anomaly Checklist Tool</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Use this as a first-pass check. It does not claim every anomaly is known.
        </p>

        <div className="mt-5 grid gap-4">
          {Object.entries(checklistOptions).map(([key, options]) => (
            <fieldset key={key} className="rounded-md border border-gray-200 p-3">
              <legend className="px-1 text-sm font-black capitalize text-ink">
                {key}
              </legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {options.map((option) => (
                  <label
                    key={option.label}
                    className="flex min-h-12 cursor-pointer items-center gap-2 rounded-md bg-gray-50 px-3 py-2 text-sm font-bold text-gray-700"
                  >
                    <input
                      checked={checks[key as keyof typeof checks] === option.score}
                      className="h-4 w-4 accent-coral"
                      name={key}
                      onChange={() =>
                        setChecks((current) => ({
                          ...current,
                          [key]: option.score
                        }))
                      }
                      type="radio"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        <div className={`mt-5 rounded-md border p-4 ${result.className}`}>
          <p className="text-lg font-black">{result.label}</p>
          <p className="mt-1 text-sm leading-6">{result.copy}</p>
        </div>
      </section>

      <section className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black">Emergency Solver</h2>
        <label className="mt-4 block text-sm font-black text-ink" htmlFor="scenario">
          Current problem
        </label>
        <select
          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm font-bold text-ink"
          id="scenario"
          onChange={(event) => setScenarioIndex(Number(event.target.value))}
          value={scenarioIndex}
        >
          {emergencyScenarios.map((item, index) => (
            <option key={item.label} value={index}>
              {item.label}
            </option>
          ))}
        </select>

        <div className="mt-5 rounded-md bg-gray-50 p-4">
          <p className="font-black">{scenario.label}</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-gray-700">
            {scenario.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
