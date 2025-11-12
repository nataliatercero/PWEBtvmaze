import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SeriesList from "./components/SeriesList";
import { searchSeries } from "./components/TvMazeAPI";
import FavouriteButton from "./components/FavouriteButton";
import Modal from "./components/Modal";

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]); 
  const [favoritos, setFavoritos] = useState([]);
  const [serieSeleccionada, setSerieSeleccionada] = useState(null);

  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(guardadas);
  }, [])

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

  const actualizarFavoritos = () => {
    const guardadas = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(guardadas);
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

      <SeriesList 
        resultados = {resultados} 
        onToggle = {actualizarFavoritos}
        onSelect = {setSerieSeleccionada}
      />

      <section className = "favoritos">
        <h2>Mis series favoritas</h2>
        {favoritos.length === 0 ? (
          <p>No hay series guardadas.</p>
        ) : (
          <div className = "series-grid">
            {favoritos.map((serie) => (
              <div className="serie-card" key={serie.id} onClick={() => setSerieSeleccionada(serie)}>
                {serie.imagen ? (
                  <img src = {serie.imagen} alt = {serie.nombre} />
                ) : (
                  <div className = "no-image">Sin imagen</div>
                )}
                <h3>{serie.nombre}</h3>
                <FavouriteButton serie = {serie} onToggle={actualizarFavoritos} />
              </div>  
            ))}
          </div>
        )}
      </section>
      <Modal serie={serieSeleccionada} onClose={() => setSerieSeleccionada(null)} />
    </div>
  )
}
