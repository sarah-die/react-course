import { useEffect, useState } from "react";

// Komponente zeigt den Link an, über den man hovert
export function Linkchecker() {
  const [link, setLink] = useState("");

  // globaler Event-Listener für alle mouseover-Events
  // leeres DepArray, damit nur ein EventListener registriert wird
  useEffect(() => {

    // diese Funktion soll bei mouseover aufgerufen werden
    const mouseover = (event) => {
      // betroffenes Element/ Referenz darauf
      const domElem = event.target;
      // AnchorTag = Link
      if (domElem.nodeName === "A") {
        // event.target.href
        setLink(domElem.href);
      } else {
        setLink("");
      }
    };

    window.addEventListener("mouseover", mouseover);

    // cleanUp beim unmounten der component mit der selben Funktionsreferenz
    return () => {
      window.removeEventListener("mouseover", mouseover);
    };
  }, []);

  return <em>Hovered Link: {link}</em>;
}
