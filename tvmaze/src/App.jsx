import { useState } from "react";
import "./App.css";

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]); // esto será la lista de series

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // para que no recargue la página
    console.log("Buscando serie:", busqueda);

    if (busqueda.trim() === ""){
      setResultados([]);
      return
    }

    setResultados([
      { id: 1, nombre: `Resultado de prueba para "${busqueda}"`}
    ])
  }

  return (
    <div className = "app">
      <h1>Buscador de series</h1>

      <form onSubmit = {handleSubmit}>
      <input
        id = "searchInput"
        type = "text"
        placeholder = "Escribe una serie..."
        value = {busqueda}
        onChange = {handleChange}
      />
      <button type = "submit">Buscar</button>
      </form>

      <p className = "search-text">Texto de búsqueda: {busqueda}</p>

      <section className = "resultados">
        <h2>Resultados</h2>
        {resultados.length === 0 ? (
          <p>No hay resultados</p>
        ) : (
          <ul>
            {resultados.map((r) => (
              <li key = {r.id}>{r.nombre}</li>
            ))}
          </ul>
        )}
      </section> 
    </div>
  )
}
