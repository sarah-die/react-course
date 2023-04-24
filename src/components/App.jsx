import React, {useCallback, useEffect, useMemo, useState} from "react";

// x und y werte des Mauszeigers auslesen und anzeigen
// über on/ off Button anzeigen bestimmen
// mit Escape soll der Ursprungszustand erreicht werden

export function App() {
  const [xStatus, setXStatus] = useState(0);
  const [yStatus, setYStatus] = useState(0);
  const [showXy, setShowXy] = useState(false);

  const xyView = useMemo(() => {
    if (showXy) {
      return (
        <p>
          <strong>X={xStatus}</strong>
          <strong>Y={yStatus}</strong>
        </p>
      );
    }
    return "";
  }, [showXy, xStatus, yStatus]);

    const mouseMovement = useCallback((event) => {
        setXStatus(event.x);
        setYStatus(event.y);
    }, []);

    const detectKeyPress = useCallback((keyEvent) => {
        if(keyEvent.key === "Escape") {
            setXStatus(0);
            setYStatus(0);
            window.removeEventListener("mousemove", mouseMovement);
            window.removeEventListener("keyup", detectKeyPress);
            setShowXy(false);
        }
    }, [mouseMovement]);

  useEffect(() => {
      return () => {
          window.removeEventListener("mousemove", mouseMovement);
          window.removeEventListener("keyup", detectKeyPress);

      }
  }, [mouseMovement, detectKeyPress])

  const showXyButton = () => {
      setShowXy(!showXy);
      window.removeEventListener("mousemove", mouseMovement);
      window.removeEventListener("keyup", detectKeyPress);

      if (showXy === false) {
          window.addEventListener("mousemove", mouseMovement);
          window.addEventListener("keyup", detectKeyPress);
      }
  }

  return (
    <div>
      <h1>XY-Viewer</h1>
      <button type="button" onClick={showXyButton}>On/Off</button>
      {xyView}
    </div>
  );
}
