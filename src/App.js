import React, { useState } from "react";
import "./App.css";
import Key from "./Key";

const notas = [
  {
    nombre: "DO",
    link: require("./notas/do.wav"),
    tieneSostenido: true
  },
  {
    nombre: "RE",
    link: require("./notas/re.wav"),
    tieneSostenido: true
  },
  {
    nombre: "MI",
    link: require("./notas/mi.wav")
  },
  {
    nombre: "FA",
    link: require("./notas/fa.wav"),
    tieneSostenido: true
  },
  {
    nombre: "SOL",
    link: require("./notas/sol.wav"),
    tieneSostenido: true
  },
  {
    nombre: "LA",
    link: require("./notas/la.wav"),
    tieneSostenido: true
  },
  {
    nombre: "SI",
    link: require("./notas/si.wav")
  }
];

function App() {
  const [estaSonando, setEstaSonando] = useState(null);

  const handleClick = (nota) => {
    setEstaSonando(nota.nombre);
    const sonido = new Audio(nota.link);
    sonido.play();
    setTimeout(() => {
      setEstaSonando(null);
    }, 150);
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>
          Hecho con <span>❤️</span> por Silvia 👩
        </h2>
        <div className="esta-sonando">{estaSonando && `suena ${estaSonando}`}</div>
      </div>
      <div className="contenedor">
        {notas.map((nota, i) => (
          <Key
            key={i}
            estaSonando={estaSonando}
            nota={nota}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>

  );
}

export default App;
