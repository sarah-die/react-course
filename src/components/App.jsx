import React, { useState } from "react";
import { StatusChanger } from "./StatusChanger";

export function App() {
  const [status, setStatus] = useState("Verfügbar ✅");

  // 3)
  // onStatusChange im StatusChanger bekommt Status übergeben; dieser (newStatus) kann hier ausgelesen werden
  const onStatusChange = (newStatus) => setStatus(newStatus);

  // 1)
  // da StatusChanger eine CustomComponent ist, kann onClick={buttonClicked} nicht funktionieren
  // jede Property, die an Custom Components übergeben wird, wird in die Props geschrieben
  // übergabe von beliebig benamten Funktionen ist möglich (hier onStatusChange)
  return (
    <div>
      <h1>Status: {status}</h1>

      <p>
        <StatusChanger
          onStatusChange={onStatusChange}
          statusText="Verfügbar ✅"
        />
        <StatusChanger
          onStatusChange={onStatusChange}
          statusText="Beschäftigt 🗓"
        />
        <StatusChanger
          onStatusChange={onStatusChange}
          statusText="Offline 🚫"
        />
      </p>
    </div>
  );
}
