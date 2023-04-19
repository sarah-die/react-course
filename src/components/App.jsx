import React from "react";


// übergebene Values aus den Props auslesen und verwenden
export class App extends React.Component {
    render() {
        const { title, nameObject } = this.props;
        return <div title={title}>hallo {nameObject.prename} {nameObject.lastname} </div>
    }
}