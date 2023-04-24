import React, { useState } from "react";

export function App() {
  const [headline, setHeadline] = useState("");
  const [inputValue, setInputValue] = useState("");

  const buttonClicked = () => {
      // alert("Button was clicked!")
    setHeadline(inputValue);
  };

  // Input vom Textfeld auslesen
  const inputChanged = (event) => {
      // event.target = Referenz zu Input-Element
      // mit value auf den Wert zugreifen
    setInputValue(event.target.value);
  };

    // onInput = Input-Event
  return (
    <div>
      <h1>{headline}</h1>
      <input type="text" onInput={inputChanged} />
      <br />
      <button type="button" onClick={buttonClicked}>
        Make me big!
      </button>
    </div>
  );
}
