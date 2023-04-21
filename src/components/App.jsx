import React, { useCallback, useEffect, useMemo, useState } from "react";

export function App() {
  const [countdown, setCountdown] = useState(5);

  // timeoutFunc wird bei jedem Aufruf neu erzeugt und hat deshalb immer die korrekte Referenz auf "countdown"
  // useCallback, um permanentes neu erzeugen zu optimieren
  // Funktion, die useCallback übergeben wird, wird jedesmal neu definiert (statt aufgerufen) wenn es Änderungen gibt
  // kein depArray = bei jedem Change
  // leeres depArray = einmal beim mounten
  // Funktion soll nur dann neu definiert werden, wenn sich der Countdown-Wert ändert -> dep[countdown]
  // FUnktion wird nur dann neu definiert, wenn notwendig -> Perfomance top!
  const timeoutFunc = useCallback(
      // Funktionslogik ist ausgelagert aus useEffect
      () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  }, [countdown]);

  const timeoutFunc2 = useMemo(
      () => () => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        }
      }, [countdown]);

  useEffect(() => {
    const ref = setTimeout(timeoutFunc, 1000);

    return () => clearTimeout(ref);
  }, [countdown]);

  const markup = useMemo(
      // die folgende Funktion definiert den Wert und gibt das markup zurück
      // markup verändert sich nur, wenn sich countdown value ändert -> ins depArray
      () => {
    return (
      <div>
        <h1>Countdown</h1>
        <p>{countdown}</p>
        <progress value={countdown} min="0" max="5" />
      </div>
    );
  }, [countdown]); // componentShouldUpdate (if countdown...)

  return markup;
}
