import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Count from "./components/count"

export class Text extends Component {
  render() {
    const { array, multiply, title, object, state } = this.props;
    const mappedNumbers = array.map(multiply);
    return (
      <div>
        <p>{title}</p>
        <p>{object}</p>
        <p>{mappedNumbers.join(", ")}</p>
      </div>
    );
  }
}

export class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: this.props.contadorInicial };
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }
  render() {
    return <ContadorNuevo numero={this.state.contador} />;
  }
}
///default props///////
Contador.defaultProps = {
  contadorInicial: 0,
};
/////////////////////////////////////////
export class ContadorNuevo extends Component {
  render() {
    return <span>{this.props.numero}</span>;
  }
}

function App() {
  const lista = [1, 2, 3];
  const object = { nombre: "yo", edad: "no te incumbe" };
  return (
    <div className="App">
      <header className="App-header">
        <Text
          array={lista}
          object={object.nombre}
          multiply={(number) => number * 3}
        />
        <Contador contadorInicial={1} />
        <Count />
      </header>
    </div>
  );
}

export default App;
