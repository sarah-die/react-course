import React from "react";

export class App extends React.Component {
  state = {
    counterValue: 10,
  };

  componentDidMount() {
    console.log("neues interval");
    // this erzeugt neue Referenz
    this.myInterval = setInterval(() => {
      this.setState((state) => {
        if (state.counterValue > 0) {
          return { counterValue: state.counterValue - 1 };
        } else {
          return { counterValue: 0 };
        }
      });
    }, 1000);
  }

  // sicherstellen, dass Komponente aufgeräumt wird
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  // beobachten, wie sich die Werte verändern
  // oder Differenzen zum vorherigen Wert darstellen
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  // Intervall läuft unendlich lange, wenn die 0 erreich wird
  // Lösung:
  shouldComponentUpdate() {
    if (this.state.counterValue === 0) {
      return false;
    }
    return true;
  }

  render() {
    return <strong>Countdown = {this.state.counterValue}</strong>;
  }
}
