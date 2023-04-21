import React, {useCallback, useEffect, useState} from "react";

/**
 * Nutzen Sie diese Funktion um
 * Stunden, Minuten, Sekunden und Hundertstel
 * als Text zu formatieren
 */
function formatTime(hours, minutes, seconds, hundreds) {
  const [hoursText, minutesText, secondsText, hundredsText] = [
    hours,
    minutes,
    seconds,
    hundreds,
  ].map((i) => `${i}`.padStart(2, 0));

  return `${hoursText}:${minutesText}:${secondsText} '${hundredsText}`;
}

/**
 * Mit dieser Funktion können Sie Millisekunden
 * in seine Bestandteile
 * Stunden, Minuten, Sekunden und Hundertstel
 * aufsplitten
 */
export function millisecondsToParts(milliseconds) {
  const secondsFloat = milliseconds / 1000;
  const HOURS_IN_SECONDS = 60 * 60;

  const hours = Math.floor(secondsFloat / HOURS_IN_SECONDS);
  const minutes = Math.floor((secondsFloat % HOURS_IN_SECONDS) / 60);
  const seconds = Math.floor(secondsFloat % 60);
  const hundreds = (secondsFloat % 1).toFixed(2).substring(2);

  return [hours, minutes, seconds, hundreds];
}

export function App() {
  // Schritt 1: Statische Werte verarbeiten
  // Schritt 2: Buttons klickbar machen
  // Schritt 3: Startbutton
  // Schritt 4: Pausebutton
  // Schritt 5: Stopbutton
  // const timePassedInMs0 = 10500; // 10,5 Sekunden

  const [timePassedInMs, setTimePassedInMs] = useState(0);
  // notStarted, paused, running
  const [clockState, setClockState] = useState("notStarted");

  // wenn clockState = running, soll timePassed hochgezählt werden
  useEffect(() => {
    const ref = setInterval(() => {
      if (clockState === "running") {
        setTimePassedInMs(timePassedInMs + 100);
      }
    }, 100)

    //notwendig? -> ja, sonst funktioniert der direkte reset auf Stopp nicht
    return () => clearInterval(ref);
  }, [clockState, timePassedInMs])

  const resetTimer = useCallback(() => {
    // if (timePassedInMs !== 0 && clockState !== "notStarted") {
      setTimePassedInMs(0);
      setClockState("notStarted");
    // }
  }, [])

  return (
    <div>
      <h1>Stoppuhr</h1>
      <p>{formatTime(...millisecondsToParts(timePassedInMs))}</p>
      <div>
        <button type="button" onClick={() => {setClockState("running")}} >Start</button>
        <button type="button" onClick={() => {setClockState("paused")}}>Pause</button>
        <button type="button" onClick={() => {resetTimer()}}>Stopp</button>
      </div>
    </div>
  );
}
