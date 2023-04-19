import React, { useEffect, useState } from "react";

export function App() {
    // neuer State
  const [countdown, setCountdown] = useState(10);

  // Alternativ zu componentDidMount
  // erster Parameter: Funktion, die bei jeder Änderung der Komponente aufgerufen wird
  useEffect(() => {
    const ref = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    // aufräumen
    return () => clearTimeout(ref);
    // zweiter Parameter nimmt dep-Array entgegen
  }, [countdown]);

  // kein dep-Array = auf jedes Update reagieren
  // leeres Array beim Mounten:
  //const ref = setIntervall(() => {
  //    if (countdown > 0) {
  //        setCountdown(countdown - 1);
  //    }
  //}, 1000);
  // dep = in Abhängigkeit von Änderungen derer

  return (
    <div>
      <h1>Countdown</h1>
      <p>{countdown}</p>
      <progress value={countdown} min="0" max="10" />
    </div>
  );
}
