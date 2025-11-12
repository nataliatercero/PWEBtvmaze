import FavouriteButton from "./FavouriteButton";

export default function SeriesList({ resultados, onToggle, onSelect }) {
  return (
    <section className="resultados">
      <h2>Resultados</h2>
      {resultados.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <div className="series-grid">
          {resultados.map((serie) => (
            <div className="serie-card" key={serie.id} onClick = {() => onSelect(serie)}>
              {serie.imagen ? (
                <img src={serie.imagen} alt={serie.nombre} />
              ) : (
                <div className="no-image">Sin imagen</div>
              )}
              <h3>{serie.nombre}</h3>
              <div onClick = {(e) => e.stopPropagation()}>
                <FavouriteButton serie = {serie} onToggle={onToggle} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
