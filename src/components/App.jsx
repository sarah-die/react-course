import React from "react";
import { OpenToWorkContext } from "../OpenToWorkContext";
import { BusinessProfile } from "./BusinessProfile";

export function App() {
  return (
    <div>
      <h1>Contexts &amp; Theming</h1>

      <BusinessProfile
        name="David Lorenz"
        job="Frontend Architect"
      />

    // Context als Wrapper für den OpenToWork Bereich
    // Definition vom Kontext:
    // Initialwert wird durch Value überschrieben

      <OpenToWorkContext.Provider value={true}>
        <div>
          <h2>Open to work:</h2>

          <BusinessProfile
            name="Maus"
            job="Käse essen"
          />

          <BusinessProfile
            name="Pflanze"
            job="Luft aufbereiten"
          />
        </div>
      </OpenToWorkContext.Provider>
    </div>
  );
}
