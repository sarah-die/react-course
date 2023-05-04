import React, { useRef, useState } from "react";

export function App() {
  const [formData, setFormData] = useState({});
  // Referenzcontainer (alternativ zum Formular) -> diesen hier als Ref-Attribut an Input-Feld weitergeben
  const textFieldRef = useRef();

  const formSubmitted = (submitEvent) => {
    // neuladen (standard Ausführung des Events) unterdrücken mit prevent.Default()
    submitEvent.preventDefault();
    const form = submitEvent.target;
    // alle formControls
    const formControls = form.elements;
    // const fullnameInput = formControls.fullname (verlinkt via htmlFor)
    // Alternative zum Formular: Referenzen zu einzelnen Input-Feldern erzeugen
    const fullnameInput = textFieldRef.current;
    const birthdateInput = formControls.birthdate;

    // Werte aus Feldern auslesen
    const fullname = fullnameInput.value;
    const birthdate = birthdateInput.value;

    // Werte in den State setzen
    setFormData({ fullname, birthdate });
  };

  return (
    <>
      <header>
        <h1>Uncontrolled Forms</h1>
      </header>

      <main>
        // onSubmit = eventListener
        <form onSubmit={formSubmitted}>
          <fieldset>
            <legend>Persönliche Daten</legend>

            <p>
              <label htmlFor="fullname">Name:</label>
              <br />
              <input
                // Alternativ zu Formularen via Referenzen
                ref={textFieldRef}
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Ihr Name"
              />
            </p>

            <p>
              <label htmlFor="birthdate">
                Geburtstag:
              </label>
              <br />
              <input
                type="date"
                id="birthdate"
                name="birthdate"
              />
            </p>

            <p>
              <button type="submit">
                Formular absenden
              </button>
            </p>
          </fieldset>
        </form>

        <h2>Abgesendete Daten:</h2>
        // Daten ausgeben:
        {JSON.stringify(formData)}
      </main>
    </>
  );
}
