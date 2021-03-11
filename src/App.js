import React, { useState } from "react";
import "./App.css";
import Key from "./Key";
import notaDo from "./notas/do.wav";
import notaRe from "./notas/re.wav";
import notaMi from "./notas/mi.wav";
import notaFa from "./notas/fa.wav";
import notaSol from "./notas/sol.wav";
import notaLa from "./notas/la.wav";
import notaSi from "./notas/si.wav";



const notas = [
  {
    nombre: "DO",
    link: notaDo,
    tieneSostenido: true
  },
  {
    nombre: "RE",
    link: notaRe,
    tieneSostenido: true
  },
  {
    nombre: "MI",
    link: notaMi
  },
  {
    nombre: "FA",
    link: notaFa,
    tieneSostenido: true
  },
  {
    nombre: "SOL",
    link: notaSol,
    tieneSostenido: true
  },
  {
    nombre: "LA",
    link: notaLa,
    tieneSostenido: true
  },
  {
    nombre: "SI",
    link: notaSi
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
