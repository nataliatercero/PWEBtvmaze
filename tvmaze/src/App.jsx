import { useState } from "react";
import "./App.css";

export default function App() {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (event) => {
    console.log("Valor introducido:", event.target.value);
    setBusqueda(event.target.value);
  }

  return (
    <div className = "app">
      <h1>Buscador de series</h1>

      <input
        id = "searInput"
        type = "text"
        placeholder = "Escribe una serie..."
        value = {busqueda}
        onCahnge = {handleCahnge}
      />

      <p>Texto de búsqueda: {busqueda}</p>  
    </div>
  )
}
