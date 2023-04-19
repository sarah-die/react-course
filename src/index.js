import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/App";


// values hinzufügen und übergeben
// auch möglich für Objekte:
const nameObject = {
    prename: "Sarah",
    lastname: "Diethert",
}

ReactDOM.render(
  <React.StrictMode>
    <App title="test" name="diesIstEinName" nameObject={nameObject} />
  </React.StrictMode>,
  document.getElementById('root')
);

// jsx wird in Funktionsaufrufe umgewandelt
// ReactDOM.render(
//     React.createElement ("p", null, "Hallo Hallo"),
//     document.getElementById("root")
// )
