export async function searchSeries(query) {
    if (!query || query.trim() === "") {
        return Promise.resolve([]);
    }

    return fetch("https://api.tvmaze.com/search/shows?q=" + query)
        .then(response => response.json())
        .then(data => {
            return data.map(item => ({
                id: item.show.id,
                nombre: item.show.name,
                image: item.show.image ? item.show.image.medium : null,
                resumen: item.show.summary ? item.show.summary : "No hay descripción disponible"
            }))
        })
        .catch(error => {
            console.error("Error al hacer la petición:", error);
            return [];
        })
}