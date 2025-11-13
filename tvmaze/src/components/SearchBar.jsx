export default function SearchBar({ busqueda, onChange, onSubmit }) {
  return (
    <form onSubmit = {onSubmit}>
        <input
            id = "searchInput"
            type = "text"
            placeholder = "Escribe una serie..."
            value = {busqueda}
            onChange = {onChange}
        />
        <button type = "submit">Buscar</button>
    </form>
  )
}
