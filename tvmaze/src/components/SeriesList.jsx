export default function SeriesList({ resultados }) {
  return (
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
  )
}
