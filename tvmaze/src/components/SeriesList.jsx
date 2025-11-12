import FavouriteButton from "./FavouriteButton";

export default function SeriesList({ resultados, onToggle }) {
  function limpiarResumen(texto) {
    if (!texto) return "Sin descripción disponible";
    const sinEtiquetas = texto.replace(/<[^>]+>/g, "");
    return sinEtiquetas.length > 150 ? sinEtiquetas.slice(0, 150) + "..." : sinEtiquetas;
  }

  return (
    <section className="resultados">
      <h2>Resultados</h2>
      {resultados.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <div className="series-grid">
          {resultados.map((serie) => (
            <div className="serie-card" key={serie.id}>
              {serie.imagen ? (
                <img src={serie.imagen} alt={serie.nombre} />
              ) : (
                <div className="no-image">Sin imagen</div>
              )}
              <h3>{serie.nombre}</h3>
              <FavouriteButton serie = {serie} onToggle = {onToggle} />
              <p>{limpiarResumen(serie.resumen)}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
