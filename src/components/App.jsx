import React from "react";

export class App extends React.Component {
  state = {
    // Countdown startvalue
    counterValue: 10,
  };

  // Methode wird aufgerufen, wenn die Komponente gemountet wurde
  componentDidMount() {
    setInterval(() => {
      // setState = aktuellen State mit einem neuen State überschreiben
      // hierbei kann setState eine Funktion entgegennehmen
      // diese Funktion erhält den alten State als Parameter und gibt den neuen State zurück
      this.setState((state) => {
        if (state.counterValue > 0) {
          return { counterValue: state.counterValue - 1 };
        } else {
          return { counterValue: 0 };
        }
      });
      // Alternativ:
      // this.setState({
      //   counterValue: Math.max(0, this.state.counterValue -1),
      // });
      //
    }, 1000);
    // timeout = 1000 millisekunden = 1 sekunde
  }

  render() {
    return <strong>Countdown = {this.state.counterValue}</strong>;
  }
}
