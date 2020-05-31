/////////////workshop/////
import React, { useState } from "react";

const Count = () => {
  const [cuenta, setCuenta] = useState(0);

  function agregar() {
    setCuenta(cuenta + 1);
  }

  function descontar() {
    if (cuenta > 0) {
      setCuenta(cuenta - 1);
    }
  }
  return (
    <div>
      <button onClick={agregar}>Agregar</button>
      <h1>Contador: {cuenta}</h1>
      <button onClick={descontar}>Descontar</button>
    </div>
  );
};

export default Count;
//////////////////
