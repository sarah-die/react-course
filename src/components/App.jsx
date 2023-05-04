import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./Home";
import { Photos } from "./Photos";
import { SinglePhoto } from "./SinglePhoto";

export function App() {
  const imageIds = ["111", "211", "311", "351", "678"];

  return (
    // Wrapper, um Pfade im Browser verarbeiten zu können
    <BrowserRouter>
      <header>
        <h1>Routing 🔀</h1>

        <nav>
          <Link
            // Komponente, damit das Routing im Frontend ohne Page Reload erfolgt
            to="/"
          >Home</Link>
          <Link to="/photos">Fotos</Link>
        </nav>
      </header>

      <hr />

      <main>
        <Routes
          // als Grundlage, um Components Routen zu können
        >
          <Route
            // einzelne Routen
            path="/" element={<Home />} />
          <Route
            path="/photos"
            // Sub-Routen
          >
            <Route
              // path kann hier leer bleiben, da /photos vom Eltern-Element übernommen wird
              path=""
              element={<Photos imageIds={imageIds} />}
            />

            <Route
              // Pfad parametrisieren
              path=":id"
              element={<SinglePhoto />}
            />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
