import React, { useState } from "react";

export function App() {
  const [formData, setFormData] = useState({});
  // Datumsfeld an-/ ausschalten
  // wenn das Feld an ist und ein Datum eingegeben wird, dann aus, wieder anschalten. Datum ist weg, weil Feld neu gerendert wird und die Daten nicht persistent sind
  const [showDate, setShowDate] = useState(true);

  // states verwenden, um Persistenz herzustellen
  // diese States als values im InputField verwenden
  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const formSubmitted = (submitEvent) => {
    submitEvent.preventDefault();

    setFormData({ fullname, birthdate });
  };

  const fullnameChanged = (event) => {
    // wenn das Event (onInput) triggert, wollen wir den Value holen und im state speichern
    setFullname(event.target.value);
  };

  const birthdateChanged = (event) => {
    // wenn das Event (onInput) triggert, wollen wir den Value holen und im state speichern
    setBirthdate(event.target.value);
  };

  return (
    <>
      <header>
        <h1>Controlled Forms ✅</h1>
      </header>

      <main>
        <form onSubmit={formSubmitted}>
          <fieldset>
            <legend>Persönliche Daten</legend>

            <p>
              <label htmlFor="fullname">Name:</label>
              <br />
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Ihr Name"
                // value={myState}
                value={fullname}
                // onInput = reagiert auf Änderungen
                onInput={fullnameChanged}
              />
            </p>

            {showDate && (
              <p>
                <label htmlFor="birthdate">
                  Geburtstag:
                </label>
                <br />
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  // onInput = reagiert auf Änderungen
                  onInput={birthdateChanged}
                  // value={myState}
                  value={birthdate}
                />
              </p>
            )}
            <button
              type="button"
              // onClick-Listener
              onClick={() => setShowDate(!showDate)}
            >
              Geburtstag an/aus
            </button>

            <p>
              <button type="submit">
                Formular absenden
              </button>
            </p>
          </fieldset>
        </form>

        <h2>Abgesendete Daten:</h2>
        {JSON.stringify(formData)}
      </main>
    </>
  );
}
