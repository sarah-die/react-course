import React, { useState } from "react";

// ToDo
// CheckBox statt ToggleButton
// Daten dürfen beim Absenden das Geburtsdatum nicht beinhalten, wenn es nicht angewählt wurde
// bel. select-Feld mit Werten meiner Wahl hinzufügen
// alle zu sehenden Felder sind Pflichtfelder -> Formular kann nur abgesendet werden, wenn kein leeres Feld

export function App() {
  const [formData, setFormData] = useState({});
  const [showDate, setShowDate] = useState(true);

  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [mySelect, setMySelect] = useState("male");

  const formSubmitted = (submitEvent) => {
    // if (checkSubmit()) {
      submitEvent.preventDefault();
      if (showDate) {
        setFormData({ fullname, birthdate, mySelect });
      } else {
        setFormData({ fullname, mySelect });
      }

      // Alternativ:
      // let formData = { fullname, mySelect };
      // if (showDate) {
      //   formData.birthdate = birthdate;
      // }
      // setFormData(formData);

    // }
  };

  // besser: an Felder "required"-Attribut setzen
  // const checkSubmit = () => {
  //   if (fullname === "" || birthdate === "") {
  //     return false;
  //   }
  //   return true;
  // }

  const fullnameChanged = (event) => {
    setFullname(event.target.value);
  };

  const birthdateChanged = (event) => {
    setBirthdate(event.target.value);
  };

  const genderChanged = (event) => {
    setMySelect(event.target.value);
  }

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
                value={fullname}
                onInput={fullnameChanged}
                required
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
                  onInput={birthdateChanged}
                  value={birthdate}
                  required
                />
              </p>
            )}
            <>
              <input
                id={"geburtstagCheckbox"}
                type={"checkbox"}
                onChange={() => setShowDate(!showDate)}
                checked={showDate}
              ></input>
              <label
                htmlFor={"geburtstagCheckbox"}>
                Geburtstag an/aus
              </label>
            </>
            <p>
              <label htmlFor="mySelect">
                Geschlecht:
              </label>
              <br />
              <select value={mySelect} name="gender" onChange={genderChanged}>
                <option value={"male"}>männlich</option>
                <option value={"female"}>weiblich</option>
                <option value={"divers"}>divers</option>
              </select>
            </p>

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
