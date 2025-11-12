import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";
import { searchSeries } from "./components/TvMazeAPI";

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]); // esto será la lista de series

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // para que no recargue la página

    if (busqueda.trim() === ""){
      setResultados([]);
      return
    }

    searchSeries(busqueda)
      .then(data => setResultados(data))
      .catch(() => setResultados([]));
  }

  return (
    <div className = "app">
      <h1>Buscador de series</h1>
      <SearchBar
        busqueda = {busqueda}
        onChange = {handleChange}
        onSubmit = {handleSubmit}
      />

      <p className = "search-text">Texto de búsqueda: {busqueda}</p>

      <SeriesList resultados = {resultados} />
    </div>
  )
}
